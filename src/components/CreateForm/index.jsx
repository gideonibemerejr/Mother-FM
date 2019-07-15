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
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input
            onChange={this.handleChange}
            value={this.state.link}
            type="text"
            name="link"
            id="link"
            placeholder="Mixcloud URL"
          />
        </div>
        <input type="submit" />
        <Link to="/">Cancel</Link>
      </form>
    )
  }
}

export default CreateForm
