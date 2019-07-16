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
        <div className="signup-container">
          <div className="signup-content flex">
            <div className="signup-form">
              <h2 className="form-title mb4">Sign up</h2>
              <form
                onSubmit={this.handleSubmit}
                className="register-form"
                id="register-form"
              >
                <div className="form-group">
                  <label htmlFor="name">
                    <i class="zmdi zmdi-account material-icons-name" />
                  </label>
                  <input
                    onChange={this.handleChange}
                    value={this.state.name}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <i class="zmdi zmdi-email" />
                  </label>
                  <input
                    onChange={this.handleChange}
                    value={this.state.email}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    <i class="zmdi zmdi-lock" />
                  </label>
                  <input
                    onChange={this.handleChange}
                    value={this.state.password}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="passwordConf">
                    <i class="zmdi zmdi-lock-outline" />
                  </label>
                  <input
                    onChange={this.handleChange}
                    value={this.state.passwordConf}
                    name="passwordConf"
                    type="password"
                    id="passwordConf"
                    placeholder="Repeat your password"
                  />
                </div>
                <div className="form-group flex flex-wrap form-button justify-between items-baseline">
                  <button
                    className="white bg-black form-submit"
                    disabled={this.isFormInvalid()}
                  >
                    Sign Up
                  </button>
                  <Link to="/">Back</Link>
                </div>
              </form>
            </div>
            <div className="signup-image">
              <figure>
                <img src="https://imgur.com/m82c8QD.png" alt="" />
              </figure>
              <Link className="signup-image-link" to="/login">
                I already have an account
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default SignupForm
