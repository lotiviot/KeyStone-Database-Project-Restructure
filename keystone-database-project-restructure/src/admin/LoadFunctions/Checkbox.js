import React, { Component } from 'react'

//simple react component that handles the checking procedure of other the related CheckboxContainer component
export default class Checkbox extends Component {  
  render() {
    return (
      <input 
        type="checkbox" 
        value={this.props.name} 
        checked={this.props.checked} 
        onChange={this.props.onChange} 
      />
    )
  }
}
