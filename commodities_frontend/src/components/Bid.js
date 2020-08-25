import React from 'react'
import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

function Bid(props) {
//   const [items, setItems] = useState([])
    let placeBid = (e) => {
    let user = JSON.parse(localStorage.getItem('user'))
    axios({
      method: 'POST',
      url: 'http://localhost:3001/users/18/bids',
      data: {amount: props.data.price, commodity_id: props.data.id, buyer_id: props.data.user_id, qty: props.data.quantity},
      headers: {'access-token': user['access-token'], 'client': user['client'], 'uid': user['uid']}
    })
    .then(response => { console.log(props)})
  }

   return (
      <Button variant="outline-primary" onClick={placeBid}>Place Bid</Button>
   )
}
export default Bid
