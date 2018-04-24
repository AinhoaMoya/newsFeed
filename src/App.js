import React, { Component } from 'react';
import NewsFeed from './containers/NewsFeed/NewsFeed';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NewsFeed />
      </div>
    );
  }
}

export default App;
