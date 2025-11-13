export default function MessageList(props) {
  const { messages } = props;

  function toggleEditInput(event) {
    const input = event.target.parentNode.querySelector('input');
    if (!input) return;
    input.style.visibility =
      input.style.visibility === 'hidden' ? 'visible' : 'hidden';
    if (input.style.visibility !== 'hidden') input.focus();
  }

  return (
    <div className="chat-window">
      {messages.map((m, index) => (
        <div className="message" key={index}>
          <strong>{m.user}:</strong> {m.text}

          <div>
            <button className="edit-btn" onClick={toggleEditInput(e)}>Edit</button>
            <input type="text" style={{ visibility: 'hidden' }} defaultValue={m.text} />
          </div>
        </div>
      ))}
    </div>
  )
}
