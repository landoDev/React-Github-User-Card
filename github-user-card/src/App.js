import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    landoData: [],
    followerData: []
  };


  componentDidMount() {
    axios.get('https://api.github.com/users/landoDev')
    .then(response =>{
      //response.data
      this.setState({
        landoData: response.data
      }); 
    })
    .then(axios.get('https://api.github.com/users/landoDev/followers')
      .then(response=> {
        // console.log(response)
        this.setState({
          followerData: response.data
        })
      }));
    
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
        <div>
          {this.state.followerData.map(follower => {
            return(
              <div key={follower.id}>
              <h2>{follower.name}</h2>
              <img src={follower.avatar_url}></img>
              <p>{follower.location}</p>
              <p>{follower.bio}</p>
              <p>Username: {follower.login}</p>
              <label>URL: 
                <a href={follower.html_url}>{follower.html_url}</a>
              </label>
            </div>
            );
          })}
        </div>
        
      </div>
    );
  }

}

export default App;
