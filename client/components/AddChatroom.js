import React, { useState } from 'react';

const AddChatroom = props => {
  const [title, setTitle] = useState();
  const [status, setStatus] = useState();
  const [password, setPassword] = useState();
  
  return(
    <div id='addChatroom'>
      <h2>Create a Chatroom</h2>
      <div>
        <label htmlFor='chatroomTitle'>Chatroom Title: </label>
        <input type='text' id='chatroomTitle' name='chatroomTitle' onChange={e => setTitle(e.target.value)}/>
      </div>
      <div>
        <label htmlFor='securityStatus'>Security Status: </label>
        <select name='securityStatus' id='securityStatus' onChange={e => setStatus(e.target.value)}>
          <option value='Open'>Open</option>
          <option value='Closed'>Closed</option>
        </select>
      </div>
      <div>
        <label htmlFor='password'>Password: (if Closed) </label>
        <input type='text' id='password' name='chatroomname' onChange={e => setPassword(e.target.value)}/>
      </div>
      <div>
        <button className='submitButton' onClick={(e) => {
          e.preventDefault();
          console.log(title, status, password);
          document.querySelector('#addChatroom').style.display='none';
        }}>Submit</button>
        <button className='cancelButton' onClick={(e) => {
          e.preventDefault();
          document.querySelector('#addChatroom').style.display='none';
        }}>Cancel</button>
      </div>
    </div>
  );
}

export default AddChatroom;
