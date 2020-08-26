import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';

class Signup extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
     email: "",
     first_name: "",
     user_type: "",
     password: ""
   };

   this.handleInputChange = this.handleInputChange.bind(this);
   this.handleSubmit =      this.handleSubmit.bind(this);
 }

 handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    axios({
      method: 'POST',
      url: 'http://localhost:3001/auth',
      data: {
        email: this.state.email.value,
        first_name: this.state.first_name.value,
        user_type: this.state.user_type.value,
        password: this.state.password.value
      }
    })
    .then(response => {
      console.log(response)
      localStorage.setItem('user',
        JSON.stringify({
          'access-token': response.headers['access-token'],
          'client': response.headers['client'],
          'uid': response.data.uid,
          'user_type': this.state.user_type.value
      }))
      //depending on user type change direction
      window.location = '/'
    })
  }

  render () {
    return (
      <div>
        <h2>Register</h2>

        <form onSubmit={this.handleSubmit}>
          <label>
            Email
            <input name="email" value={this.state.value} onChange={this.handleInputChange} />
          </label>
          <br></br>
          <label>
            First Name
            <input name="first_name" value={this.state.value} onChange={this.handleInputChange} />
          </label>
          <br></br>
          <label>
            Pick an Account Type:
            <select name="user_type" value={this.state.value} onChange={this.handleInputChange}>
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>
          </label>
          <br></br>
          <label>
          <input name="password" value={this.state.value} onChange={this.handleInputChange}/>
          </label>
          <br></br>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default Signup
