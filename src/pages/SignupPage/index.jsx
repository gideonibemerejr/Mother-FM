import React, { Component } from 'react'
import SignupForm from '../../components/SignupForm'

class SignupPage extends Component {
  state = {
    message: ''
  }
  updateMessage = msg => {
    this.setState({ message: msg })
  }
  render() {
    return (
      <main className="container vh-100  justify-content-center align-items-center">
        <SignupForm {...this.props} updateMessage={this.updateMessage} />
        <p>{this.state.message}</p>
      </main>
    )
  }
}

export default SignupPage
