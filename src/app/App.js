import React, { Component } from 'react';
import logo from './logo.svg';
import '../css/App.css';
import Article from './components/Article';
import CommentsListContainer from './components/CommentsListContainer';
import CommentFormContainer from './components/CommentFormContainer';

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
        <CommentsListContainer />
        <hr />
        <CommentFormContainer />
      </div>
    );
  }
}

export default App;
