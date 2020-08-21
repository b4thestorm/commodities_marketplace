import React from 'react'
import PropTypes from 'prop-types'

const Commodity = props => (
  <div className="event">
    <h2 className="event-title">{props.event.title}</h2>
    <div className="event-datetime">{props.event.datetime}</div>
    <div className="event-location">{props.event.location}</div>
  </div>
)

Commodity.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    start_datetime: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
  })
}
export default Commodity
