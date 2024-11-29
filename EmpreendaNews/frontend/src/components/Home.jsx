import React from "react";
import Header from "./Header";
import Foooter from "./Footer";
import { Link } from "react-router-dom";

import ImgNoticia1 from "../../images/noticia1.png"
import ImgNoticia2 from "../../images/noticia2.png"
import ImgNoticia3 from "../../images/noticia3.png"

import {Section1, ImgNoticias, TituloNoticia, TextoNoticia, DivManchetes, DivTituloTexto} from "../styles/Home.js"
import { Divgray } from "../styles/Header.js";

const Home = () => {
    return (
        <>
        <Header/>
        <Divgray>
            <h1>RECENTES</h1>
        </Divgray>
        <Section1>
            <Link className="linkNoticias" to='https://www.tudoemdia.com/uberlandia-registra-abertura-de-quase-3-mil-pequenas-empresas-no-primeiro-semestre-de-2024#:~:text=No%20primeiro%20semestre%20de%202024%2C%20Uberl%C3%A2ndia%20registrou%20a,acordo%20com%20o%20Painel%20do%20Mapa%20de%20Empresas.'>
            <DivManchetes>
            <ImgNoticias src={ImgNoticia1} />

            <DivTituloTexto>
            <TituloNoticia>Uberlândia registra abertura de quase 3 mil pequenas empresas no primeiro semestre de 2024 </TituloNoticia>
            <TextoNoticia>De acordo com os dados do Painel do Mapa de Empresas, Uberlândia registrou a abertura de 2.899 pequenas empresas no primeiro semestre de 2024, totalizando mais de 80 mil negócios ativos na cidade. O levantamento aponta ainda que de janeiro a junho deste ano, 1.529 empresas foram fundadas por mulheres e 1.644 por homens.</TextoNoticia>
            </DivTituloTexto>

            </DivManchetes>
            
            </Link>

            <Link className="linkNoticias" to="https://www.sympla.com.br/evento/brain-innovation-summit-palestras-e-paineis-uberlandia/2663570#:~:text=O%20Brain%20Innnovation%20Summit%20%C3%A9%20um%20encontro%20anual,promove%20di%C3%A1logos%20e%20solu%C3%A7%C3%B5es%20que%20impactam%20o%20mundo%21">
            <DivManchetes>
            <ImgNoticias src={ImgNoticia2} />

            <DivTituloTexto>
            <TituloNoticia>Brain Inovvation summit reunirá líderes do ecossistema de inovação</TituloNoticia>
            <TextoNoticia>O Brain, braço de inovação de Algar Telecom, realiza na terça-ferira (22), em Uberlândia, o Brain Innovation Summit. Este encontro anual reunirá líderes de diversos setores para discutir as principais tebdências de futuro e inovação e fomentar novas ideias. As inscrições são gratuitas e podem ser realizadas.</TextoNoticia>
            </DivTituloTexto>
            
            </DivManchetes>

            </Link>
            

            <Link className="linkNoticias" to="https://sebrae.com.br/sites/PortalSebrae/empreendedorismofeminino/premiomulherdenegocios">
            <DivManchetes>
            <ImgNoticias src={ImgNoticia3} />

            <DivTituloTexto>
            <TituloNoticia>Uberlândia tem finalista no Pêmio Sebrae Mulher de negócios</TituloNoticia>
            <TextoNoticia>No dia 18/10, serão conhecidas as vencedoras da etapa estadual do Prêmio Sebrae Mulher de Negócios. As vencedoras em cada categoria irão representar Minas Gerais na etapap regional do Prêmio, concorrendo com outras empreendedoras da região Sudeste. Na sequência, as vencedoras da etapa regional irão concorrer a etapa nacional do Prêmio, que será realizada no evento Delas Summit 2024, em Florianópolis, em novembro.</TextoNoticia>
            </DivTituloTexto>
            
            </DivManchetes>
            </Link>
        </Section1>

        <Foooter/>
           
        </>
    )
}

export default Home;