import React, { Component } from 'react';
import MediaQuery from 'react-responsive'
import Home from './components/container/home/home'
import Work from './components/container/work/work';
import Skill from './components/container/skill/skill';
import MbSkill from './components/container/mb_skill/skill';
import Project from './components/container/project/project';
import MbProject from './components/container/mb_project/project';
import About from './components/container/about/about';
import MbAbout from './components/container/mb_about/about';
import './App.css'
import './assets/style/reset.css'
import MbWork from './components/container/mb_work/work';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Home />
        <MediaQuery query="(min-device-width: 1224px)">
          <MediaQuery query="(min-width: 820px)">
            <About />
            <Skill />
            <Work />
            <Project />
          </MediaQuery>
          <MediaQuery query="(max-width: 820px)">
            <MbAbout />
            <MbSkill />
            <MbWork />
            <MbProject />
          </MediaQuery>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">
          <MbAbout />
          <MbSkill />
          <MbWork />
          <MbProject />
        </MediaQuery>
      </div>
    );
  }
}

export default App;
