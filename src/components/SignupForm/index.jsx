import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import userUtil from '../../utils/userUtil'

class SignupForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    passwordConf: ''
  }

  handleChange = e => {
    this.props.updateMessage('')
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = async e => {
    e.preventDefault()
    try {
      await userUtil.signup(this.state)
      // Successful sign up? Show HomePage
      this.props.handleSignupOrLogin()
      this.props.history.push('/')
    } catch (error) {
      this.props.updateMessage(error.message)
    }
  }
  isFormInvalid() {
    return !(
      this.state.name &&
      this.state.email &&
      this.state.password === this.state.passwordConf
    )
  }
  render() {
    return (
      <section className="signup">
        <div className="container">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign up</h2>
              <form action="" className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name">i</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">i</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">i</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="passwordConf">i</label>
                  <input
                    name="passwordConf"
                    type="password"
                    id="passwordConf"
                    placeholder="Repeat your password"
                  />
                </div>
                <div className="form-group form-button">
                  <button
                    className="form-submit"
                    id="signup"
                    type="submit"
                    name="signup"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default SignupForm
