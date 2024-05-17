import React from "react";
import logo from "./logo.png.png"
import "./piepagina.css";
import { Link } from "react-router-dom";

function piepagina() {

    return (
      <div className="piepagina">
       <div className="footer_container">
        <div className="footer_columna1">
        <img src={logo}></img>
        </div>
        <div className="footer_columna2">
            <div className="footer_saludo">
                ¿Quieres hablar con nosotros? ¡Adelante!
            </div>
            <div className="footer_correo">
                AIHubFuture@gmail.com
            </div>
            <div className="footer_menu">
            <ul>Menu
            <li><a href="#">HOME</a></li>
            <li><a href="#">USUARIOS</a></li>
            <li><a href="#">HILOS</a></li>
            <li><Link to="/Equipo">EQUIPO</Link></li>
            <li><Link to="/Blog">BLOG</Link></li>
            <li><Link to="/Contacto">CONTACTO</Link></li>
            </ul>
            <ul>Social
            <li><a href="#">INSTAGRAM</a></li>
            <li><a href="#">FACEBOOK</a></li>
            <li><a href="#">TWITTER</a></li>
            <li><a href="#">SNAPCHAT</a></li>
            </ul>
            <ul>Contacto
            <li><a href="#">+34 654 83 88 42</a></li>
            <li><a href="#">+784549 4981 00</a></li>
            <li><a href="#">+8845 0100 211</a></li>
            </ul>
            </div>
        </div>
        <div className="footer_final">©2023 AIHubFuture All Right Reserved.</div>

       </div>
     
        
        
      </div>
    );
  }
  
  export default piepagina;
