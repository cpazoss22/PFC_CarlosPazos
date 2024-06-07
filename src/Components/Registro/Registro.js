import React from "react";
import "./Registro.css"
import { useState } from "react";
import { Link } from "react-router-dom";

function Registro () {
    
const [nombre, setNombre] = useState('');
const [apellidos, setApellidos] = useState('');
const [fechanac, setFechanac] = useState('');
const [correo, setCorreo] = useState('');
const [contraseña, setContraseña] = useState('');
const [repetir, setRepetir] = useState('');
const [errorContraseña,setErrorContraseña] = useState('');
const [errorEdad, setErrorEdad] = useState('');

const mandarEnvio = (event) => {
    event.preventDefault();
    
  if (contraseña !== repetir) {
      setErrorContraseña('Las contraseñas no coinciden');
      return;
  }

  setErrorContraseña('');

    console.log('Nombre:', nombre);
    console.log('Apellidos:', apellidos); 
    console.log('Fechanac:', fechanac); 
    console.log('Correo:', correo); 
    console.log('Contraseña:', contraseña); 
    console.log('Repetir:', repetir); 
  };

    return(
        <div className="registro">
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
        <div className='Formulario'>
        
      <form onSubmit={mandarEnvio}>
        {/* Campo para el nombre */}
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
          />
        </label>
  
        <br />
  
        {/* Campo para la contraseña */}
        <label>
        Apellidos:
          <input
            type="text"
            value={apellidos}
            onChange={(event) => setApellidos(event.target.value)}
          />
        </label>
  
        <br />

        <label>
          Fecha de Nacimiento:
          <input
            type="date"
            value={fechanac}
            onChange={(event) => setFechanac(event.target.value)}
          />
        </label>
    
        <br /> 
        
        <label>
          Correo:
          <input
            type="email"
            value={correo}
            onChange={(event) => setCorreo(event.target.value)}
          />
        </label>
  
        <br /> 
        
        <label>
          Contraseña:
          <input
            type="password"
            value={contraseña}
            onChange={(event) => setContraseña(event.target.value)}
          />
        </label>
  
        <br /> 
        
        <label>
          Repetir contraseña:
          <input
            type="password"
            value={repetir}
            onChange={(event) => setRepetir(event.target.value)}
          />
        </label>
        {errorContraseña && <p style={{ color: 'red' }}>{errorContraseña}</p>}
        {errorEdad && <p style={{ color: 'red' }}>{errorEdad}</p>}

        <br />
  
        <Link to="/"><button type="submit">Enviar</button></Link>
      </form>
      </div>
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
    );
}

export default Registro;
