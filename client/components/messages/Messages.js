import React from 'react';
import Message from './Message';

const Messages = props => {
  // props should have a messages and username properties
  let { messages, username } = props;
  messages = messages.map(message => {
    return <div><Message message={message} username={username} /></div>;
  });
  return ({messages});
};

export default Messages;