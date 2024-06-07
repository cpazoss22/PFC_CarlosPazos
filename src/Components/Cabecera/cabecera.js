import React from 'react';
import './cabecera.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import inicio from './Iniciodesesion.png';

function Cabecera() {
  return (
    <header>
        <nav className="enlaces">
        <ul>
          <li><Link to="/"><img src={logo}></img></Link></li>
          <li><Link to="/">Home</Link></li>
          <li><a href="/Usuarios">Usuarios</a></li>
          <li><Link to="/Crear_Hilo">Hilos</Link></li>
          <li><Link to="/Equipo">Equipo</Link></li>
          <li><Link to="/Blog">Blog</Link></li>
          <li><Link to="/Contacto">Contacto</Link></li>
          <li><div className='inicio'><Link to="/Login"><img src={inicio}></img></Link></div></li>
        </ul>
      </nav>
      
    </header>
  );
}
export default Cabecera;
