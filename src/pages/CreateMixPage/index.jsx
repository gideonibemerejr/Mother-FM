import React, { Component } from 'react'
import CreateForm from '../../components/CreateForm'

class CreateMixPage extends Component {
  state = {}

  /*************************************************
  // * General Purpose Methods  
*************************************************/

  /*************************************************
  // * Lifecycle Methods 
*************************************************/

  render() {
    return (
      <div>
        <CreateForm handleAddMix={this.props.handleAddMix} />
      </div>
    )
  }
}

export default CreateMixPage
