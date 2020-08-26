import React from 'react'
import { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import axios from 'axios'

function CommoditiesTable() {
  // const [resourceType, setResourceType] = useState('posts')
  const [items, setItems] = useState([])
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem('user'))
    axios({
      method: 'GET',
      url: 'http://localhost:3001/users/'+ user['user_id']  +'/commodities',
      headers: {'access-token': user['access-token'], 'client': user['client'], 'uid': user['uid']}
    })
    .then(response => { setItems(response.data);})
  }, [])

  return (

        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Qty</th>
            <th>Price(cents)</th>
          </tr>
        </thead>
        <tbody>
        {items.map((item, i) => {
          return (
           <tr key={i}>
            <td>{item.product_name}</td>
            <td>{item.quantity}</td>
            <td>{item.price}</td>
          </tr>)})}
        </tbody>
        </Table>
  )
}

export default CommoditiesTable;
