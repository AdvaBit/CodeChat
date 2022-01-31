import React, { useState } from 'react';

const ChatroomPassword = props => {
  const [password, setPassword] = useState();
  
  return(
    <div id='chatroomPassword'>
      <h2 id='passworduser'>Enter Password {props.name}</h2>
      <input type='password' id='password' name='password' onChange={e => setPassword(e.target.value)}/>
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
};

export default ChatroomPassword;
