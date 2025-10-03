import { useEffect, useState } from 'react';
import './style.css';
import { useAuth } from "../../context/AuthContext";
import { toast } from 'react-toastify';
import api from '../../services/api';
import { useParams, useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";

function FormPost() {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [loading, setloading] = useState(false);

    const { user } = useAuth();

    const { id } = useParams();

    const navigate = useNavigate();


     async function handleSubmit (e){
        e.preventDefault();
        const token = localStorage.getItem("token");
        console.log(token)

        try{
            setloading(true);
            const response = await api.post("posts", {
                titulo: title, 
                conteudo: content,
                autor_id: user.id
                },
                {
                    headers: {
                    Authorization: `Bearer ${token}`,
                    },
                }
            )
            console.log(response.data);
            if(response.data.success === true){
                setTitle("");
                setContent("");
                toast.success(response.data.message)
            }
            setloading(false);
        }catch (error) {
            setloading(false);
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

    async function getDetails(){
        try{
            await api.get(`posts/${id}`, {
                params: {
                    language: "pt-BR",
                },
            })
            .then( (response) => {
                if(response.data.success == true){
                setTitle(response.data.data.titulo);
                setContent(response.data.data.conteudo);
                }
            })
        }catch (error) {
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

    async function update(e){
         e.preventDefault();
        try{
            setloading(true);
            const response = await api.put(`posts/${id}`, {
                titulo: title, 
                conteudo: content,
                autor_id: user.id
                }
            )
            console.log(response.data);
            if(response.data.success === true){
                toast.success(response.data.message)
                setTimeout(() => {
                    navigate("/home");
                }, 5000); 
            }
            setloading(false);
        }catch (error) {
            setloading(false);
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

    function handle(e){
        e.preventDefault();
        if(id){
            update(e);
        }else{
            handleSubmit(e);
        }
    }

     useEffect(() => {
        if(id){
            getDetails();
        }
      }, []);

    return (
        <div className="container">
        <div className="area-register">
            <form  onSubmit={handle}>
                <h3>Cadastrar Post</h3>
                <div className="form-group">
                    <label>Titulo</label>
                    <input type="text" value={title} onChange={ (e) => setTitle(e.target.value) }  placeholder="Titulo" required />
                </div>
                <div className="form-group">
                    <label>Conteúdo</label>
                    <textarea placeholder="conteúdo" value={content} onChange={ (e) => setContent(e.target.value) }  required  rows={10} cols={50}  
                    />
                </div>
                <div className="button-register">
                    <button type="submit" className="button">  { loading ?  ( <FaSpinner className="spinner" />) : id  ?  "Atualizar" : "Cadastrar"   }</button>
                </div>
            </form>
        </div>
        </div>
    );
}

export default FormPost;
