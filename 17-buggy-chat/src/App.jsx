import { useState } from 'react'
import MessageList from './components/MessageList'
import ComposeMessage from './components/ComposeMessage'

export default function App() {
  const [messages, setMessages] = useState([
    { id: 1, user: 'Alice', text: 'Hello!', timestamp: Date.now() - 1000 * 60 * 60 },
    { id: 2, user: 'Bob', text: 'Hi Alice!', timestamp: Date.now() - 1000 * 60 * 30 },
    { id: 3, user: 'Alice', text: 'How are things?', timestamp: Date.now() - 1000 * 60 * 30 }
  ])

  // Bug in this function here
  function sendMessage(text) {
    const nextId = messages.length + 1
    const msg = { id: nextId, user: 'You', text, timestamp: Date.now() }
    messages.push(msg)
    setMessages(messages)
  }

  return (
    <div className="app">
      <h1>Simple Chat</h1>
      <MessageList messages={messages} />
      <ComposeMessage onSend={sendMessage} />
    </div>
  )
}
