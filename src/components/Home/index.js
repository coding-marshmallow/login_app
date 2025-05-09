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
    let logButton
    let msgText

    if (isUserLoggedIn) {
      logButton = <Logout logout={this.onClickButton} />
      msgText = 'Welcome User'
    } else {
      logButton = <Login login={this.onClickButton} />
      msgText = 'Please Login'
    }

    return (
      <div className="home-bg">
        <div className="card">
          <Message msg={msgText} />
          {logButton}
        </div>
      </div>
    )
  }
}

export default Home
