import eleven from '../Imagens/eleven.jpeg';
import lacasa from '../Imagens/lacasa.jpeg';
import panda from '../Imagens/panda.png';

import Comment from '../Components/Comment'

function DescriptionUses() {

    const guilerme = {
        photo: eleven,
        name: "@guilerme",
        date: "19/04/2015",
        nota: "8/10",
        comment: "galera diferenciada! os cara poca todo mundo, são puro estilo. recomendo",
        photoDescription:"Menina Descabelada"
    }
    
    const givanildo = {
        photo: lacasa,
        name: "@givanildo",
        date: "28/09/2019",
        nota: "9/10",
        comment: "muito bom e massa! gostei bastante dos cavalos, bela atuação!",
        photoDescription:"capa e tchau"
    }
    
    const dudu = {
        photo: panda,
        name: "@dudex",
        date: "17/01/2016",
        nota: "9.8/10",
        comment: "Achei a historia interessante, eu sou frio e calculista e fumo charuto e ando com beck",
        photoDescription:"mestre"
    
    }

    const commentsUses = [guilerme, givanildo, dudu]

    return(

        <Comment comentarios = {commentsUses}/>

    )

}

export default DescriptionUses