import BarDetails from "../Components/BarDetails";
import DetailsMovie from "../Components/DetailsMovie";
import "./Details.css"

import DetailsButton from '../Components/DetailsButton'

import DetailsText from "../Components/DetailsText";



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