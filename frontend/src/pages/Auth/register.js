import { useState } from "react";
import './style.css';
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    async function handleSubmit (e){
        e.preventDefault();

        if(password != confirmPassword){
            toast.warn("Verifique sua senha!");
            return;
        }

        try{
            const response = await api.post("auth/register", {
                nome: name, 
                email: email,
                senha: password
            })
            console.log(response);
            if(response.data.success == true){
                toast.success(response.data.message)
                setName("");
                setEmail("");
                setPassword("");
                setConfirmPassword("");
                setTimeout(() => {
                    navigate("/login");
                }, 5000); 
            }
            
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

    return (
        <div className="container">
        <div className="area-register">
            <form onSubmit={handleSubmit}>
                <h3>Registro</h3>
                <div className="form-group">
                    <label>Nome</label>
                    <input type="text" value={name} onChange={ (e) => setName(e.target.value) } placeholder="Nome" required />
                </div>
                <div className="form-group">
                    <label>E-mail</label>
                    <input type="email" value={email} onChange={ (e) => setEmail(e.target.value) } placeholder="E-mail" required />
                </div>
                <div className="form-group">
                    <label>Senha</label>
                    <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } placeholder="Senha" required />
                </div>
                <div className="form-group">
                    <label>Confirma Senha</label>
                    <input type="password" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) } placeholder="Confirmar senha" required />
                </div>
                <br></br>
                <div className="button-register">
                    <button type="submit" className="button">Cadastrar</button>
                </div>
            </form>
        </div>
        </div>
    );
}


export default Register;