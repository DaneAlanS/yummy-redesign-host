import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './style/main.scss'

import 'bootstrap/dist/css/bootstrap.min.css';
import Circulation from"./components/circulation.js";
import Navigation from"./components/Navigation.js";


function App() {

  return (
    <Router>
            <Switch>              
              <Route exact path="/circulation" component={Circulation}/>
              <Route path="/" component={Navigation}/>                                        
            </Switch>
    </Router>


  );
}

export default App;
