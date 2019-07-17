import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CreateForm extends Component {
  state = {
    link: '',
    title: '',
    mixlink: '',
    body: ''
  }

  /*************************************************
  // * General Purpose Methods  
*************************************************/

  handleChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  handleMixSubmit = e => {
    const { handleAddMix } = this.props
    e.preventDefault()
    handleAddMix(this.state)
    this.setState({
      link: ''
    })
  }
  handlePostSubmit = e => {
    const { handleAddPost } = this.props
    e.preventDefault()
    handleAddPost(this.state)
    this.setState({
      title: '',
      mixlink: '',
      body: ''
    })
  }

  /*************************************************
  // * Lifecycle Methods 
*************************************************/

  render() {
    return (
      <>
        {this.props.type === 'Mix' ? (
          <main className="signup">
            <div className="vh-100 flex justify-center items-center">
              <h2>Create {this.props.type}</h2>
              <div className="signup-form">
                <form onSubmit={this.handleMixSubmit}>
                  <div className="form-group">
                    <label htmlFor="link">
                      <i className="zmdi zmdi-link" />
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
                      Create {this.props.type}
                    </button>
                    <Link to="/">Back</Link>
                  </div>
                </form>
              </div>
            </div>
          </main>
        ) : (
          <main className="signup">
            <div className="vh-100 flex justify-center items-center">
              <h2>Create {this.props.type}</h2>
              <div className="signup-form">
                <form onSubmit={this.handlePostSubmit}>
                  <div className="form-group">
                    <label htmlFor="link">
                      <i className="zmdi zmdi-format-size" />
                    </label>
                    <input
                      onChange={this.handleChange}
                      value={this.state.title}
                      type="text"
                      name="title"
                      id="link"
                      placeholder="Post Title"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="textarea">
                      <i className="zmdi zmdi-format-align-left" />
                    </label>
                    <textarea
                      onChange={this.handleChange}
                      value={this.state.body}
                      type="textarea"
                      name="body"
                      id="link"
                      placeholder="Post Body"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="link">
                      <i className="zmdi zmdi-link" />
                    </label>
                    <input
                      onChange={this.handleChange}
                      value={this.state.mixlink}
                      type="text"
                      name="mixlink"
                      id="link"
                      placeholder="Link to Mix"
                    />
                  </div>
                  <div className="form-group flex flex-wrap form-button justify-between items-baseline">
                    <button className="white bg-black form-submit">
                      Create {this.props.type}
                    </button>
                    <Link to="/">Back</Link>
                  </div>
                </form>
              </div>
            </div>
          </main>
        )}
      </>
    )
  }
}

export default CreateForm
