import espaguete from "../assets/img/espaguete.jpg";
import lasanha from "../assets/img/lasanha.jpg";
import ravioli from "../assets/img/ravioli.jpg";
import capeletti from "../assets/img/capeletti.jpg";
import nhoque from "../assets/img/nhoque.jpg";
import bruschetta from "../assets/img/bruschetta.jpg";
import carpaccio from "../assets/img/carpaccio.jpg";
import paella from "../assets/img/paella.jpg";
import gelowisky from "../assets/img/whiskygelo.jpeg";
import amstel from "../assets/img/amstel.jpg";
import fileMignon from "../assets/img/file-mignon.jpg";
import picanha from "../assets/img/picanha.png";
import campari from "../assets/img/campari.jpeg";
import seleta from "../assets/img/seleta.png";
import heineken from "../assets/img/heineken.jpg";
import cerveja from "../assets/img/cerveja.jpg";
import refrigerante from "../assets/img/refrigerante.jpg";
import suco from "../assets/img/suco.jpg";
import whiskey from "../assets/img/whiskey.jpg";
import agua from "../assets/img/agua.jpg";
import aperol from "../assets/img/aperolspritz.jpg";
// import tomahwankSteak from "../assets/img/tomahawk-steak.jpg";
// import saladaCeasar from "../assets/img/salada-ceasar.jpg";
// import saladaCaprese from "../assets/img/salada-caprese.jpg";
// import saladaWaldorf from "../assets/img/salada-waldorf.jpg";

export const produtos = [
  {
    id: 1,
    nome: "Espaguete",
    categoria: "Porções",
    preco: 20.00,
    descricao:
      "Um delicioso espaguete que pode ser combinado com diversos molhos, como bolonhesa, carbonara, alho e oleo e pesto",
    imagem: espaguete,
  },
  {
    id: 2,
    nome: "Lasanha",
    categoria: "Porções",
    preco: 25.00,
    descricao:
      "Uma maravilhosa lasanha com recheios variados como carne moída, frango, presunto e queijo, legumos e molho branco ou vermelho",
    imagem: lasanha,
  },
  {
    id: 3,
    nome: "Ravioli",
    categoria: "Porções",
    preco: 24.25,
    descricao:
      "Uma massa recheada com diferentes ingredientes como queijo, carne, espinafre ou cogumelos",
    imagem: ravioli,
  },
  {
    id: 4,
    nome: "Capeletti",
    categoria: "Porções",
    preco: 25.50,
    descricao:
      "Uma massa simples servida com diversos tipos de molhos como bolonhesa, carbonara, alfredo, pesto ou manteiga e sálvia",
    imagem: capeletti,
  },
  {
    id: 5,
    nome: "Nhoque",
    categoria: "Porções",
    preco: 58.99,
    descricao:
      "Massa feita de farinha de trigo e ovos, servida com molhos simples ou elaborados como, manteiga e parmesão, frango ao creme ou camarão alho e oleo",
    imagem: nhoque,
  },
  {
    id: 6,
    nome: "Bruschetta",
    categoria: "Entradas",
    preco: 19.29,
    descricao:
      "Prato original da Itália, que leva fatias de pão italiano torrado, tomate picado, alho, manjericão e azeite",
    imagem: bruschetta,
  },
  {
    id: 7,
    nome: "Carpaccio",
    categoria: "Entradas",
    preco: 32.0,
    descricao:
      "Prato de origem francesa, que leva fatias finas de salmão cru, alcaparras, queijo parmesão ralado e molho mostarda",
    imagem: carpaccio,
  },
  {
    id: 8,
    nome: "Paella",
    categoria: "Entradas",
    preco: 65.0,
    descricao:
      "Um prato tipico do leste da Espanha, que leva arroz e frutos do mar como mariscos, polvo, camarões, mexilhões e lulas",
    imagem: paella,
  },
  {
    id: 9,
    nome: "Picanha",
    categoria: "Entradas",
    preco: 92.99,
    descricao:
      "Uma execelente carne que tem uma capa de gordura e fibras generosas que acentuam o sabor e a maciez do corte",
    imagem: picanha,
  },
  {
    id: 10,
    nome: "Filé Mignon",
    categoria: "Entradas",
    preco: 88.99,
    descricao:
      "Com pouca gordura e fibras, além de muito macia, essa carne vai bem com diversos tipos de molhos",
    imagem: fileMignon,
  },
  // {
  //   id: 11,
  //   nome: "",
  //   categoria: "Sem Álcool",
  //   preco: 41.99,
  //   descricao:
  //     "Com pouca gordura e fibras, além de muito macia, essa carne vai bem com diversos tipos de molhos",
  //   imagem: ,
  // },
  // {
  //   id: 12,
  //   nome: "",
  //   categoria: "Sem Álcool",
  //   preco: 35.99,
  //   descricao:
  //     "Uma execelente carne que tem uma capa de gordura e fibras generosas que acentuam o sabor e a maciez do corte",
  //   imagem: picanha,
  // },
  {
    id: 13,
    nome: "Água",
    categoria: "Sem Álcool",
    preco: 3.99,
    descricao:
      "Uma carne que tem um ótimo nível de marmoreio e um sabor delicado, podendendo ser feita tanto na grelha ou na frigideira",
    imagem: agua,
  },
  {
    id: 14,
    nome: "Suco",
    categoria: "Sem Álcool",
    preco: 19.99,
    descricao:
      "Mais puro suco de laranjas holandesas frescas e levemente adocicada",
    imagem: suco,
  },
  {
    id: 15,
    nome: "Refrigerante",
    categoria: "Sem Álcool",
    preco: 6.99,
    descricao:
      "Um refrescante refrigerante de cola com pequenos pedaços de limão e raspas de hortelã",
    imagem: refrigerante,
  },
  {
    id: 21,
    nome: "Cerveja Artesanal",
    categoria: "Cervejas",
    preco: 12.99,
    descricao:
      "Cerveja artesanal de produção alemã que leva ingredientes nobres como malte, lúpulu, água e levedura ",
    imagem: cerveja,
  },
  {
    id: 22,
    nome: "Heineken",
    categoria: "Cervejas",
    preco: 10.99,
    descricao:
      "Cerveja estupidamente gelada",
    imagem: heineken,
  },
  {
    id: 23,
    nome: "Amstel",
    categoria: "Cervejas",
    preco: 9.99,
    descricao:
      "Super gelada do jeito que você gosta",
    imagem: amstel,
  },
  // {
  //   id: 24,
  //   nome: "",
  //   categoria: "Cervejas",
  //   preco: 17.99,
  //   descricao:
  //     "Um poderoso whiskey sabor bourbon, envelhecido em barris de carvalho branco carbonizado",
  //   imagem: whiskey,
  // },
  // {
  //   id: 25,
  //   nome: "",
  //   categoria: "Cervejas",
  //   preco: 4.99,
  //   descricao: "Água mineral saborizada com limão siciliano",
  //   imagem: ,
  // },
  {
    id: 26,
    nome: "Whisky",
    categoria: "Destilados",
    preco: 9.8,
    descricao:
      "Um poderoso whisky sabor bourbon, envelhecido em barris de carvalho branco carbonizado",
    imagem: whiskey,
  },
  {
    id: 27,
    nome: "Wisky com Gelo",
    categoria: "Destilados",
    preco: 11.0,
    descricao:
      "Delicioso Wisky com gelo",
    imagem: gelowisky,
  },
  {
    id: 28,
    nome: "Campari",
    categoria: "Destilados",
    preco: 10.0,
    descricao:
      "Campari super gelado",
    imagem: campari,
  },
  {
    id: 29,
    nome: "Cachaça Seleta",
    categoria: "Destilados",
    preco: 4.99,
    descricao:
      "Deliciosa cachaça diretamente do alambique",
    imagem: seleta,
  },
  {
    id: 30,
    nome: "Aperolspritz",
    categoria: "Destilados",
    preco: 10.99,
    descricao:
      "Salada tradicional da cidade de Nice, feita com tomate, ovos cozidos, azeitona niçoise, azeite e atum",
    imagem: aperol,
  },
];
