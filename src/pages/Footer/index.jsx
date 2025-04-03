import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./style.css";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdContactMail } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      <p>Desenvolvido por Hugo Bertoncelo</p>
      <a
        href="https://www.linkedin.com/in/hugobertoncelo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/Hugobertoncelo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.instagram.com/bertoncelo.hugo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>
      <a
        href="https://wa.me/5528999453033"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoWhatsapp />
      </a>
      <a
        href="https://hugobertoncelo.github.io/Portfolio/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MdContactMail />
      </a>
    </footer>
  );
};

export default Footer;
