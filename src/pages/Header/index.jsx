import "./style.css";
import Banner from "../../assets/banner.png";

const Header = () => {
  return (
    <header>
      <img src={Banner} alt="restaurante" />
      <div>
        <p>
          Telefone: (22) 99933-9204 <br />
          Endereço: Rua Augusto Cesário - 43
        </p>
      </div>
    </header>
  );
};

export default Header;
