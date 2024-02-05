import React, {useEffect, useState} from 'react';
import ChatHeader from "./components/ChatHeader";
import ChatBody from "./components/ChatBody";
import ChatTextarea from "./components/ChatTextarea"
import mainStore from "../../../Store";

const MainChat = ({uid}) => {

    const {users} = mainStore()
    const [user, setUser] = useState({})
  useEffect(() => {
      setUser(users.find(i => i.id === Number(uid)))
  })
    return (
        <div className="h-full">
            <ChatHeader user={user}/>
            <ChatBody/>
            <ChatTextarea/>
        </div>
    );
};

export default MainChat;
