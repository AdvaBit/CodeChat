import React from 'react';
import './Input.css';

const Input = props => {
  // props should have the following properties
  const { setMessage, sendMessage, message } = props;
  return (
    <form className='form' onSubmit={sendMessage}>
      <input className='input' 
             type='text' 
             placeholder='enter a message...' 
             value={message} 
             onChange={e => setMessage(e.target.value)}
             onKeyPress={e => e.key === 'Enter' ? sendMessage() : null}
      />
      <button className='sendButton' type="submit">Send</button>
    </form>
  );
};

export default Input;