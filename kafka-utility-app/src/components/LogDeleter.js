import React, { useState } from 'react';
import axios from 'axios';

function LogDeleter() {
    const [notification, setNotification] = useState(''); // State to manage notification message

    const deleteLogs = () => {
        axios.delete('http://localhost:8081/api/v1/kafka-service/kafka/logs')
          .then(response => {
            console.log('Kafka logs deleted successfully');
            setNotification('Kafka logs deleted successfully'); // Set notification message on successful deletion
          })
          .catch(error => {
            console.error('Error deleting Kafka logs:', error);
            setNotification('Failed to delete Kafka logs'); // Set notification message on error
          });
    };

    return (
        <div>
            <h2>Log Deleter</h2>
            <button onClick={deleteLogs}>Delete Logs</button>
            {notification && <p>{notification}</p>} {/* Display notification message if present */}
        </div>
    );
}

export default LogDeleter;
