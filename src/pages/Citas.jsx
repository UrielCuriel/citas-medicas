import React from 'react';
import InfoSection from './InfoSection.jsx';

const Citas = () => {
    return(
        <div className="citas-container">
            <InfoSection info="Listado de citas: " />
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
                {props.citas.map((cita)=> {

                    return(
                        <tr key={cita.identificacion}>
                            <td>{cita.nombre}</td>
                            <td>{cita.identificacion}</td>
                            <td>{cita.telefono}</td>
                            <td>{cita.direccion}</td>
                            <td>{cita.fecha.split('T')[0]}</td>
                            <td>{cita.horario}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}

export default Citas;