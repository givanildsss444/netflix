import NaveBar from "../Components/NavBar";
import "./Details.css"

import peaklogo from "../Imagens/logopeak.png";
import { BsHandThumbsUpFill } from "react-icons/bs";
import { Md18UpRating } from "react-icons/md"

export default function Details(){

    return(

        <div className="container-details">

            <NaveBar />

            <div className="main-details">

                <div className="container-info-details">
                    <div className="info-details">

                        <img src={peaklogo} style={{height:"300px"}}/>

                        <div className="description-details">
                            <BsHandThumbsUpFill style={{color:"white",height:'30px',width:"30px"}}/>
                            <strong>2017</strong>
                            <Md18UpRating style={{color:"white",height:'40px',width:"40px"}}/>
                            <strong>5 Temporadas</strong>
                        </div>

                    </div>
                </div>

                <div className="up-container-details"></div>

            </div>

        </div>

    );

}