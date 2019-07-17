import React, { Component } from 'react'
import CreateForm from '../../components/CreateForm'

class CreateMixPage extends Component {
  render() {
    return (
      <div>
        <CreateForm type={'Mix'} handleAddMix={this.props.handleAddMix} />
      </div>
    )
  }
}

export default CreateMixPage
