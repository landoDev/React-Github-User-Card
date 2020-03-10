import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    landoData: []
  };


  componentDidMount() {
    axios.get('https://api.github.com/users/landoDev')
    .then(response =>{
      //response.data
      this.setState({
        landoData: response.data
      });
      console.log('data', this.state.landoData)
    } );
    
  }
  render(){
    return (
      <div className="App">
        <header><h1>Lando's Github Squad</h1></header>
        <div>
          <h2>{this.state.landoData.name}</h2>
          <img src={this.state.landoData.avatar_url}></img>
          <p>{this.state.landoData.location}</p>
          <p>{this.state.landoData.bio}</p>
          <p>Username: {this.state.landoData.login}</p>
          <label>URL: 
            <a href={this.state.landoData.html_url}>{this.state.landoData.html_url}</a>
          </label>


        </div>
        
      </div>
    );
  }

}

export default App;
