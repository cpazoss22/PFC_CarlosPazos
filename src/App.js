import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Comun from "./Components/Comun/Comun";
import Cuerpo from "./Components/Cuerpo/Cuerpo";
import Contacto from "./Components/Contacto/Contacto";
import Blog from "./Components/Blog/Blog";
import Blog_Herramientas from "./Components/Blog_Herramientas/Blog_Herramientas";
import Blog_AprendizajeAut from "./Components/Blog_AprendizajeAut/Blog_AprendizajeAut";
import Blog_Procesamiento from "./Components/Blog_Procesamiento/Blog_Procesamiento";
import Blog_Vision from "./Components/Blog_Vision/Blog_Vision";
import Blog_Robotica from "./Components/Blog_Robotica/Blog_Robotica";
import Blog_Planificacion from "./Components/Blog_Planificacion/Blog_Planificacion";
import Blog_Sistemas from "./Components/Blog_Sistemas/Blog_Sistemas";
import Equipo from "./Components/Equipo/Equipo";
import Hilos from "./Components/Hilos/Hilos";
import Registro from "./Components/Registro/Registro";
import Login from "./Components/Log-in/Login";
import CrearHilo from "./Components/Hilos_P/CrearHilo";
import ListaHilos from "./Components/Hilos_P/ListaHilos";
import Hilo from "./Components/Hilos_P/Hilo";
import Usuarios from "./Components/Usuario/Usuarios";
import UsuarioPerfil from "./Components/Usuario/UsuarioPerfil";
import './Components/Usuario/Usuarios.css';
import './Components/Usuario/UsuarioPerfil.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Comun />}>
            <Route path="/" element={<Cuerpo />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Blog_Herramientas" element={<Blog_Herramientas />} />
            <Route path="/Blog_AprendizajeAut" element={<Blog_AprendizajeAut />} />
            <Route path="/Blog_Procesamiento" element={<Blog_Procesamiento />} />
            <Route path="/Blog_Vision" element={<Blog_Vision />} />
            <Route path="/Blog_Robotica" element={<Blog_Robotica />} />
            <Route path="/Blog_Planificacion" element={<Blog_Planificacion />} />
            <Route path="/Blog_Sistemas" element={<Blog_Sistemas />} />
            <Route path="/Equipo" element={<Equipo />} />
            <Route path="/Hilos" element={<Hilos />} />
            <Route path="/Registro" element={<Registro />} />
            <Route path="/Crear_hilo" element={<CrearHilo />} />
            <Route path="/ListaHilos" element={<ListaHilos />} />
            <Route path="/Hilo/:threadId" element={<Hilo />} />
            <Route path="/Usuarios" element={<Usuarios />} />
            <Route path="/Usuario/:UsuarioId" element={<UsuarioPerfil />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
