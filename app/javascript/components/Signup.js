import React from 'react';
import axios from 'axios'

class Signup extends React.Component {
  handleLogin = (e) => {
    e.preventDefault()
    axios({
      method: 'POST',
      url: 'http://localhost:3000/auth',
      data: {
        email: this.email.value,
        password: this.password.value,
        first_name: this.first_name.value,
        user_type: this.user_type.value
      }
    })
    .then(response => {
      console.log(response)
      localStorage.setItem('user',
        JSON.stringify({
          'access-token': response.headers['access-token'],
          'client': response.headers['client'],
          'uid': response.data.uid
      }))
      window.location = '/'
    })
  }

  render () {
    return (
      <div>
        <h2>Register</h2>
        <form >
          <input name="email" ref={(input) => this.email = input } />
          <input name="first_name" ref={(input) => this.first_name = input } />
          <input name="user_type" ref={(input) => this.user_type = input } />
          <input name="password" type="password" ref={(input) => this.password = input } />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default Signup
