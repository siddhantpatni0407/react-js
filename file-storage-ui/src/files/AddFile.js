import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddFile() {
  let navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError('');
  };

  const uploadFile = async () => {
    if (!file) {
      setError('Please choose a file before uploading.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post('http://localhost:8080/api/v1/file-storage-service/file/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('File uploaded successfully!');
      navigate('/');
    } catch (error) {
      alert('Failed to upload file!');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-primary text-white">File Upload</div>
            <div className="card-body">
              <div className="form-group d-flex justify-content-between align-items-center">
                <label htmlFor="file" className="mr-2">Choose File:</label>
                <input type="file" className="form-control-file" id="file" accept="*/*" onChange={handleFileChange} />
                <button className="btn btn-success ml-2" onClick={uploadFile}>Upload File</button>
              </div>
              {error && <div className="text-danger">{error}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddFile;
