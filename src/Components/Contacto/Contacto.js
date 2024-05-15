import React from "react";
import './Contacto.css';
import goku from "./goku.png";


function Contacto() {
    return (
        
    <div className="container">
      
      <div className="columna1"><img src={goku}></img></div>
      <div className="columna2"><div className="Numero">654 83 88 42</div>
        <div className="Correo">AIHubFuture@gmail.com</div>
        <div className="Mapeo">7 Cameron Rd, Hong Kong</div>
    </div>        
    <div className="MAPS">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.442973215957!2d114.17115037506916!3d22.2990807796874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400eddc700585%3A0x7de25db614f0c55a!2s7%20Cameron%20Rd%2C%20Tsim%20Sha%20Tsui%2C%20Hong%20Kong!5e0!3m2!1ses!2ses!4v1713283688496!5m2!1ses!2ses" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div class="marquee">
    <ul class="marquee__content">
      <li class="marquee__item">&nbsp;AIHubFuture &bull; </li>
      <li class="marquee__item">&nbsp;AIHubFuture &bull; </li>
      <li class="marquee__item">&nbsp;AIHubFuture &bull; </li>
      <li class="marquee__item">&nbsp;AIHubFuture &bull;</li>
      <li class="marquee__item">&nbsp;AIHubFuture &bull;</li>
      <li class="marquee__item">&nbsp;AIHubFuture &bull;</li>
      <li class="marquee__item">&nbsp;AIHubFuture &bull;</li>
      <li class="marquee__item">&nbsp;AIHubFuture &bull;</li>
      <li class="marquee__item">&nbsp;AIHubFuture &bull;</li>
      <li class="marquee__item">&nbsp;AIHubFuture &bull;</li>
      </ul>
    </div>    
    <div class="marquee2">
    <ul class="marquee__content">
      <li class="marquee__item">&nbsp;AIHubFuture &bull; </li>
      <li class="marquee__item">&nbsp;AIHubFuture &bull; </li>
      <li class="marquee__item">&nbsp;AIHubFuture &bull; </li>
      <li class="marquee__item">&nbsp;AIHubFuture &bull;</li>
      <li class="marquee__item">&nbsp;AIHubFuture &bull;</li>
      <li class="marquee__item">&nbsp;AIHubFuture &bull;</li>
      <li class="marquee__item">&nbsp;AIHubFuture &bull;</li>
      <li class="marquee__item">&nbsp;AIHubFuture &bull;</li>
      <li class="marquee__item">&nbsp;AIHubFuture &bull;</li>
      <li class="marquee__item">&nbsp;AIHubFuture &bull;</li>
      </ul>
    </div>    
    </div>
  );
}
  
  export default Contacto;
