import {Component} from 'react'
import './index.css'

class ActiveEventRegistrationDetails extends Component {
  activeEvent = () => (
    <p className="active-event-para">
      Click on an event, to view its registration details
    </p>
  )

  renderYetToRegister = () => (
    <div className="yet-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-img"
      />
      <p className="yet-para">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button className="yet-btn" type="button">
        Register Here
      </button>
    </div>
  )

  renderRegistered = () => (
    <div className="already-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="already-img"
      />
      <h1 className="yet-para">You have already registered for the event</h1>
    </div>
  )

  renderRegistrationClosed = () => (
    <div className="yet-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="yet-img"
      />
      <h1 className="yet-head">Registrations Are Closed Now!</h1>
      <p className="yet-para">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  renderActiveEventRegistration = () => {
    const {status, registrationStatusConstants} = this.props
    console.log(status)
    switch (status) {
      case registrationStatusConstants.yetToRegister:
        return this.renderYetToRegister()
      case registrationStatusConstants.registered:
        return this.renderRegistered()
      case registrationStatusConstants.registrationsClosed:
        return this.renderRegistrationClosed()
      default:
        return this.activeEvent()
    }
  }

  render() {
    return <>{this.renderActiveEventRegistration()}</>
  }
}

export default ActiveEventRegistrationDetails
