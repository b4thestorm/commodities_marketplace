import React from 'react';
import ReactDOM from 'react-dom';
import Login from 'components/Login'
import CommoditiesForm from 'components/CommoditiesForm'

import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"


function App() {
  return (
    <Router>
        <Route path="/">
          <CommoditiesForm />
        </Route>
        <Route path="/login">
          <Login />
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
