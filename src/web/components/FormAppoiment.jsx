import React from 'react'
import { Link } from 'react-router-dom'
import { AppoimentsContext } from '../context.jsx'

class FormAppoiment extends React.Component{
    
    static contextType = AppoimentsContext

    render(){
        const { handleSubmit, date, schedules } = this.context
        return (
            <form className="form-agendar" onSubmit={ handleSubmit } >

                <div className="input-container">
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" required ></input>
                </div>
                
                <div className="input-container">
                    <label htmlFor="identificacion">Identificacion:</label>
                    <input type="text" id="identificacion" required pattern="^([0-9]{7,11})"></input>
                </div>
                
                <div className="input-container">
                    <label htmlFor="telefono">Telefono:</label>
                    <input type="tel" id="telefono" pattern="^([0-9]{7,10})"></input>
                </div>
                
                <div className="input-container">
                    <label htmlFor="direccion">Direccion:</label>
                    <input type="tel" id="direccion"></input>
                </div>

                <div className="input-container">
                    <label htmlFor="fecha">Fecha:</label>
                    <input required type="date" id="fecha" min={date.toString()}></input>
                </div>

                

                <div className="input-container input-horario">
                    <label htmlFor="hora">Escoje el horario para tu cita:</label>
                    <input type="time" id="horario" min="09:00" max="18:00" list="listalimitestiempo" required /> 
                    <small>Horario de atencion de 10:00am hasta 6:00pm</small>
                    <small>Cada cita tiene una duracaion de 45 minutos</small>
                    <datalist id="listalimitestiempo">
                        {schedules.map((s)=>{
                            return <option key={s} value={s} />
                        })}
                    </datalist>
                    
                </div>

                <div>
                    <button className="button cancel" type="button"><Link to="/">Cancelar</Link></button>
                    <button className="button submit" type="submit" >Siguiente</button>
                </div>
                
            </form>

        )
    }
}

export default FormAppoiment