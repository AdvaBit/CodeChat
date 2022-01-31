import React from 'react';
// import { useNavigate } from "react-router-dom";
import ChatroomElement from '../components/ChatroomElement';
import FavoriteElement from '../components/FavoriteElement';
// import ChatroomPassword from '../components/ChatroomPassword';
import AddChatroom from '../components/AddChatroom';

const MessageBoard = props => {

  const chatrooms = props.chatrooms.map((el, i) => <ChatroomElement key={i} i={i} chatroomName={el.name} status={el.status} />)
  const favorites = props.favorites.map((el, i) => <FavoriteElement key={i} i={i} chatroomName={el} />)

  // const navigate = useNavigate();

  return (
    <div className='messageBoard'>
      <AddChatroom />
      <header>
        <h1>CodeChat Chatrooms</h1>
        <button onClick={(e) => {
          e.preventDefault();
          document.querySelector('#addChatroom').style.display='block';
        }}>Create Chatroom</button>
      </header>
      <main>
        <nav>
          This is the side nav bar.
          {favorites}
          <button onClick={props.signout}>Sign Out</button>
        </nav>
        <section>
          This section will contain the various chatrooms.
          {chatrooms}
        </section>
      </main>
    </div>
  );
}

export default MessageBoard;
