import MessageList from "./MessageList"
import ComposeMessage from "./ComposeMessage"

export default function ChatPage(props) {
  const {messages, deleteMessage, sendMessage} = props;
  return (
    <>
      <h1>Simple Chat</h1>
      <MessageList messages={messages} onDelete={deleteMessage} />
      <ComposeMessage onSend={sendMessage} />
    </>
  )
}