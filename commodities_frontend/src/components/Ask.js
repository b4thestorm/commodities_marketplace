import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table'
import ListGroup from 'react-bootstrap/ListGroup'

function Ask () {
  const [items, setItems] = useState([])

    useEffect (()=> {
        let user = JSON.parse(localStorage.getItem('user'))
        console.log(user)
        axios({
          method: 'GET',
          url: 'http://localhost:3001/users/' + user['user_id'] + '/bids',
          headers: {'access-token': user['access-token'], 'client': user['client'], 'uid': user['uid']}
        }).then( response => { setItems(response.data);})
    }, [1])

  return (
    <div>
      <h1>BIDS ON GOODS</h1>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Qty</th>
          <th>Price(cents)</th>
          <th>Buyer</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, i) => {
          return (
            <tr key={i}>
            <td>{item.product_name}</td>
            <td>{item.quantity}</td>
            <td>{item.amount}</td>
            <td>{item.first_name}</td>
            </tr>)})}
         </tbody>
        </Table>
      </div>
  )
}

export default Ask
