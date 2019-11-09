import React from 'react';
import InfoSection from './InfoSection.jsx';

class Consultar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          cita: false
        }
    }
    formSubmit = (e)=>{
        e.preventDefault();
        const form = e.target;
        const id = form.cons_id.value;
        let cita_seacrhed = this.props.cosnFormSubmit(id);

        if(cita_seacrhed){
            form.reset();
            this.setState({cita: cita_seacrhed})
        }else{
            alert('No existe una cita para la identificacion ingresada')
            return
        }
    }

   

    render(){

        return(
            <div className="consultar-container">
                <InfoSection info="Consultar cita: "/>
                <form className="consultar-form" onSubmit={this.formSubmit}>
                    <input type="seacrh" id="cons_id" pattern="^([0-9]{7,11})" required></input>
                    <button type="submit">Buscar</button>
                </form>
                <TableCita cita_cons={this.state.cita}/>
            </div>
        )
    }
        
    
}

const TableCita = (props) =>{

    if(props.cita_cons){
        return (
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Identificacion</th>
                        <th>Tel</th>
                        <th>Direccion</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={props.cita_cons.identificacion}>
                        <td>{props.cita_cons.nombre}</td>
                        <td>{props.cita_cons.identificacion}</td>
                        <td>{props.cita_cons.telefono}</td>
                        <td>{props.cita_cons.direccion}</td>
                        <td>{props.cita_cons.fecha.split('T')[0]}</td>
                        <td>{props.cita_cons.horario}</td>
                    </tr>
                </tbody>
            </table>
        )
    }else{
        return null
    }
}

export default Consultar;