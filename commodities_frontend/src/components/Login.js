import React from 'react'
import axios from 'axios'

class Login extends React.Component {
  handleLogin = (e) => {
    e.preventDefault()
    axios({
      method: 'POST',
      url: 'http://localhost:3001/auth/sign_in',
      data: { email: this.email.value, password: this.password.value}})
    .then(response => {
      localStorage.setItem('user',
       JSON.stringify({
         'access-token': response.headers['access-token'],
         'client': response.headers['client'],
         'uid': response.data.data.uid
     }))
       console.log(response)
   }).catch(err => err.message);
  }

  render () {
    return (
      <div>
        <h2>Log in</h2>
        <form onSubmit={this.handleLogin} >
          <input type="email" placeholder="Enter email" name="email" ref={(input) => this.email = input } />
          <input type="password" placeholder="Password" name="password"  ref={(input) => this.password = input } />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default Login
