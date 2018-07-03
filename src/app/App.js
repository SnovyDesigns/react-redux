import React, { Component } from 'react';
import logo from './logo.svg';
import '../css/App.css';
import Article from './components/Article';
import CommentsList from './components/CommentsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Article />
        <hr />
        <CommentsList />
      </div>
    );
  }
}

export default App;
