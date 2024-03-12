import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function AddFile() {
  let navigate = useNavigate();
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post('http://localhost:8080/api/v1/file-storage-service/file/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('File uploaded successfully!');
    } catch (error) {
      alert('Failed to upload file!');
    }
    navigate("/");
  };

  return (
    <div>
      <h1>File Upload</h1>
      <input type="file" accept="*/*" onChange={handleFileChange} />
      <button onClick={uploadFile}>Upload File</button>
    </div>
  );
}

export default AddFile;
