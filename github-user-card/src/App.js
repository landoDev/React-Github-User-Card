import React from 'react';
import axios from 'axios';
import styled from 'styled-components'
import './App.css';

const AppDiv= styled.div`
header{
}
.user-card{
  background-color: #64696C;
  border: 5px outset #556567;
  border-radius: 15px;
  padding: 2% 0;
  width: 30%;
  margin: 2% 0;
  h2{
    font-size: 2rem;
  }
  img{
    border-radius: 50%;
    border: 5px outset #394A59;
  }
  a{
    text-decoration: none;
    color: #BC1E22;
    text-shadow: 2px 0 2px #394A59;
  }
}
.user-card.title-card{
  margin:0 auto;
}
.followers{
  display: flex;
  justify-content: space-evenly;
  flex-flow: wrap;
}

`;
// const UserCard = styled.div`
//   background-color: #64696C;
//   border: 5px outset #556567;
//   width: 50%;
//   .title-card{
//     margin: 0 auto;
//   }
//   h2{
//     font-size: 2rem;
//   }
//   a{
//     text-decoration: none;
//     color: #BC1E22;
//     text-shadow: 2px 0 2px #394A59;
//   }
// `;

const FollowersDiv = styled.div`
  .followers{
    display: flex;
    justify-content: space-evenly;
    flex-flow: wrap;
  }
`;
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
        // console.log(response.data)
        this.setState({
          followerData: response.data
        })
      }));
    
  }
  render(){
    return (
      <AppDiv className="App">
        <header><h1>Lando's Github Legion</h1></header>
        <div className='user-card title-card'>
          <h2>{this.state.landoData.name}</h2>
          <img src={this.state.landoData.avatar_url}></img>
          <p>{this.state.landoData.location}</p>
          <p>{this.state.landoData.bio}</p>
          <p>Username: {this.state.landoData.login}</p>
          <label>URL: 
            <a href={this.state.landoData.html_url}>{this.state.landoData.html_url}</a>
          </label>
        </div>
        <div className='followers'>
          {this.state.followerData.map(follower => {
            return(
              <div key={follower.id} className='user-card'>
              <h2>{follower.name}</h2>
              <img src={follower.avatar_url}></img>
              <p>{follower.location}</p>
              <p>{follower.bio}</p>
              <p>Username: {follower.login}</p>
              <a href={follower.html_url}>{follower.html_url}</a>
            </div>
            );
          })}
        </div>
        
      </AppDiv>
    );
  }

}

export default App;
