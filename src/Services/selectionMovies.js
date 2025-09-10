import Home from "../pages/Home";

// Imagens
import st from "../Imagens/stranger.jpg";
import peak from "../Imagens/peak.jpg";
import suits from "../Imagens/suitscapa.webp";
import umbrella from "../Imagens/theumbrella.jpg";
import kingdom from "../Imagens/theking.jpg";
import lupin from "../Imagens/lupin.jpg";
import round from "../Imagens/round.jpg";
import lacasa from "../Imagens/lacasapapel.jpeg";
import ragnarok from "../Imagens/ragnarok.jpg";
import prisao from "../Imagens/prisao.webp";
import narcos from "../Imagens/narcos.jpeg";
import vadia from "../Imagens/vadia.jpg";

// Lista de filmes (cada objeto representa um grupo de filmes)
const listaFilmes = [
  { filmes: [st, peak, suits, umbrella, kingdom, lupin] },
  { filmes: [round, lacasa, ragnarok, prisao, narcos, vadia] }
];

export default function SelectionMovies() {
  return <Home lista={listaFilmes} />;
}
