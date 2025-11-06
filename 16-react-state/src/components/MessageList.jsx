import Message from './Message.jsx'

export default function MessageList() {
  return (
    <div>
      <Message userName="Penguin" text="I am a penguin!" />
      <Message userName="Eagle" text="really? i'm not" />
      <Message userName="Penguin" text="Oh! Yep, you're a diff bird" />
      <Message userName="Penguin" text="can you fly?" />
      <Message userName="Eagle" text="... can you not?" />
    </div>
  );
}