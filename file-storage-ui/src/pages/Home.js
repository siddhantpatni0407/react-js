import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [allFiles, setAllFiles] = useState([]);

  useEffect(() => {
    fetchAllFiles();
  }, []);

  const fetchAllFiles = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/file-storage-service/file');
      setAllFiles(response.data);
    } catch (error) {
      alert('Failed to fetch files!');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/file-storage-service/file/delete/${id}`);
      alert('File deleted successfully!');
      fetchAllFiles(); // Refresh the file list after deletion
    } catch (error) {
      console.error('Error deleting file:', error);
      alert('Failed to delete file!');
    }
  };

  return (
    <div className="container">
      <h1 className="mt-5 mb-3">All Files</h1>
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">File Name</th>
            <th scope="col">File Type</th>
            <th scope="col">File Size</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {allFiles.map((file) => (
            <tr key={file.id}>
              <td>{file.id}</td>
              <td>{file.fileName}</td>
              <td>{file.fileType}</td>
              <td>{file.fileSize}</td>
              <td>
                <a href={file.fileDownloadURL} target="_blank" rel="noreferrer" className="btn btn-primary">View</a>
                <button className="btn btn-danger" onClick={() => handleDelete(file.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
