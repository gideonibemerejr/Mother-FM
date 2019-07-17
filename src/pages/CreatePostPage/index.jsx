import React, { Component } from 'react'
import CreateForm from '../../components/CreateForm'

class CreatePostPage extends Component {
  render() {
    return (
      <div>
        <CreateForm type={'Post'} handleAddPost={this.props.handleAddPost} />
      </div>
    )
  }
}

export default CreatePostPage
