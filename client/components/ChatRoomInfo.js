import React from 'react';

const ChatRoomInfo = props => {
  // props should contain a room property
  return (
    <div className='infoBar'>
      <h4>{props.room}</h4>
    </div>
  );
}

export default ChatRoomInfo;