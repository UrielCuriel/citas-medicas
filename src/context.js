import React from 'react'

const AppoimentsContext = React.createContext();

class AppoimentsProvider extends React.Component{

    state = {
        appoiments = [],
        date: new Date(),
        schedules: ['9:00','9:45','10:30','11:15','12:00','12:45', '13:30', '14:15', '15:00', '15:45', '16:30', '17:15', '18:00']
    }
    
    componentDidMount(){
        this.setState({appoiments: this.getAppoiments()})
    }

    getAppoiments(){
        const callAPI = await fetch('http://localhost:5000/citas');
        let res = await callAPI.json();
        let tempAppoiments = res.data;
        console.log(tempAppoiments)
        return tempAppoiments 
    }

    postJSON = async (data)=>{
        const settings = {
          method: 'POST',
          body: JSON.stringify(data),
          headers:{
            'Content-type': 'application/json'
          }
        };
        try{
          const fecthRes = await fetch('http://localhost:5000/citas', settings);
          return fecthRes;
        } catch(e){
          return e;
        }
      }
    
      validateHora = form =>{
        let fecha_selected = form.fecha.value;
        let hora_selected = form.horario.value;
    
        for(let c of this.state.citas){
    
          if(c.fecha.split('T')[0] === fecha_selected && c.horario === hora_selected || this.state.horarios.indexOf(hora_selected) < 0){
    
            alert('Hora en la fecha seleccionada no disponible')
            return false; 
          }
        }
        return true;
      }
    
      validateId = form =>{
        let id = form.identificacion.value;
        for(let c of this.state.citas){
          if(c.identificacion === id){
            alert('Ya Existe una cita con la Identificacion ingresada.')
            return false
          }else{
            return true
          }
        }
      }
    
      citaPost = async (form)=>{
        let cita = {
          nombre: form.nombre.value,
          identificacion: form.identificacion.value,
          telefono: form.telefono.value,
          direccion: form.direccion.value,
          fecha: form.fecha.value,
          horario: form.horario.value
        }
    
        let reqRes = await this.postJSON(cita);
    
        if(reqRes.status === 200){
          alert('Cita Agendada con Exito!');
    
          form.reset();
          this.getCitas();
        }
      }
    
      handledSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
    
        if(this.state.citas.length > 0){
          if(this.validateHora(form) && this.validateId(form) ){
            this.citaPost(form)
          }
        }else{
          this.citaPost(form)
        }
        
       
      }
    
      searchIdCita = id => {
        let cita_finded;
        let find = false;
    
        for(let c of this.state.citas){
          if(c.identificacion === id){
            cita_finded = c;
            find = true;
          }
        }
        if(find){
          return cita_finded
        }else{
          return false
        }
      }
    

    render(){
        <AppoimentContext.Provider>
            {this.props.childer}
        </AppoimentContext.Provider>
    }
}

AppoimentsConsumer = AppoimentsContext.Consumer 

export default {AppoimentsProvider, AppoimentsConsumer}