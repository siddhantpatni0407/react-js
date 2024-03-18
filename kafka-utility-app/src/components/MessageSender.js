import React, { useState } from 'react';
import axios from 'axios';

function MessageSender() {
  const [message, setMessage] = useState('');
  const [notification, setNotification] = useState('');
  
  const sendMessage = () => {
    axios.get(`http://localhost:8082/api/v1/kafka-service/publish?message=${message}`)
      .then(response => {
        console.log('Message sent successfully:', response.data);
        setNotification('Message sent successfully.');
      })
      .catch(error => {
        console.error('Failed to send message:', error);
        setNotification('Failed to send message.');
      });
  };

  return (
    <div>
      <h2>Message Sender</h2>
      <input
        type="text"
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder="Enter message"
      />
      <button onClick={sendMessage}>Send Message</button>
      {notification && <p>{notification}</p>}
    </div>
  );
}

export default MessageSender;
