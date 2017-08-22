import React, { Component } from 'react'
import MainContent from './MainContent'
import SideBar from './SideBar'

class BodyContent extends Component {
  render () {
    return (
      <div className="container mt-4">
        <div className="row">
          <SideBar/>
          <MainContent/>
        </div>
      </div>
    )
  }
}

export default BodyContent
