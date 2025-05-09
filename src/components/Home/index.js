// Write your code here
import {Component} from 'react'
import './index.css'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {isUserLoggedIn: false}

  onClickButton = () => {
    this.setState(prevState => ({isUserLoggedIn: !prevState.isUserLoggedIn}))
  }

  render() {
    const {isUserLoggedIn} = this.state
    let logButtonText
    let msgText

    if (isUserLoggedIn) {
      logButtonText = <Logout />
      msgText = 'Welcome User'
    } else {
      logButtonText = <Login />
    }

    return (
      <div className="home-bg">
        <div className="card">
          <Message msg={msgText} />
          <button
            onClick={this.onClickButton}
            type="button"
            className="button-style"
          >
            {logButtonText}
          </button>
        </div>
      </div>
    )
  }
}

export default Home
