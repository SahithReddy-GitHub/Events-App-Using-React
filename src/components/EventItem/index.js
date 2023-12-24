import './index.css'

const EventItem = props => {
  const {data, onClickEvent} = props
  const {imageUrl, name, location, registrationStatus} = data

  const onEvent = () => {
    onClickEvent(registrationStatus)
  }

  return (
    <li>
      <button type="button" onClick={onEvent} className="li-btn">
        <img src={imageUrl} alt="event" className="img" />
        <p className="event-item-head">{name}</p>
        <p className="event-item-para">{location}</p>
      </button>
    </li>
  )
}

export default EventItem
