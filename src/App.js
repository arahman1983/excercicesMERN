import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBarComp from "./components/NavBar"
import ExcersisesList from "./components/ExcersisesList"
import ExcersisesDetails from "./components/ExcersisesDetails"
import ExcersisesCreate from "./components/ExcersisesCreate"
import ExcersisesEdit from "./components/ExcersisesEdit"
import UsersAdd from "./components/UsersAdd"





function App() {
  return (
    <Router>
    <NavBarComp/> 
    <Route path="/" exact component={ExcersisesList} />
    <Route path="/excersices/:id" component={ExcersisesDetails} />
    <Route path="/create" component={ExcersisesCreate} />
    <Route path="/edit/:id" component={ExcersisesEdit} />
    <Route path="/add" component={UsersAdd} />
    </Router>
  );
}

export default App;
