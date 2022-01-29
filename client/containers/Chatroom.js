import React, { Component, useState, useEffect } from 'react';
import queryString from 'query-string';
import io from "socket.io-client";

import ChatRoomInfo from '../components/ChatRoomInfo';

const end_point = 'http://localhost:3000/';

let socket = io(end_point);

const Chatroom = props => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [participant, setParticipants] = useState('');
  const [message, setMessage] = useState('');
  const [prevMessages, setPrevMessages] = useState([]);

  useEffect(() => {
    // get room_id from props
    const { room } = props;
    setRoom(room);
  });

// --------------------------------------------------------------------

  useEffect(() => {
    // When a message is received from the server
    socket.on('message', message => {
      // push the received message to prevMessages
      setMessage(prevMessages => prevMessages.push(message));
    });

    // When roomInfo is received from the server
    socket.on('roomInfo', ({ participants }) => {
      setParticipants(participants);
    });
  }, []);

  const sendMessage = () => {
    if (message) {
      socket.emit('sendMessage', message);
    }
    setMessage('');
  };

  return (
    <div className="chatroom">
      <div className='container'>
        <ChatRoomInfo room={room} />
      </div>
    </div>
  );
}

export default Chatroom;
