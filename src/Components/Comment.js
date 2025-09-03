import "./Comment.css"

import { FaStar } from "react-icons/fa6";

export default function Comment({ comentarios }) {

    if (!Array.isArray(comentarios)) {
        console.warn("comentarios está indefinido ou não é um array:", comentarios);
        return null; // ou algum fallback visual
    }


    const coment = comentarios.map(descript => (

        <div className="build-comment">

            <img style={{ width: 60, borderRadius: 100, objectFit: 'fill' }}
                src={descript.photo} alt={descript.photoDescription} />

            <div className="container-comment-user">
                <div style={{ display: "flex", gap: 10 }}>
                    <strong>{descript.name}</strong>
                    <strong style={{ color: "#999999" }}>{descript.date}</strong>
                    <strong style={{ color: "#999999" }}>
                        <FaStar />
                        {descript.nota}
                    </strong>
                </div>
                <strong style={{ color: "#999999" }}>{descript.comment}</strong>
            </div>

        </div>
    ))

    return (
        <div className="container-comment">

            {coment}

        </div>
    );

}