import "./DetailsButton.css"
import { FaCheck } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

import { FaCheck } from "react-icons/fa6";


function DetailsButton(){
    return(
        <>
            <div className="buttons">
                                    <div className="button-watch">
                                        <FaPlay /> <span> Assistir</span>
                                    </div>
        
                                    <div className="button-my-list">
                                        <FaCheck /> <span> Minha Lista</span>
                                    </div>
            </div>
        </>
    )
}
export default DetailsButton