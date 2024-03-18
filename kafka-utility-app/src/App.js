import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navigations/Navbar';
import ServerManagement from './components/ServerManagement';
import TopicManagement from './components/TopicManagement';
import MessageSender from './components/MessageSender';
import EventSender from './components/EventSender';
import LogDeleter from './components/LogDeleter';

function LandingPage() {
  return (
    <div className="container">
      <Navbar />
    </div>
  );
}

function App() {
  // Check if it's the landing page (e.g., '/') to determine what to render
  const isLandingPage = window.location.pathname === '/';

  return (
    <Router>
      <div className="App">
        {isLandingPage ? <LandingPage /> : (
          <>
            <h1 className="mt-4 mb-4">Kafka Service Management</h1>
            <Navbar />
            <Routes>
              <Route path="/server" element={<ServerManagement />} />
              <Route path="/topic" element={<TopicManagement />} />
              <Route path="/message" element={<MessageSender />} />
              <Route path="/event" element={<EventSender />} />
              <Route path="/log" element={<LogDeleter />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
