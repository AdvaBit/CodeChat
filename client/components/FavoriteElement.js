import React from 'react';

const FavoriteElement = props => {
  return(
    <div className='favorites'>
      <h2>{props.chatroomName}'s Room</h2>
    </div>
  );
};

export default FavoriteElement;