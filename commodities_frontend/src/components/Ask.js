import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import ListGroup from 'react-bootstrap/ListGroup'

function Ask () {
  const [items, setItems] = useState([])

  useEffect (()=> {
    let getBids = (e) => {
      let user = JSON.parse(localStorage.getItem('user'))
      console.log(user)
      axios({
        method: 'GET',
        url: 'http://localhost:3001' + user['user_id'] + '/bids',
        headers: {'access-token': user['access-token'], 'client': user['client'], 'uid': user['uid']}
      }).then( response => {console.log('does this work')})
    }
  }, [])


  return (
    <p>Trying to Win</p>
    // <div>
    //   <h1>BIDS ON GOODS</h1>
    //   <ListGroup>{items.map((item, i) => {
    //     return (
    //       <ListGroup.Item key={i}>{item}</ListGroup.Item>
    //     )
    //   })}
    //   </ListGroup>
    // </div>
  )
}

export default Ask
