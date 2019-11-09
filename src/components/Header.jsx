import React from 'react';
import {
    Link
  } from "react-router-dom";


const Header = () => {
    return(
        <div className="header">
            <h1 className="name-logo"><Link to="/">Consultorio<br></br>Medico</Link></h1>
        </div>

    )
}

export default Header;