import React, { Component } from 'react';
import NavBar from './components/NavBar'
import BodyContent from './components/BodyContent'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <BodyContent/>
      </div>
    );
  }
}

export default App;
