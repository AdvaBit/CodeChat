import React from 'react';
import ChatroomElement from '../components/ChatroomElement';
import FavoriteElement from '../components/FavoriteElement';

const MessageBoard = props => {
  let example = ['Michael', 'Kai', 'Catilin', 'Charlie', 'David', 'Yuanji', 'Evan'];
  example = example.map((el, i) => <ChatroomElement key={i} chatroomName={el} />)

  let favorites = ['C', 'D', 'Y', 'E'];
  favorites = favorites.map((el, i) => <FavoriteElement key={i} chatroomName={el} />)

  return (
    <div className='messageBoard'>
      <header>
        <h1>CodeChat Chatrooms</h1>
        <button>Create Chatroom</button>
      </header>
      <main>
        <nav>
          This is the side nav bar.
          {favorites}
          <button>Sign Out</button>
        </nav>
        <section>
          This section will comtain the various chatrooms.
          {example}
        </section>
      </main>
    </div>
  );
}

export default MessageBoard;
