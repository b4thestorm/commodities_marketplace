import React from 'react';
import ReactDOM from 'react-dom';
import Login from 'components/Login'
import Signup from 'components/Signup'
import CommoditiesForm from 'components/CommoditiesForm'

import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"

const currentUser = function() {
  const user = localStorage.getItem('user')
  console.log(user)
  return(user)
}

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

document.addEventListener('DOMContentLoaded', () => {

  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})


// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(
//     <Login />,
//     document.body.appendChild(document.createElement('div')),
//   )
// })
