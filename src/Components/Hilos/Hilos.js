import React from "react";
import "./Hilos.css"
import Chat from "./Hilos_Container.png"
import militar from "./tarjeta_militar.png"
import donde from "./tarjeta_donde.png"
import pensamiento from "./tarjeta_pensamiento.png"
import reemplazo from "./tarjeta_reemplazo.png"
import perdida from "./tarjeta_perdida.png"
import dominio from "./tarjeta_dominio.png"
import { Link } from "react-router-dom";

function Hilos(){
    return(
        <div className="Hilos">
            <div className="Hilos_Container">
                Hilos<br></br>
            <div className="Hilos_container2">
            <div className="Hilos_img_chat">
                <img src={Chat}></img>
            </div>
            <div className="Hilos_txt_chat">
                <h3>Desenmascarando los Mitos: Explorando la Realidad detrás de la Inteligencia Artificial</h3>
                <br></br>
                <p>¿Qué se esconde detrás del velo de la inteligencia artificial? En un mundo donde la tecnología avanza a pasos agigantados, las percepciones y los temores en torno a la IA se entrelazan en un manto de misterio y especulación. Desde rumores inquietantes hasta visiones futuristas, la IA ha cautivado nuestra imaginación y desafiado nuestros conceptos sobre el poder y el potencial de la tecnología. Pero, ¿qué hay realmente detrás de los titulares y las narrativas populares? Adéntrate con nosotros en este fascinante viaje de exploración mientras desentrañamos los mitos y descubrimos la verdad que se esconde detrás de la inteligencia artificial. ¡Prepárate para sorprenderte, cuestionarte y descubrir!</p>
              </div>
            </div>
        </div>
        <div className="Hilos_gale">
                <Link to="" className="Hilos_Link">
                <div className="tarjeta">
                <img src={militar}></img>
                <p>¿Ves posible el desarrollo de la IA en el ámbito militar y armamentístico?¿Que conllevará esto?</p>
                </div>
                </Link>
                <Link to="" className="Hilos_Link">
                <div className="tarjeta">
                <img src={pensamiento}></img>
                <p>¿Alcanzará la IA el nivel de pensamiento humano?</p>
                </div>
                </Link>
                <Link to="" className="Hilos_Link">
                <div className="tarjeta">
                <img src={perdida}></img>
                <p>¿Podría conducir el uso intensivo de herramientas de IA a una pérdida de capacidad cognitiva de los futuros egresados? </p>
                </div>
                </Link>
                <Link to=""className="Hilos_Link">
                <div className="tarjeta">
                <img src={dominio}></img>
                <p>¿Ves posible un dominio total de las máquinas sobre los humanos?</p>
                </div>
                </Link>
                <Link to="" className="Hilos_Link">
                <div className="tarjeta">
                <img src={reemplazo}></img>
                <p>¿Ves posible un reemplazo masivo de empleos por IA?</p>
                </div>
                </Link>
                <Link to="" className="Hilos_Link">
                <div className="tarjeta">
                <img src={donde}></img>
                <p>¿Hasta dónde puede llegar?</p>
                </div>
                </Link>
            
            </div>

        </div>
    );
}

export default Hilos;