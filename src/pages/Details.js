import BarDetails from "../Components/BarDetails";
import DetailsMovie from "../Components/DetailsMovie";
import "./Details.css"


import { FaPlay } from "react-icons/fa";

import { FaCheck } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import DetailsText from "../Components/DetailsText";
import DetailsButton from "../Components/DetailsButton";



export default function Details(){

    return(

        <div className="container-details">

            <BarDetails />

            <div className="main-details">

                <div className="container-info-details">

                    <div className="info-details">

                        <DetailsMovie />

                        <DetailsButton />

                        <div class='text-details'>

                        <DetailsText/>
                           
                        </div>
                        </div>
                        
                    </div>
                <div className="up-container-details"></div>
                </div>


            </div>


    );

}