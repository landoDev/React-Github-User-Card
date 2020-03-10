import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    data: []
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/landoDev')
  }
  render(){
    return (
      <div className="App">
        <header><h1>Lando's Github Squad</h1></header>
        
      </div>
    );
  }

}

export default App;
