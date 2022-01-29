import React from 'react';

const Message = props => {
  let isSentByCurrentUser = false;

  const { message: { text, author }, username} = props;
  if (author === username) isSentByCurrentUser = true;

  if (isSentByCurrentUser) return (
    <div className='messageContainer justifyEnd backgroundBlue'>
      <div className=''>

      </div>
      <p className='sent'>{author}</p>
    </div>
  );
  else return (
    <div className='messageContainer justifyStart'>
      <p className='sent'>{author}</p>
    </div>
  );
}