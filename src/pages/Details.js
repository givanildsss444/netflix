import NaveBar from "../Components/NavBar";
import "./Details.css"

import peaklogo from "../Imagens/logopeak.png";
import { FaPlay } from "react-icons/fa";
import { BsHandThumbsUpFill } from "react-icons/bs";
import { Md18UpRating } from "react-icons/md"
import { FaCheck } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import { FaStar } from "react-icons/fa6";


export default function Details(){

    return(

        <div className="container-details">

            <NaveBar />

            <div className="main-details">

                <div className="container-info-details">
                    <div className="info-details">

                        <img src={peaklogo} style={{height:"250px", width:"300px"}}/>

                        <div className="description-details">
                            <BsHandThumbsUpFill style={{color:"white",height:'25px',width:"25px"}}/>
                            <strong>2017</strong>
                            <Md18UpRating style={{color:"white",height:'40px',width:"40px"}}/>
                            <strong>6 Temporadas</strong>
                            <FaStar style={{color:"yellow",height:'30px',width:"30px"}}/>
                            <strong>8,7/10</strong>

                        </div>
                        <div class='text-details'>
                            <strong>Uma notória gangue da inglaterra de 1919 é liderada pelo cruel tommy shelby, um criminoso disposto a subir na vida a qualquer preço.</strong>
                        </div>

                        <div className="buttons">
                            <div className="button-watch">
                                <FaPlay /> <span> Assistir</span>
                            </div>

                            <div className="button-my-list">
                                <FaCheck /> <span> Minha Lista</span>
                            </div>

                            <div className="liked">
                                <AiFillLike />
                            </div>

                        </div>
                        <div class='text-details'>
                            <div>
                                <strong class="title-details">Estrelando:</strong>
                                <strong> Cillian Murphy, Paul Anderson, Sophie Rundle</strong>
                            </div>
                            <div>
                                <strong class="title-details">Gêneros:</strong>
                                <strong> Séries dramáticas, Britânicos, Obras de época</strong>
                            </div>
                            <div>
                                <strong class="title-details">cenas e momentos:</strong>
                                <strong> Violento</strong>
                            </div>
                           
                        </div>
                        
                    </div>
                </div>

                <div className="up-container-details"></div>

            </div>

        </div>

    );

}