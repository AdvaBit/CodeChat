import React from 'react';

const Message = props => {
  let isSentByCurrentUser = false;
  // props should have a message and username properties
  const { message: { text, author }, username} = props;
  if (author === username) isSentByCurrentUser = true;

  if (isSentByCurrentUser) return (
    <div className='messageContainer justifyEnd backgroundBlue'>
      <div className='textContainer'>
        <p>{text}</p>
      </div>
      <p className='sent'>{author}</p>
    </div>
  );
  else return (
    <div className='messageContainer justifyStart backgroundWhite'>
      <p className='sent'>{author}</p>
    </div>
  );
};

export default Message;