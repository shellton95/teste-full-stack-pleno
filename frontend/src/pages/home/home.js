import { useEffect, useState } from "react";
import './style.css';
import api from "../../services/api";
import { toast } from "react-toastify";
import { FaEdit, FaSpinner, FaTrash } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

function Home() {

  const [posts, setPosts] = useState([]);
  const [loading, setloading] = useState(false);
  const { user } = useAuth();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [loadingDeleteId, setLoadingDeleteId] = useState(null);

  async function getPosts(){
    try{
      setloading(true);
      await api.get(`posts`, {
        params: {
            language: "pt-BR",
        },
      })
      .then( (response) => {
        if(response.data.success == true){
          setPosts(response.data.data)
          setloading(false)
        }
      })
      setloading(false)
    }catch (error) {
      setloading(false)
      if (error.response && error.response.data) {
          const { message, errors } = error.response.data;

          toast.error(message);

          if (errors) {
          Object.keys(errors).forEach((field) => {
              errors[field].forEach((msg) => {
              toast.error(msg);
              });
          });
          }
      } else {
          toast.error("Erro inesperado, tente novamente.");
      }
    }
  }

  async function deletePost(postId, autor) {
    try {
      setLoadingDeleteId(postId);
      const response = await api.delete(`posts/${postId}`, {data: { autor_id: autor }, });

      if (response.data.success) {
        getPosts();
        toast.success("Post deletado com sucesso!");
      } else {
        toast.error("Não foi possível deletar o post.");
      }
      setLoadingDeleteId(null);
    } catch (error) {
      setLoadingDeleteId(null);
      toast.error(error.response?.data?.message || error.message);
    }
  }

  function handleCategoryChange(e) {
      const { value, checked } = e.target;
      if (checked) {
          setSelectedCategories(prev => [...prev, value]);
      } else {
          setSelectedCategories(prev => prev.filter(c => c !== value));
      }
  }

  const filteredPosts = posts.filter((post) => {
    if (selectedCategories.includes("myPost")) {
      return post.autor_id === user.id;
    }
    return true; 
  });


  useEffect(() => {
    getPosts();
  }, []);

  if (loading) {
        return <div className="container">Carregando...</div>;
    }
  return (
    <div className="container" id="container-home">
      <div className="card-filter">
        <div className="filter">
          <div className="filter-category">
              <h4>Filtros</h4>
              <div className="category-list">
                  <label>
                      <input type="checkbox" value="myPost" onChange={handleCategoryChange} /> Meus Posts
                  </label>
              </div>
          </div>
        </div>
        <div className="card-list">
          {
            filteredPosts.map( (post) => {
              const formatDate = post.created_at == null ? null : new Date(post.created_at).toLocaleDateString("pt-BR");
              return  <div className="card">
                <Link to={`/notice-details/${post.id}`}>
                  <div className="card-title-details">
                    <h2 className="card-title">{post.titulo}</h2>
                  </div>
                </Link>
                <div>
                  <div className="card-details">
                    <div className="card-infor">
                      <p className="card-author"><strong>Autor:</strong></p>
                      <p className="card-author">{post.autor.nome}</p>
                    </div>
                    <div className="card-infor">
                      <p className="card-date"><strong>Publicado:</strong></p>
                      <p className="card-date">{formatDate}</p>
                    </div>
                    {
                      user.id == post.autor_id ? 
                      <div>
                        <hr></hr>
                        <div className="card-actions">
                          <Link className="action-btn edit" to={`/form-post/${post.id}`} > <FaEdit size={16} /> </Link>
                          {
                            loadingDeleteId === post.id  ? ( <FaSpinner className="spinner" />) :
                            <button className="action-btn delete" onClick={() => deletePost(post.id, post.autor.id)}>
                              <FaTrash size={16} />
                            </button>
                          }
                          
                        </div>
                      </div> 
                      : <div></div>
                    }
                  </div>
                </div>
                </div>
                
            } )
          }
        </div>
      </div>
    </div>
  );
}

export default Home;
