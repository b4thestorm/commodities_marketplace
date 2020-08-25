import React from 'react'
// import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
// import axios from 'axios'
// //Container Component
function Bid(prop) {
//   const [items, setItems] = useState([])
//   useEffect(() => {
//     let user = JSON.parse(localStorage.getItem('user'))
//     axios({
//       method: 'POST',
//       url: 'http://localhost:3001/users/18/bids',
//       headers: {'access-token': user['access-token'], 'client': user['client'], 'uid': user['uid']},
//       data: {commodity_id: commodity.id, amount: this.state.amount,  quantity: this.state.quantity }
//     })
//     .then(response => { setItems(response.data);})
//   }, [])
//
   return (
       <Button variant="outline-primary">Place Bid</Button>
   )
}
export default Bid
