import React from "react";
import "./Equipo.css";
import Rayo from "./Rayo.png";
import Elon from "./Elon.png";
import CR7 from "./CR7.png";

function Equipo(){
    return(
        <div className="Equipo">
            <div className="Equipo_titulo">Nuestro increíble equipo esta haciendo maravillas</div>
            <div className="Equipo_gale">
                <div className="Equipo_tarjeta">
                <img src={CR7}></img>
                <p>Cristiano Ronaldo, 38.</p>
                </div>
                <div className="Equipo_tarjeta">
                <img src={Elon}></img>
                <p>Elon musk, 52.</p>
                </div>
                <div className="Equipo_tarjeta">
                <img src={Rayo}></img>
                <p>NOT Rayo Mcqueen (Carlos Pazos), ????.</p>
                </div>
            </div>    
            <div className="Equipo_marquee">    
            <ul class="Equipo_marquee__content">
      <li class="Equipo_marquee__item">&nbsp;AIHubFuture &bull; </li>
      <li class="Equipo_marquee__item">&nbsp;AIHubFuture &bull; </li>
      <li class="Equipo_marquee__item">&nbsp;AIHubFuture &bull; </li>
      <li class="Equipo_marquee__item">&nbsp;AIHubFuture &bull;</li>
      <li class="Equipo_marquee__item">&nbsp;AIHubFuture &bull;</li>
      <li class="Equipo_marquee__item">&nbsp;AIHubFuture &bull;</li>
      <li class="Equipo_marquee__item">&nbsp;AIHubFuture &bull;</li>
      <li class="Equipo_marquee__item">&nbsp;AIHubFuture &bull;</li>
      <li class="Equipo_marquee__item">&nbsp;AIHubFuture &bull;</li>
      <li class="Equipo_marquee__item">&nbsp;AIHubFuture &bull;</li>
      </ul>
      </div>
        </div>

    );
}


export default Equipo;