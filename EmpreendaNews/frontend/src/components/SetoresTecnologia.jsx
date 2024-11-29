import React from "react";
import Header from "./Header";
import Foooter from "./Footer";
import { Divgray } from "../styles/Header";
import { SectionImg, Imgsection } from "../styles/images.js";
import ImgTec from "../../images/setorTecnologia.png"

const SetoresTecnologia = () => {
    return (
        <>
        <Header/>
        <Divgray>
            <h1>SETOR TECNOLOGIA</h1>
        </Divgray>
        <SectionImg>
           <Imgsection src={ImgTec} alt="Logo" />
        </SectionImg>
         
        <Foooter/>
           
        </>
    )
}

export default SetoresTecnologia;