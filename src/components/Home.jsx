import React from 'react';
import {
    Link
  } from "react-router-dom";


const Home = () => {
    return(
        <div className="container-home">
            <div className="boton-menu">
                <Link to="/agendar">Agendar Cita</Link>
            </div>
            <div className="boton-menu">
                <Link to="/consultar" >Consultar Cita</Link>
            </div>
            <div className="boton-menu">
                <Link to="/citas" >Mostrar Citas</Link>
            </div>
        </div>

    )
}

export default Home;