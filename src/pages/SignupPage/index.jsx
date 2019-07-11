import React, { Component } from 'react'
import SignupForm from '../../components/SignupForm'
import './SignupPage.css'

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
      <main className="SignupPage">
        <h1>Here</h1>
        <SignupForm {...this.props} updateMessage={this.updateMessage} />
        <p>{this.state.message}</p>
      </main>
    )
  }
}

export default SignupPage
