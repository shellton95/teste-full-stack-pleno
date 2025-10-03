import { useEffect, useState } from 'react';
import api from '../../services/api';
import { toast } from 'react-toastify';
import './style.css';
import { useParams, useNavigate } from "react-router-dom";

function NoticeDetails() {
    const { id } = useParams();
    const [content, setContent] = useState(null);

    async function getDetails(){
        try{
            await api.get(`posts/${id}`, {
                params: {
                    language: "pt-BR",
                },
            })
            .then( (response) => {
                console.log(response.data.data);
                if(response.data.success == true){
                setContent(response.data.data);
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

    useEffect(() => {
        getDetails();
    }, []);


    if (!content) {
        return <div className="container">Carregando...</div>;
    }

    return (
        <div className="container" id="container ">
            <div className='notice-details'>
                <div>
                    <h2>{content.titulo}</h2>
                </div>
                <div>
                    <p>{content.conteudo}</p>
                </div>
                <div className="prop-details">
                    <p><strong>Escrito por:</strong> {content.autor?.nome}</p>
                
                    <p><strong>Publicação:</strong> {new Date(content.created_at).toLocaleDateString("pt-BR")}</p>
                </div>
            </div>
        </div>
    );
}

export default NoticeDetails;
