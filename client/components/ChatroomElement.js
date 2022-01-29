import React from 'react';

const ChatroomElement = props => {
  return(
    <div className='chatroomrows'>
      <h2>Chatroom Name ({props.chatroomName}'s Room)</h2>
    </div>
  );
};

export default ChatroomElement;