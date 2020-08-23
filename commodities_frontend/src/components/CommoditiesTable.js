import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

class CommoditiesTable extends React.Component {
  useEffect(){
    let user = JSON.parse(localStorage.getItem('user'));
    axios({
      method: 'GET',
      url: 'http://localhost:3001/user/18/commodities',
      headers: {'access-token': user['access-token'], 'client': user['client'], 'uid': user['uid']}
    })
    .then(response => {  setEvent(response.data)})
    .catch(err => err.message);
  }

render() {
  return(
    //TODO: get data from api
    //TODO: parse data into table
    //TODO: add link to table
    //TODO: add table to it's own view
    
    <table onChange={this.getList}>
    <tr>
      <th>Product Name</th>
      <th>Quantity</th>
      <th>Price</th>
    </tr>
    <tr>
      <td>Bill Gates</td>
      <td>55577854</td>
      <td>55577855</td>
    </tr>
  </table>
  )
 }
}

export default CommoditiesTable
