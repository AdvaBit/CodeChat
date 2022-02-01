import React from 'react';
import Message from './Message';

const Messages = props => {
  // props should have a messages and username properties
  let { messages, username } = props;
  // const msgs = messages.map(msgReceived => {
  //   return <div><Message msgReceived={msgReceived} username={username} /></div>;
  // });
  const msgs = messages.map(msgReceived => <div><Message msgReceived={msgReceived} username={username} /></div>);
  return (
    <div className='messagesContainer'>
      {msgs}
    </div>
    );
};

export default Messages;