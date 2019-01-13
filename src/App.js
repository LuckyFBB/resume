import React, { Component } from 'react';
import MediaQuery from 'react-responsive'
import Home from './components/container/home/home'
import Work from './components/container/pc/work/work';
import MbWork from './components/container/mb/mb_work/work';
import Skill from './components/container/pc/skill/skill';
import MbSkill from './components/container/mb/mb_skill/skill';
import Project from './components/container/pc/project/project';
import MbProject from './components/container/mb/mb_project/project';
import About from './components/container/pc/about/about';
import MbAbout from './components/container/mb/mb_about/about';
import './App.css'
import './assets/style/reset.css'

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
