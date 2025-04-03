import "./style.css";

import icone1 from "../../assets/entrada.png";
import icone2 from "../../assets/porcao.png";
import icone3 from "../../assets/agua.png";
import icone4 from "../../assets/bebidas.png";
import icone5 from "../../assets/destilado.png";

const Categorias = ({ handleFiltro, botaoClicado }) => {
  return (
    <section className="secao-categorias">
      <div className="container-botoes">
        <button
          className={botaoClicado === "Entradas" ? "acenderBtn" : "apagarBtn"}
          onClick={() => handleFiltro("Entradas")}
        >
          <img src={icone1} alt="ícone" />
          Entradas
        </button>

        <button
          className={botaoClicado === "Porções" ? "acenderBtn" : "apagarBtn"}
          onClick={() => handleFiltro("Porções")}
        >
          <img src={icone2} alt="ícone" />
          Porções
        </button>

        <button
          className={botaoClicado === "Sem Álcool" ? "acenderBtn" : "apagarBtn"}
          onClick={() => handleFiltro("Sem Álcool")}
        >
          <img src={icone3} alt="ícone" />
          Sem Álcool
        </button>

        <button
          className={botaoClicado === "Cervejas" ? "acenderBtn" : "apagarBtn"}
          onClick={() => handleFiltro("Cervejas")}
        >
          <img src={icone4} alt="ícone" />
          Cervejas
        </button>

        <button
          className={botaoClicado === "Destilados" ? "acenderBtn" : "apagarBtn"}
          onClick={() => handleFiltro("Destilados")}
        >
          <img src={icone5} alt="ícone" />
          Destilados
        </button>
      </div>
    </section>
  );
};

export default Categorias;
