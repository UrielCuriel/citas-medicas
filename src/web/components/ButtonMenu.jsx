import React from 'react'
import { Link } from 'react-router-dom'


const ButtonMenu = ({msg, slug}) => {
    return(
        <div className="boton-menu">
            <Link to={slug} >{msg}</Link>
        </div>
    )
}

export default ButtonMenu