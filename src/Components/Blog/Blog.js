import React from "react";
import "./Blog.css"
import Tiger from "./TigerRobot.png";
import Botella from "./Bottlecity.png";
import Piramide from "./Piramide.png";
import Pagano from "./Pagano.png";
import Pesadilla from "./Pesadilla.png";
import Rata from "./Rata.png";
import Zorro from "./Zorro.png";
import { Link } from "react-router-dom";




function Blog() {

    return (
      <div className="Blog">
        <div className="Blog_container">
            Blog<br></br>
            <div className="Blog_container2">
            <div className="Blog_img_tigre">
                <img src={Tiger}></img>
            </div>
            <div className="Blog_txt_tigre">
                <h3>Las mejores herramientas de Inteligencia Artificial</h3>
                <br></br>
                <p>En el fascinante mundo de la inteligencia artificial (IA), constantemente emergen innovaciones que transforman nuestra percepción de lo que es posible. Desde sistemas de recomendación hasta asistentes virtuales y robots autónomos, la IA está integrada en nuestra vida cotidiana de formas cada vez más profundas. Aquí exploramos algunas de las mejores IA y cómo funcionan para mejorar nuestras vidas:
                <br></br>
                <br></br>
                <Link to="../Blog_Herramientas">||--Leer Más--||</Link>

                </p>
              </div>
            </div>
            <div className="Blog_gale">
                <Link to="../Blog_AprendizajeAut" className="Blog_Link">
                <div className="tarjeta">
                <img src={Botella}></img>
                <p>Aprendizaje Automático (Machine Learning)</p>
                </div>
                </Link>
                <Link to="../Blog_Procesamiento" className="Blog_Link">
                <div className="tarjeta">
                <img src={Rata}></img>
                <p>Procesamiento de Lenguaje Natural (Natural Language Processing, NLP)</p>
                </div>
                </Link>
                <Link to="../Blog_Vision" className="Blog_Link">
                <div className="tarjeta">
                <img src={Pesadilla}></img>
                <p>Visión por Computadora (Computer Vision)</p>
                </div>
                </Link>
                <Link to="../Blog_Robotica"className="Blog_Link">
                <div className="tarjeta">
                <img src={Pagano}></img>
                <p>Robótica</p>
                </div>
                </Link>
                <Link to="../Blog_Planificacion" className="Blog_Link">
                <div className="tarjeta">
                <img src={Piramide}></img>
                <p>Planificación y Programación de Agentes Inteligentes</p>
                </div>
                </Link>
                <Link to="../Blog_Sistemas" className="Blog_Link">
                <div className="tarjeta">
                <img src={Zorro}></img>
                <p>Sistemas Expertos</p>
                </div>
                </Link>
            
            </div>
        </div>
        
      </div>
    );
  }
  
  export default Blog;