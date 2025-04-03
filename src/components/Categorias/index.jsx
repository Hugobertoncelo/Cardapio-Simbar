import "./style.css";

import icone1 from "../../assets/variedades.png";
import icone2 from "../../assets/porcao.png";
import icone3 from "../../assets/agua.png";
import icone4 from "../../assets/bebidas.png";
import icone5 from "../../assets/destilado.png";
import icone6 from "../../assets/caldos.png";
import icone7 from "../../assets/salgados.png";

const Categorias = ({ handleFiltro, botaoClicado }) => {
  return (
    <section className="secao-categorias">
      <div className="container-botoes">
        <button
          className={botaoClicado === "Cervejas" ? "acenderBtn" : "apagarBtn"}
          onClick={() => handleFiltro("Cervejas")}
        >
          <img src={icone4} alt="ícone" />
          Cervejas
        </button>

        <button
          className={botaoClicado === "Porções" ? "acenderBtn" : "apagarBtn"}
          onClick={() => handleFiltro("Porções")}
        >
          <img src={icone2} alt="ícone" />
          Porções
        </button>

        <button
          className={botaoClicado === "Destilados" ? "acenderBtn" : "apagarBtn"}
          onClick={() => handleFiltro("Destilados")}
        >
          <img src={icone5} alt="ícone" />
          Destilados
        </button>

        <button
          className={botaoClicado === "Sem Álcool" ? "acenderBtn" : "apagarBtn"}
          onClick={() => handleFiltro("Sem Álcool")}
        >
          <img src={icone3} alt="ícone" />
          Sem Álcool
        </button>

        <button
          className={botaoClicado === "Caldos" ? "acenderBtn" : "apagarBtn"}
          onClick={() => handleFiltro("Caldos")}
        >
          <img src={icone6} alt="ícone" />
          Caldos
        </button>

        <button
          className={botaoClicado === "Salgados" ? "acenderBtn" : "apagarBtn"}
          onClick={() => handleFiltro("Salgados")}
        >
          <img src={icone7} alt="ícone" />
          Salgados
        </button>

        <button
          className={botaoClicado === "Variedades" ? "acenderBtn" : "apagarBtn"}
          onClick={() => handleFiltro("Variedades")}
        >
          <img src={icone1} alt="ícone" />
          Variedades
        </button>
      </div>
    </section>
  );
};

export default Categorias;
