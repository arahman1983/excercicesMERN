import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBarComp from "./components/NavBar"
import ExcersisesList from "./components/ExcersisesList"
import ExcersisesDetails from "./components/ExcersisesDetails"
import ExcersisesCreate from "./components/ExcersisesCreate"



function App() {
  return (
    <Router>
    <NavBarComp/> 
    <Route path="/" exact component={ExcersisesList} />
    <Route path="/excersices/:id" component={ExcersisesDetails} />
    <Route path="/create" component={ExcersisesCreate} />
    </Router>
  );
}

export default App;
