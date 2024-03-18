import React, { useState } from "react";
import axios from "axios";

function TopicManagement() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newTopicName, setNewTopicName] = useState("");
  const [partition, setPartition] = useState(""); // State for partition input
  const [topicToDelete, setTopicToDelete] = useState(""); // State for topic deletion input

  const createTopic = () => {
    let url = `http://localhost:8081/api/v1/kafka-service/kafka/topic?topicName=${newTopicName}`;
    if (partition !== "") {
      url += `&partition=${partition}`;
    }
    axios
      .post(url)
      .then((response) => {
        console.log("Topic created successfully");
        // Handle success if needed
      })
      .catch((error) => {
        console.error("Error creating topic:", error);
        // Handle error if needed
      });
  };

  const getAllTopics = () => {
    setLoading(true);
    axios
      .get("http://localhost:8081/api/v1/kafka-service/kafka/topic")
      .then((response) => {
        console.log("All topics:", response.data);
        setTopics(response.data);
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
        // Handle success if needed
      })
      .catch((error) => {
        console.error("Error deleting topic:", error);
        // Handle error if needed
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
      </div>

      <div className="mb-3">
        <input
          type="text"
          value={topicToDelete}
          onChange={(e) => setTopicToDelete(e.target.value)}
          className="form-control mr-2"
          placeholder="Enter topic name to delete"
        />
        <button onClick={deleteTopic} className="btn btn-danger">
          Delete Topic
        </button>
      </div>

      <button onClick={getAllTopics} className="btn btn-primary">
        Get All Topics
      </button>

      {loading && <p>Loading...</p>}

      <ul className="list-group mt-3">
        {topics.map((topic, index) => (
          <li key={index} className="list-group-item">
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopicManagement;
