import React from "react";
import {  BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Comun from "./Components/Comun/Comun";
import Cuerpo from "./Components/Cuerpo/Cuerpo"
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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
       <Route path="/" element={<Comun/>}>
       <Route path='/'element={<Cuerpo/>}></Route>
       <Route path="/Login" element={<Login/>}></Route>
       <Route path="/Contacto" element={<Contacto/>}></Route>
       <Route path="/Blog" element={<Blog/>}></Route>
       <Route path="/Blog_Herramientas" element={<Blog_Herramientas/>}></Route>
       <Route path="/Blog_AprendizajeAut" element={<Blog_AprendizajeAut/>}></Route>
       <Route path="/Blog_Procesamiento" element={<Blog_Procesamiento/>}></Route>
       <Route path="/Blog_Vision" element={<Blog_Vision/>}></Route>
       <Route path="/Blog_Robotica" element={<Blog_Robotica/>}></Route>
       <Route path="/Blog_Planificacion" element={<Blog_Planificacion/>}></Route>
       <Route path="/Blog_Sistemas" element={<Blog_Sistemas/>}></Route>
       <Route path="/Equipo" element={<Equipo/>}></Route>
       <Route path="/Hilos" element={<Hilos/>}></Route>
       <Route path="/Registro" element={<Registro/>}></Route>
      </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
