import React from 'react';

const ChatroomPassword = props => (
  <div id='chatroomPassword'>
    <h2 id='passworduser'>Enter Password for {props.name}</h2>
    <input type='password' id='password' name='password' />
    <div>
      <button className='enterButton' onClick={(e) => {
        e.preventDefault();
        document.querySelector('#chatroomPassword').style.display='none';
      }}>Enter</button>
      <button className='cancelButton' onClick={(e) => {
        e.preventDefault();
        document.querySelector('#chatroomPassword').style.display='none';
      }}>Cancel</button>
    </div>
  </div>
);

export default ChatroomPassword;
