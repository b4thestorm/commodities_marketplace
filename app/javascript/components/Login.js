import React from 'react'
import axios from 'axios'

class Login extends React.Component {
  handleLogin = (e) => {
    e.preventDefault()
    axios({
      method: 'POST',
      url: 'http://localhost:3000/auth/sign_in',
      data: {
        email: this.email.value,
        password: this.password.value
      }
    })
    .then(response => {
     console.log(response)
    })
  }

  render () {
    return (
      <div>
        <h2>Log in</h2>
        <form onSubmit={this.handleLogin} >
          <input name="email" ref={(input) => this.email = input } />
          <input name="password" type="password" ref={(input) => this.password = input } />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default Login
//signup?email=tester%40gmail.com&first_name=testing1234&user_type=seller&password=necros12
