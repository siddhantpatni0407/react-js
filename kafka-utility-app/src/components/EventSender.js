import React, { useState } from 'react';
import axios from 'axios';

function EventSender() {
  const [eventData, setEventData] = useState({ eventType: '', eventData: '' });
  const [notification, setNotification] = useState('');

  const sendEvent = () => {
    axios.post('http://localhost:8082/api/v1/kafka-service/send-event', eventData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log('Event sent successfully:', response.data);
      setNotification('Event sent successfully.');
    })
    .catch(error => {
      console.error('Failed to send event:', error);
      setNotification('Failed to send event. Check console for details.');
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData(prevEventData => ({
      ...prevEventData,
      [name]: value
    }));
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Event Sender</h2>
      <div className="form-group">
        <label htmlFor="eventType">Event Type:</label>
        <input
          type="text"
          className="form-control"
          id="eventType"
          name="eventType"
          value={eventData.eventType}
          onChange={handleInputChange}
          placeholder="Enter event type"
        />
      </div>
      <div className="form-group">
        <label htmlFor="eventData">Event Data:</label>
        <input
          type="text"
          className="form-control"
          id="eventData"
          name="eventData"
          value={eventData.eventData}
          onChange={handleInputChange}
          placeholder="Enter event data"
        />
      </div>
      <button className="btn btn-primary" onClick={sendEvent}>Send Event</button>
      {notification && <p className="text-success mt-2">{notification}</p>}
    </div>
  );
}

export default EventSender;
