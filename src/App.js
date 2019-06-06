import React, { Component } from 'react';
import './App.css';
import Sidebar from './Components/sidebar'
import Introduction from './Components/introduction'
import About from './Components/about'
import Timeline from './Components/timeline'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar>
          <div id="colorlib-main">
            <Introduction></Introduction>
            <About></About>
            <Timeline></Timeline>
          </div>
        </div>
      </div>
    );
  }
}

export default App;