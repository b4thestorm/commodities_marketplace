import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
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
        }).then( response => { setItems(response.data)})
    }, [1])

  return (
    <div>
      <h1>BIDS ON GOODS</h1>
      <ListGroup>{items.map((item, i) => {
        return (
          <ListGroup.Item key={i}>{item.quantity}</ListGroup.Item>
        )
      })}
      </ListGroup>
    </div>
  )
}

export default Ask
