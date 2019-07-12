import React, { Component } from 'react'

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
          <label htmlFor="link">i</label>
          <input
            onChange={this.handleChange}
            value={this.state.link}
            type="text"
            name="link"
            id="link"
            placeholder="Enter the path to the mix"
          />
        </div>
        <input type="submit" />
      </form>
    )
  }
}

export default CreateForm
