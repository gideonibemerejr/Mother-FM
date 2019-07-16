import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class CreateForm extends Component {
  state = {
    link: ''
  }

  /*************************************************
  // * General Purpose Methods  
*************************************************/

  handleChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  handleSubmit = e => {
    const { handleAddMix } = this.props
    e.preventDefault()
    handleAddMix(this.state)
    this.setState({
      link: ''
    })
  }

  /*************************************************
  // * Lifecycle Methods 
*************************************************/

  render() {
    return (
      <main className="signup">
        <div className="vh-100 flex justify-center items-center">
          <div className="signup-form">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="link">
                  <i class="zmdi zmdi-link" />
                </label>
                <input
                  onChange={this.handleChange}
                  value={this.state.link}
                  type="text"
                  name="link"
                  id="link"
                  placeholder="Mixcloud URL"
                />
              </div>
              <div className="form-group flex flex-wrap form-button justify-between items-baseline">
                <button className="white bg-black form-submit">
                  Create Mix
                </button>
                <Link to="/">Back</Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    )
  }
}

export default CreateForm
