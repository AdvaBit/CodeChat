import React from 'react';
import Message from './Message';

const Messages = props => {
  // props should have a messages and username properties
  let { messages, username } = props;
  messages = messages.map(msgReceived => {
    return <div><Message msgReceived={msgReceived} username={username} /></div>;
  });
  return ({messages});
};

export default Messages;