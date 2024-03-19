import React, { useState, useEffect } from "react";
import axios from "axios";

function TopicManagement() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newTopicName, setNewTopicName] = useState("");
  const [partition, setPartition] = useState("");
  const [topicToDelete, setTopicToDelete] = useState("");
  const [createNotification, setCreateNotification] = useState("");
  const [deleteNotification, setDeleteNotification] = useState("");
  const [showTopics, setShowTopics] = useState(false); // State to track if topics should be shown

  useEffect(() => {
    getAllTopics();
  }, []);

  const createTopic = () => {
    let url = `http://localhost:8081/api/v1/kafka-service/kafka/topic?topicName=${newTopicName}`;
    if (partition !== "") {
      url += `&partition=${partition}`;
    }
    axios
      .post(url)
      .then((response) => {
        console.log("Topic created successfully");
        setCreateNotification("Topic created successfully");
        getAllTopics(); // Fetch topics after creating a new topic
      })
      .catch((error) => {
        console.error("Error creating topic:", error);
        setCreateNotification("Failed to create topic");
      });
  };

  const getAllTopics = () => {
    setLoading(true);
    axios
      .get("http://localhost:8081/api/v1/kafka-service/kafka/topic")
      .then((response) => {
        console.log("All topics:", response.data);
        setTopics(response.data);
        setTopicToDelete(""); // Reset topicToDelete state
        setShowTopics(true); // Set showTopics to true after fetching topics
      })
      .catch((error) => {
        console.error("Error getting all topics:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const deleteTopic = () => {
    axios
      .delete(
        `http://localhost:8081/api/v1/kafka-service/kafka/topic?topicName=${topicToDelete}`
      )
      .then((response) => {
        console.log("Topic deleted successfully");
        setDeleteNotification("Topic deleted successfully");
        getAllTopics(); // Fetch topics after deleting a topic
      })
      .catch((error) => {
        console.error("Error deleting topic:", error);
        setDeleteNotification("Failed to delete topic");
      });
  };

  return (
    <div className="container mt-4">
      <h2>Topic Management</h2>

      <div className="mb-3">
        <input
          type="text"
          value={newTopicName}
          onChange={(e) => setNewTopicName(e.target.value)}
          className="form-control mr-2"
          placeholder="Enter topic name"
        />
        <input
          type="text"
          value={partition}
          onChange={(e) => setPartition(e.target.value)}
          className="form-control mr-2"
          placeholder="Enter partition (optional)"
        />
        <button onClick={createTopic} className="btn btn-primary">
          Create Topic
        </button>
        {createNotification && (
          <p className="text-success">{createNotification}</p>
        )}
      </div>

      <div className="mb-3">
        <select
          className="form-control mr-2"
          value={topicToDelete}
          onChange={(e) => setTopicToDelete(e.target.value)}
        >
          <option value="">Select topic to delete</option>
          {topics.map((topic, index) => (
            <option key={index} value={topic}>
              {topic}
            </option>
          ))}
        </select>
        <button onClick={deleteTopic} className="btn btn-danger">
          Delete Topic
        </button>
        {deleteNotification && (
          <p className="text-success">{deleteNotification}</p>
        )}
      </div>

      <button onClick={getAllTopics} className="btn btn-primary">
        Get All Topics
      </button>

      {showTopics && (
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <table className="table mt-3">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Sr No.</th>
                  <th scope="col">Topic Name</th>
                </tr>
              </thead>
              <tbody>
                {topics.map((topic, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{topic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
}

export default TopicManagement;
