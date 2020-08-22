import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login'
import Signup from './components/Signup'
import CommoditiesForm from './components/CommoditiesForm'
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import './App.css';

function App() {
  return (
    <Router>
        <Route path="/signup">
         <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <CommoditiesForm />
        </Route>
    </Router>
  );
}

export default App;
