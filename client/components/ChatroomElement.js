import React from 'react';

const ChatroomElement = props => {
  return(
    <div className='chatroomrows'>
      <h2>Chatroom Name ({props.chatroomName}'s Room)</h2>
      <button onClick={(e) => {
        e.preventDefault();
        document.querySelector('#chatroomPassword').style.display='block';
        document.querySelector('#passworduser').style.after='Test';
      }}>Locked</button>
    </div>
  );
};

export default ChatroomElement;