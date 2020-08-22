import React from 'react'

class CommoditiesForm extends React.Component {
  render () {
    return (
      <div>
        <h4>Add a Commodity:</h4>
        <form>
          <input type="text" name="title" placeholder="Title" />
          <input type="text" name="start_datetime" placeholder="Date" />
          <input type="text" name="price" placeholder="price" />
          <button type="submit">Create Event</button>
        </form>
      </div>
    )
  }
}

export default CommoditiesForm
