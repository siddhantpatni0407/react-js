import React, { useState } from 'react';
import axios from 'axios';

function ServerManagement() {
  const [notification, setNotification] = useState('');
  
  const startServer = () => {
    axios.post('http://localhost:8081/api/v1/kafka-service/kafka/start-server')
      .then(response => {
        console.log(response);
        setNotification('Server started successfully.');
      })
      .catch(error => {
        console.error(error);
        setNotification('Failed to start server.');
      });
  };

  const stopServer = () => {
    axios.post('http://localhost:8081/api/v1/kafka-service/kafka/stop-server')
      .then(response => {
        console.log(response);
        setNotification('Server stopped successfully.');
      })
      .catch(error => {
        console.error(error);
        setNotification('Failed to stop server.');
      });
  };

  return (
    <div>
      <h2>Server Management</h2>
      <button onClick={startServer}>Start Server</button>
      <button onClick={stopServer}>Stop Server</button>
      {notification && <p>{notification}</p>}
    </div>
  );
}

export default ServerManagement;
