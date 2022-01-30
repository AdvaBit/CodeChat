import React from 'react';

const Input = props => {
  // props should have the following properties
  const { setMessage, sendMessage, message } = props;
  return (
    <form className='form'>
      <input className='input' 
             type='text' 
             placeholder='enter a message...' 
             value={message} 
             onChange={e => setMessage(e.target.value)}
             onKeyPress={e => e.key === 'Enter' ? sendMessage() : null}
      />
      <button className='sendButton' onClick={() => sendMessage()}>Send</button>
    </form>
  );
};

export default Input;