import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './containers/Login';
import Chatroom from './containers/Chatroom';
import MessageBoard from './containers/MessageBoard';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: '',
      currentChatroom: '',
      token: '',
      loggedIn: false,
      chatrooms: [{name:'Michael', status:'Closed'}, {name:'Kai', status:'Closed'}, {name:'Catilin', status:'Open'}],
      favorites: ['C', 'D', 'Y', 'E'],
    };

    // const [token, setToken] = useState();
    this.logIn = this.logIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  logIn() {
    this.setState({
      ...this.state,
      loggedIn: true
    })
  }

  signOut() {
    this.setState({
      ...this.state,
      loggedIn: false
    })
  }

  render() {
    if(!this.state.loggedIn) {
      return (<Login handleClick={this.logIn}/>)
    }

    return (
      <div id='container'>
        <Router>
          <Routes>
            <Route exact path='/' element={<MessageBoard signout={this.signOut} chatrooms={this.state.chatrooms} favorites={this.state.favorites}/>} />
            <Route path='/chatroom' element={<Chatroom name={this.state.currentUser} room={this.state.currentChatroom} />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
