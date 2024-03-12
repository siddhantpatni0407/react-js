import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetAllFiles() {
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

  const fetchFileById = async (id) => {
    try {
      // Lookup the fileName based on the id from a mapping or lookup table
      const file = allFiles.find(file => file.id === id);
      if (!file) {
        alert('File not found!');
        return;
      }
  
      // Use the fileName to construct the download URL
      const response = await axios.get(`http://localhost:8080/api/v1/file-storage-service/file/download?id=${file.id}`, {
        responseType: 'arraybuffer'
      });
      const blob = new Blob([response.data], { type: 'image/png' });
      const fileUrl = URL.createObjectURL(blob);
      window.open(fileUrl, '_blank');
    } catch (error) {
      alert('Failed to fetch file!');
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
                <button className="btn btn-primary" onClick={() => fetchFileById(file.id)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GetAllFiles;
