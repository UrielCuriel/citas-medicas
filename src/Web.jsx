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
            <Citas />
          </Route>
          <Route path="/consultar">
            <Consultar />
          </Route>
          <Route path="/agendar">
            <Agendar />
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
