import { useState, useEffect } from "react";
import "./CommentBox.css";

export default function AnimatedComments() {
  const [comentarios, setComentarios] = useState([
    {
      id: 1,
      name: "Messi",
      text: "Filme incrível!",
      photo: "https://pt.quizur.com/_image?href=https://img.quizur.com/f/img61a3d7b9498415.80142866.jpg?lastEdited=1638127557&w=600&h=600&f=webp" // foto do usuário
    },
    {
      id: 2,
        name: "Cristiano",
      text: "Não gostei muito do final.",
      photo: "https://pbs.twimg.com/media/GKu7puHWgAAMPjt.png"
    },
    {
      id: 3,
      name: "Neymar",
      text: "Vale a pena assistir!",
      photo: "https://pbs.twimg.com/media/Ey2_IufWgAAS8E_.png:large"
    },
  ]);

  const [mostrar, setMostrar] = useState([]);

  useEffect(() => {
    comentarios.forEach((c, index) => {
      setTimeout(() => {
        setMostrar((prev) => [...prev, c]);
      }, index * 500);
    });
  }, [comentarios]);

  return (
    <div className="comment-container">
      {mostrar.map((c) => (
        <div key={c.id} className="comment-bubble">
          <img 
            src={c.photo} 
            alt={c.name} 
            className="comment-photo"
          />
          <span>{c.text}</span>
        </div>
      ))}
    </div>
  );
}
