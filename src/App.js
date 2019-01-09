import React, { Component } from 'react';
import Nav from './components/nav/nav'
import Home from './components/container/home/home'
import './App.css'
import './assets/style/reset.css'
import Work from './components/container/work/work';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Home />
        <Work />
      </div>
    );
  }
}

export default App;
