import React, { useState } from 'react';
import axios from 'axios';

function GetFileData() {
  const [id, setId] = useState('');
  const [fileUrl, setFileUrl] = useState('');

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const fetchFile = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/file-storage-service/file/download?id=${id}`, {
        responseType: 'arraybuffer'
      });
      const blob = new Blob([response.data], { type: 'image/png' });
      setFileUrl(URL.createObjectURL(blob));
    } catch (error) {
      alert('Failed to fetch file!');
    }
  };

  return (
    <div>
      <h1>Get File Data</h1>
      <input type="text" value={id} onChange={handleIdChange} placeholder="Enter ID" />
      <button onClick={fetchFile}>Fetch File</button>

      {fileUrl && (
        <div>
          <h2>File</h2>
          <img src={fileUrl} alt="Fetched File" />
        </div>
      )}
    </div>
  );
}

export default GetFileData;
