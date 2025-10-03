import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import './style.css';

function Footer() {
    return (
        <footer>
            <img src="/assets/logo-uane.png" alt="Meu ícone" />
            <div className='infor'>
                <span className='mb-2'>Informações</span>
                <span> Perguntas Frequentes </span>
                <span> Politica de Privacidade</span>
            </div>
            <div className='infor'>
                <span className='mb-2'>Fale Conosco</span>
                <span> <FaWhatsapp /> (00) 99999-9999 </span>
            </div>
            <div className='infor-redes'>
                <span className='mb-2'>Nos acompanhe nas redes sociais</span>
                <div className='redes'>
                    <span> <FaInstagram /> </span>
                    <span> <FaFacebook/> </span>
                    <span> <FaYoutube/> </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;