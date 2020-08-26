import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Bid from './Bid'

function CommoditiesList () {
  const [items, setItems] = useState([])

  useEffect(() => {
   let user = JSON.parse(localStorage.getItem('user'))
   axios({
     method: 'GET',
     url:  'http://localhost:3001/users/' + user['user_id'] + '/commodities',
     headers: {'access-token': user['access-token'], 'client': user['client'], 'uid': user['uid']}
   }).then(response => {setItems(response.data);})
 }, [])

 return(
   <div>
   <Card style={{ width: '18rem' }}>
    {items.map((commodity, i) => {
      return(
        <Card.Body key={i}>
          <Card.Title>{commodity.product_name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{commodity.quantity}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">${commodity.price}</Card.Subtitle>
          <Card.Subtitle><Bid data={commodity} /></Card.Subtitle>
        </Card.Body>
    )})}
  </Card></div>
 )
}

export default CommoditiesList
