import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import BodyContent from './components/BodyContent'
import HiBox from './components/HiBox'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <BodyContent/>   
        <Router>
          <div>
            <Route path="/hi" component={HiBox}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
