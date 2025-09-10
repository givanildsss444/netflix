import "./Home.css";

import NaveBar from "../Components/NavBar";
import InfoPrinc from "../Components/InfoPrinc";
import Catalogo from "../Components/Catalogo";
import CarroselNum from "../Components/CarroselNum";
import { Link } from "react-router-dom";


function Home({lista1, lista2, listaNum}){

            const selection = lista1.map(a => {

                <div className="todosFilme">

                    <Link to="/details" style={{display:"block"}}>
                        <Catalogo listadeFilmes={a.filmes} descricao="Novidades na Netflix"/>
                    </Link>


                </div>   

            })
    

    return(

        <div className="tela">
            
            <div className="casa">
                <NaveBar />
                <InfoPrinc />

                {selection}

            </div>
        
        </div>
    );
}

export default Home;