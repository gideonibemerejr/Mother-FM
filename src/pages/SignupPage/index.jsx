import React, { Component } from 'react'
import SignupForm from '../../components/SignupForm'

class SignupPage extends Component {
  constructor(props) {
    super(props)
    this.state = { message: '' }
  }
  updateMessage = msg => {
    this.setState({ message: msg })
  }
  render() {
    return (
      <main className="vh-100 align-items-center">
        <SignupForm {...this.props} updateMessage={this.updateMessage} />
        <p>{this.state.message}</p>
      </main>
    )
  }
}

export default SignupPage
