import React from 'react'
import axios from 'axios'


class CommoditiesForm extends React.Component {
  handleLogin = (e) => {
    e.preventDefault()
    let user = JSON.parse(localStorage.getItem('user'))
    axios({
      method: 'POST',
      url: 'http://localhost:3001/users/18/commodities',
      data: { product_name: this.product_name.value, quantity: this.quantity.value, price: this.price.value},
      headers: {
        'access-token': user["access-token"],
        'client': user["client"],
        'uid': user["uid"]
      }
    })
    .then(response => { console.log(response)})
    .catch(err => err.message);
   }

  render () {
    return (
      <div>
        <h4>Add a Commodity:</h4>
        <form onSubmit={this.handleLogin}>
          <input type="text" name="product_name" placeholder="product name" ref={(input) => this.product_name = input}/>
          <input type="text" name="quantity" placeholder="qty" ref={(input) => this.quantity = input} />
          <input type="text" name="price" placeholder="price" ref={(input) => this.price = input} />
          <button type="submit">Add Commodity</button>
        </form>
      </div>
    )
  }
}

export default CommoditiesForm
