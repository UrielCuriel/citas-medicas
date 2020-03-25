import React from 'react';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import Agendar from './components/Agendar.jsx';
import Consultar from './pages/Consultar.jsx';
import Citas from './components/Citas.jsx';
import './css/web.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { AppoimentsProvider } from './context.js' 

class Web extends React.Component{
  render(){
    return(
    <Router>
      <AppoimentsProvider>
        <Header />
        <Switch>
          <Route path="/citas">
            <Citas citas={this.state.citas} />
          </Route>
          <Route path="/consultar">
            <Consultar cosnFormSubmit={this.searchIdCita} />
          </Route>
          <Route path="/agendar">
            <Agendar formSubmit={this.handledSubmit} date={this.state.date} horarios={this.state.horarios}/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </AppoimentsProvider>
    </Router>
    ) 
  }


}

export default Web;
