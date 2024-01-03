import { Github, Linkedin } from 'react-bootstrap-icons';

const Footer = () => {

    let today = new Date();

    return (
    <footer>
        <div class="container text-center p-3">
        <a href="https://github.com/ekruger123" target="blank" className="p-2"><Github size='25'/></a>
        <a href="https://www.linkedin.com/in/elizabeth-kruger/" target="blank" className="p-2"><Linkedin size='25'/></a>
    
        <h6 className='fst-italic p-2'>Elizabeth Kruger - {today.getFullYear()}</h6>
        </div>
    </footer>
    )
} 

export default Footer;