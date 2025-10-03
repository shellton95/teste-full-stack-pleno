import { useAuth } from "../../context/AuthContext"; 
import { Link, useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import './style.css';

function Heades() {

  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login"); 
  };

  return (
    <header>
      <div className="menu">
        <ul>
          <li >
            <Link to={`/home`} className="link">Home</Link>
            <Link to={`/form-post`} className="link">Cadastrar</Link>
          </li>
        </ul>

        <div className="header-exit">
          <span>{user.nome}</span>
          <button className="buttom-exit" onClick={handleLogout}>
            <FaSignOutAlt style={{ marginRight: "8px" }} /> Sair
          </button>
        </div>
      </div>
    </header>
  );
}


export default Heades;
