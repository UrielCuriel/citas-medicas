import React from 'react';
import InfoSection from './InfoSection.jsx';
import FormAppoiment from '../components/FormAppoiment.jsx'

const Agendar = () => {

    return(
        <div className="container-agendar">
            <InfoSection info="Agendamiento de cita:" />
            <FormAppoiment />
        </div>
    )
}

export default Agendar;