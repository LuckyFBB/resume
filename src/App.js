import React, { Component } from 'react';
import Nav from './components/nav/nav'
import Home from './components/container/home/home'
import './App.css'
import './assets/style/reset.css'
import Work from './components/container/work/work';
import Skill from './components/container/skill/skill';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Home />
        <Work />
        <Skill />
      </div>
    );
  }
}

export default App;
