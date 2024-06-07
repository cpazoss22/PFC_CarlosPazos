import React, { useState } from 'react';
import "./Login.css";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from 'axios';

const Login = () => {
    // Estado para almacenar los valores del formulario
    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');
  
    // Función para manejar el envío del formulario
    const mandarEnvio = (event) => {
      event.preventDefault(); // Evita que la página se recargue al enviar el formulario
      
      // Aquí debes agregar la lógica para enviar los datos del formulario
    };
  
    return (
      <div className='LOGIN'>
        <div className='Formulario_login'>
          <form onSubmit={mandarEnvio}>
            {/* Campo para el correo */}
            <label>
              Correo:
              <input
                type="email"
                value={correo}
                onChange={(event) => setCorreo(event.target.value)}
              />
            </label>
  
            <br />
  
            {/* Campo para la contraseña */}
            <label>
              Contraseña:
              <input
                type="password"
                value={contraseña}
                onChange={(event) => setContraseña(event.target.value)}
              />
            </label>
  
            <br />
  
            <button type="submit">Enviar</button>
            <br></br>
            <br></br>
            <Link to="/Registro" className='link_login'>¿No tienes una cuenta? Regístrate</Link>
  
          </form>
        </div>
      </div>
    );
};

export default Login;
