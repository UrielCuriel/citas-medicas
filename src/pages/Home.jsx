import React from 'react';
import ButtonMenu from '../components/ButtonMenu.js'


const Home = () => {
    return(
        <div className="container-home">
            <ButtonMenu msg="Agendar cita" slug="/agendar" />
            <ButtonMenu msg="Consultar citas" slug="/consultar" />
            <ButtonMenu msg="Mostrar citas" slug="/citas" />
        </div>

    )
}

export default Home;