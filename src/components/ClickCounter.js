import React, { Component } from 'react'
import { Separater } from './Separater';

export default class ClickCounter extends Component {
  constructor() {
    super();
    this.state = {
      value: 0
    };
  }

  increaseValuee = () => {
    this.setState({ value: this.state.value + 1 });
  }

  decreseValue = () => {
    this.setState({ value: this.state.value - 1 });
  }

  resetValue = () => {
    this.setState({value: 0})
  }

  render() {
    return (
      <>
        <Separater data={this.state.value}/>
        <button className='button' style={{background: '#4CAF50'}} onClick={this.increaseValuee}>Increase</button>
        <button className='button' style={{background: 'red'}} onClick={this.decreseValue} disabled={this.state.value <= 0}>Decrease</button>
        <button className='button' style={{background: 'blue'}} onClick={this.resetValue}>Reset</button>
      </>
    )
  }
}
