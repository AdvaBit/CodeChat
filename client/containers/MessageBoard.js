import React from 'react';
// import { useNavigate } from "react-router-dom";
import ChatroomElement from '../components/ChatroomElement';
import FavoriteElement from '../components/FavoriteElement';
// import ChatroomPassword from '../components/ChatroomPassword';
import AddChatroom from '../components/AddChatroom';

const MessageBoard = props => {

  const chatrooms = props.chatrooms.map((el, i) => <ChatroomElement key={i} i={i} name={props.name} chatroomName={el.title} status={el.status} password={el.password}/>)
  const favorites = props.favorites.map((el, i) => <FavoriteElement key={i} i={i} name={props.name} chatroomName={el} />)

  // const navigate = useNavigate();

  return (
    <div className='messageBoard'>
      <AddChatroom refresh={props.refresh}/>
      <header>
        <h1>CodeChat Chatrooms</h1>
        <button onClick={(e) => {
          e.preventDefault();
          document.querySelector('#addChatroom').style.display='block';
        }}>Create Chatroom</button>
      </header>
      <main>
        <nav>
          <h2 id='favorites'> Favorites </h2>
          {favorites}
          <button onClick={props.signout}>Sign Out</button>
        </nav>
        <section>
          {chatrooms}
        </section>
      </main>
    </div>
  );
}

export default MessageBoard;
