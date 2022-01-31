import React from 'react';
import { useNavigate } from "react-router-dom";
import ChatroomPassword from '../components/ChatroomPassword';

const ChatroomElement = props => {

  const navigate = useNavigate();

  if(props.status === 'Closed') return(
    <div className='chatroomrows'>
      <h2>Chatroom Title: ({props.chatroomName}'s Room)</h2>
      <button onClick={(e) => {
        document.querySelector(`#password${props.i}`).style.display='block';
      }}>Locked</button>
      <ChatroomPassword i={props.i} password={props.chatroomName} />
    </div>
  );

  return(
    <div className='chatroomrows'>
      <h2 onClick={(e) => {
        navigate(`/chatroom/${props.chatroomName}`);
      }}>Chatroom Title: ({props.chatroomName}'s Room)</h2>
    </div>
  );
};

export default ChatroomElement;