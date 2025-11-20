import { useState } from 'react'

import { Route, Routes, Link } from 'react-router'

import CHAT_LOG from './assets/data/chat_log.json';
import USERS from './assets/data/users.json';
import UserProfile from './components/UserProfile';
import ChatPage from './components/ChatPage';
import PageNotFound from './components/PageNotFound';

export default function App() {
  const [messages, setMessages] = useState(CHAT_LOG)

  const [currentUser, setCurrentUser] = useState(USERS[0]);

  function sendMessage(text) {
    const nextId = messages.length + 1
    const msg = { id: nextId, user: 'You', text, timestamp: Date.now() }
    messages.push(msg)
    setMessages([...messages])
  }

  function deleteMessage(messageId) {
    setMessages(messages.filter(m => m.id !== messageId));
  }

  return (
    <div className="app">
      <Routes>
        <Route path="user/:userId" element={<UserProfile />} />
        <Route index element={<ChatPage messages={messages} deleteMessage={deleteMessage} sendMessage={sendMessage}/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <div className="user">
        <Link to="/user"><img src={currentUser.image} /></Link>
      </div>
    </div>
  )
}
