import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import userUtil from '../../utils/userUtil'

class LoginPage extends Component {
  state = {
    email: '',
    pw: ''
  }

  handleChange = e => {
    // TODO: HANDLE CHANGE FOR CONTROLLED FORM
    // this.setState({
    //     [e.target.name]: e.target.value
    // })
  }

  handleSubmit = e => {}
  render() {
    return (
      <section className="signup">
        <div className="container">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Login</h2>
              <form
                onSubmit={this.handleSubmit}
                className="register-form"
                id="register-form"
              >
                <div className="form-group">
                  <label htmlFor="email">i</label>
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
                  <label htmlFor="password">i</label>
                  <input
                    onChange={this.handleChange}
                    value={this.state.pw}
                    type="password"
                    name="pw"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group form-button">
                  <button className="f6 link dim br2 ph3 pv2 mb2 dib white bg-black">
                    Login
                  </button>
                  <Link to="/">Cancel</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default LoginPage
