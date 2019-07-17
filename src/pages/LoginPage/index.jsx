import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import userUtil from '../../utils/userUtil'

class LoginPage extends Component {
  state = {
    email: '',
    pw: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = async e => {
    e.preventDefault()
    try {
      await userUtil.login(this.state)
      // Successful sign up? Show HomePage
      this.props.handleSignupOrLogin()
      this.props.history.push('/')
    } catch (error) {
      alert('Invalid Credentials!')
    }
  }

  render() {
    return (
      <main className="main-login">
        <section className="signin">
          <div className="signup-container">
            <div className="signup-content flex">
              <div className="signup-image">
                <figure>
                  <img src="https://imgur.com/lfRCB3I.png" alt="" />
                </figure>
                <Link className="signup-image-link" to="/signup">
                  Create an account
                </Link>
              </div>
              <div className="signup-form">
                <h2 className="form-title">Login</h2>
                <form
                  onSubmit={this.handleSubmit}
                  className="register-form"
                  id="register-form"
                >
                  <div className="form-group">
                    <label htmlFor="email">
                      <i className="zmdi zmdi-email" />
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
                      <i className="zmdi zmdi-lock" />
                    </label>
                    <input
                      onChange={this.handleChange}
                      value={this.state.pw}
                      type="password"
                      name="pw"
                      id="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group flex flex-wrap form-button justify-between items-baseline">
                    <button className="form-submit white bg-black">
                      Login
                    </button>
                    <Link to="/">Back</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default LoginPage
