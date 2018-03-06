import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>See Our Todos!</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
