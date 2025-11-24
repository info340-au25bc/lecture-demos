import MessageList from './MessageList'
import ComposeMessage from './ComposeMessage'

function ChatPage(props) {
  const {messages, sendMessage, deleteMessage} = props;

  return (
    <>
      <MessageList messages={messages} onDelete={deleteMessage} />
      <ComposeMessage onSend={sendMessage} />
    </>
  )
}

export default ChatPage;