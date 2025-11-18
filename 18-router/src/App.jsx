import { useState } from 'react'

import UserProfile from './components/UserProfile'

import { Link, Route, Routes } from 'react-router';
import ChatPage from './components/ChatPage';
import PageNotFound from './components/PageNotFound';

export default function App() {
  const [messages, setMessages] = useState([
    { id: 1, user: 'Orange', text: 'Hello!', timestamp: Date.now() - 1000 * 60 * 60 },
    { id: 2, user: 'Bob', text: 'Hi Alice!', timestamp: Date.now() - 1000 * 60 * 30 },
    { id: 3, user: 'Alice', text: 'How are things?', timestamp: Date.now() - 1000 * 60 * 30 }
  ])

  const USERS = [
    { id: "Jax", username: "Jax", image: "/img/jax.png" },
    { id: "Orange", username: "Orange", image: "/img/orange.png" },
    { id: "Juice", username: "Juice", image: "/img/juice.png" },
  ]

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
      <h1>Simple Chat</h1>
      <Routes>
        <Route path="user" element={<UserProfile />}>
          <Route path=":userId" element={<UserProfile />} />
        </Route>
        <Route index element={<ChatPage messages={messages}
                                        deleteMessage={deleteMessage}
                                        sendMessage={sendMessage} />} />
        <Route path="*" element={< PageNotFound />} />
      </Routes>

      <div className="user">
        <Link to="user"><img src={currentUser.image} /></Link>
      </div>
    </div>
  )
}
