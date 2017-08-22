import React, { Component } from 'react'

class Clock extends Component {
  constructor () {
    super ()
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  compontWillUnmount () {
    console.log('unmount')
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render () {
    return (
      <div>
        <h3>{ this.state.date.toLocaleTimeString() }</h3>
      </div>
    )
  }
}

export default Clock
