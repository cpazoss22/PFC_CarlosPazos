import Cabecera from '../Cabecera/cabecera';
import Footer from '../Footer/piepagina';
import { Outlet } from 'react-router-dom';
import React from 'react';

function Comun() {

  return (
    <div className="Comun">
     
   
      <Cabecera/>
   
        <Outlet />
   
      <Footer/>
      
    </div>
  );
}

export default Comun;