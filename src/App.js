import React, { Component } from 'react';
import Nav from './components/nav/nav'
import Home from './components/container/home/home'
import './App.css'
import './assets/style/reset.css'
import Work from './components/container/work/work';
import Skill from './components/container/skill/skill';
import Project from './components/container/project/project';
import About from './components/container/about/about';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Home />
        <About />
        <Skill />
        <Work />
        <Project />
      </div>
    );
  }
}

export default App;
