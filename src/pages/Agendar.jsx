import React from 'react';
import InfoSection from './InfoSection.jsx';
import Form from '../components/Form.jsx'

const Agendar = () => {

    return(
        <div className="container-agendar">
            <InfoSection info="Agendamiento de cita:" />
            <Form />
        </div>
    )
}

export default Agendar;