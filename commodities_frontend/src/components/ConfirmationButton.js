import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'


function ConfirmationButton(prop) {

  const handleSubmit =  confirmation => {
    let user = JSON.parse(localStorage.getItem('user'))

    axios({
     method: 'PUT',
     url: 'http://localhost:3001/users/' + user['user_id'] + '/bids/' + prop.data.id ,
     data: {id: prop["id"], confirmed: confirmation},
     headers: {'access-token': user['access-token'], 'client': user['client'], 'uid': user['uid']}
   }).then(response => {console.log('success OK')})
 }


 return (
   <div>
     <Button as="input" type="button" value="accept" onClick={e => handleSubmit(e.target.value)}/> | <Button as="input" type="button" value="reject" onClick={e => handleSubmit(e.target.value)}/>
   </div>
 )
}

export default ConfirmationButton

//data: {id: seller_id, buyer_id: buyer_id, commodities_id: commodity_id ,confirmation: confirmation},
