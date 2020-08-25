import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login'
import Signup from './components/Signup'
import CommoditiesForm from './components/CommoditiesForm'
import CommoditiesTable from './components/CommoditiesTable'
import CommoditiesList from './components/CommoditiesList'
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import './App.css';

function App() {
  const currentUser = JSON.parse(localStorage.getItem('user'))
  return (

    <Router>
    <Switch>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/login">
        {currentUser ? currentUser["user_type"] === 'seller' ? <Redirect to="/seller" /> : <Redirect to='buyer' /> : <Login />}
        </Route>
        <Route path="/seller">
          <CommoditiesTable />
          <CommoditiesForm />
        </Route>
        <Route path="/buyer">
         <CommoditiesList />
        </Route>
    </Switch>
    </Router>

  );
}

export default App;
