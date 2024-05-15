import React from "react";
import logo from "./logo.png.png";
import "./Cuerpo.css"
import { Link } from "react-router-dom";
import Back from "./Cuerpo_inicio.png"
import Guerra from "./Guerra.png"
import Empleo from "./Empleo.png"
import Humano from "./Humano.png"

function Cuerpo() {
  return (
    <div className="Cuerpo_Container">
    <div className="Cuerpo">
      <div class="Cuerpo_marquee">
    <ul class="Cuerpo_marquee__content">
      <li class="Cuerpo_marquee__item">&nbsp;AIHubFuture &bull; </li>
      <li class="Cuerpo_marquee__item">&nbsp;AIHubFuture &bull; </li>
      <li class="Cuerpo_marquee__item">&nbsp;AIHubFuture &bull; </li>
      <li class="Cuerpo_marquee__item">&nbsp;AIHubFuture &bull;</li>
      <li class="Cuerpo_marquee__item">&nbsp;AIHubFuture &bull;</li>
      <li class="Cuerpo_marquee__item">&nbsp;AIHubFuture &bull;</li>
      <li class="Cuerpo_marquee__item">&nbsp;AIHubFuture &bull;</li>
      <li class="Cuerpo_marquee__item">&nbsp;AIHubFuture &bull;</li>
      <li class="Cuerpo_marquee__item">&nbsp;AIHubFuture &bull;</li>
      <li class="Cuerpo_marquee__item">&nbsp;AIHubFuture &bull;</li>
      </ul>
    </div>    
      <div className="Cuerpo_inicio">
        <img src={logo}></img>
        <div className="Cuerpo_Slogan">Discute - Exprésate - Aprende</div>
        <div className="Cuerpo_Enlace"><Link to="/Login" className="Link">Empieza Ahora</Link></div>
      </div>
    <br></br>    
    <br></br>
    <br></br>
    <div className="Cuerpo_texto">
    Imagina una aplicación que te sumerge en el fascinante mundo de la inteligencia artificial, donde puedes debatir, 
    aprender y conectar con personas apasionadas por este tema. ¿Es posible crear una plataforma que no solo fomente 
    el intercambio de conocimientos, sino que también te permita hacer amigos, e incluso encontrar oponentes dignos 
    en el debate? Esta aplicación ofrece un espacio virtual donde puedes explorar los límites de la IA, discutir sus
    implicaciones éticas y tecnológicas, y compartir tus propias ideas y descubrimientos. Únete a una comunidad vibrante 
    de entusiastas de la inteligencia artificial y descubre un mundo de posibilidades ilimitadas mientras te sumerges en 
    debates apasionantes y forjas conexiones significativas, todo desde la comodidad de tu dispositivo móvil.
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
   
      <div class="Cuerpo_marquee2">
    <ul class="Cuerpo_marquee__content2">
      <li class="Cuerpo_marquee__item2">&nbsp;AIHubFuture &bull; </li>
      <li class="Cuerpo_marquee__item2">&nbsp;AIHubFuture &bull; </li>
      <li class="Cuerpo_marquee__item2">&nbsp;AIHubFuture &bull; </li>
      <li class="Cuerpo_marquee__item2">&nbsp;AIHubFuture &bull;</li>
      <li class="Cuerpo_marquee__item2">&nbsp;AIHubFuture &bull;</li>
      <li class="Cuerpo_marquee__item2">&nbsp;AIHubFuture &bull;</li>
      <li class="Cuerpo_marquee__item2">&nbsp;AIHubFuture &bull;</li>
      <li class="Cuerpo_marquee__item2">&nbsp;AIHubFuture &bull;</li>
      <li class="Cuerpo_marquee__item2">&nbsp;AIHubFuture &bull;</li>
      <li class="Cuerpo_marquee__item2">&nbsp;AIHubFuture &bull;</li>
      </ul>
    </div>    
    </div>
    <div className="Cuerpo_tarjetas">
    <div className="Cuerpo_tarjeta_hilo1">
            <div className="Cuerpo_img_guerra">
                <img src={Guerra}></img>
            </div>
            <div className="Cuerpo_txt_guerra">
                <h1>¿Ves posible el desarrollo de la IA en el ámbito militar y armamentístico?¿Que conllevará esto?</h1>
                <br></br>
                <p>¿Es viable la inteligencia artificial en lo militar? Esta pregunta despierta debates éticos y preocupaciones sobre la seguridad global. Si bien la IA promete avances en vigilancia y armamento, también plantea desafíos éticos sobre el uso de sistemas autónomos en decisiones letales. Además, su desarrollo podría intensificar la carrera armamentística y aumentar el riesgo de conflictos impulsados por la tecnología. Es crucial abordar estas cuestiones antes de avanzar en su implementación.
                <br></br>
                <br></br>
                <Link to="#">||--Leer Más--||</Link>
                </p>
              </div>
    </div>
    <div className="Cuerpo_tarjeta_hilo2">
            <div className="Cuerpo_img_empleo">
                <img src={Empleo}></img>
            </div>
            <div className="Cuerpo_txt_empleo">
                <h1>¿Ves posible un reemplazo masivo de empleos por IA?</h1>
                <br></br>
                <br></br>
                <p>¿Es factible un reemplazo masivo de empleos por la inteligencia artificial? Esta interrogante suscita debates acerca del impacto socioeconómico de la automatización. Si bien la IA puede aumentar la eficiencia y crear nuevas oportunidades laborales, también plantea la posibilidad de desplazar a trabajadores en sectores tradicionales. Es esencial considerar políticas de reentrenamiento y redistribución de empleo para mitigar posibles consecuencias negativas en el mercado laboral.
                <br></br>
                <br></br>
                <br></br>
                <Link to="#">||--Leer Más--||</Link>
                </p>
              </div>
    </div>
    <div className="Cuerpo_tarjeta_hilo3">
            <div className="Cuerpo_img_humano">
                <img src={Humano}></img>
            </div>
            <div className="Cuerpo_txt_humano">
                <h1>¿Ves posible un dominio total de las máquinas sobre los humanos?</h1>
                <br></br>
                <p>
¿Es posible un dominio total de las máquinas sobre los humanos? Esta pregunta plantea reflexiones profundas sobre los límites éticos y el control en el desarrollo de la inteligencia artificial. Aunque la IA puede mejorar muchas áreas de nuestra vida, también existen preocupaciones sobre el potencial de que las máquinas superen la capacidad humana en el futuro. Es crucial establecer marcos éticos y regulaciones adecuadas para garantizar que la IA se utilice en beneficio de la humanidad y no como una amenaza para nuestra autonomía y dignidad.
                <br></br>
                <br></br>
                <Link to="#">||--Leer Más--||</Link>
                </p>
              </div>
    </div>
    </div>
    </div>
  );
}

export default Cuerpo;