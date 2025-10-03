import { useState } from "react";
import './style.css';
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa";

function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState(false);

  const { login: loginUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setloading(true);
    const logged = await loginUser(login, password);

    if (logged) {
      setloading(false);
      navigate("/home");
    } else {
      setloading(false);
      toast.warn("Login ou senha inválido !");
    }
  };

  return (
    <div className="container">
      <div className="area-login">
        <h2>Portal de Posts</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Login</label>
            <input type="text" value={login} onChange={ (e) => setLogin(e.target.value) } placeholder="Digite seu login" required />
          </div>
          <div className="form-group">
            <label>Senha</label>
            <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } placeholder="Digite sua senha" required />
          </div>
          <br />
          <button type="submit" className=" button button-submit">
            {loading  ? ( <FaSpinner className="spinner" />) : ( "Entrar" )}
          </button>
        </form>
        <br />
        {/* <a href="/register">Quero me Cadastrar</a> */}
        <Link to={`/register`} >Quero me Cadastrar</Link>
      </div>
    </div>
  );
}


export default Login;