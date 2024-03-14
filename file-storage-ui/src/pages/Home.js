import React, { useEffect, useState } from "react";
import axios from "axios";
import './Home.css'; // Import CSS file for additional styling

export default function Home() {
  const [allFiles, setAllFiles] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAllFiles();
  }, []);

  const fetchAllFiles = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/file-storage-service/file');
      setAllFiles(response.data);
      setError(null); // Reset error state if request succeeds
    } catch (error) {
      setError('Failed to fetch files. Please try again later.');
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/file-storage-service/file/delete/${deleteId}`);
      alert('File deleted successfully!');
      fetchAllFiles(); // Refresh the file list after deletion
    } catch (error) {
      console.error('Error deleting file:', error);
      alert('Failed to delete file!');
    }
    setDeleteId(null); // Reset deleteId after deletion
  };

  const handleDeleteConfirmation = (id) => {
    setDeleteId(id);
  };

  return (
    <div className="container">
      <h1 className="animated-header">All Files</h1>

      {error ? (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      ) : (
        <div className="table-responsive"> {/* Add responsiveness to the table */}
          <table className="table table-hover">
            <thead className="table-dark">
              <tr>
                <th scope="col">Sr No.</th> {/* Change column header to "Sr No." */}
                <th scope="col">ID</th>
                <th scope="col">File Name</th>
                <th scope="col">File Type</th>
                <th scope="col">File Size</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {allFiles.map((file, index) => (
                <tr key={file.id} className={index % 2 === 0 ? 'table-primary' : 'table-secondary'}>
                  <td>{index + 1}</td> {/* Display the Sr No. */}
                  <td>{file.id}</td>
                  <td>{file.fileName}</td>
                  <td>{file.fileType}</td>
                  <td>{file.fileSize}</td>
                  <td>
                    <a href={file.fileDownloadURL} target="_blank" rel="noreferrer" className="btn btn-primary">View</a>
                    <button className="btn btn-danger" onClick={() => handleDeleteConfirmation(file.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {deleteId && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Delete ? </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setDeleteId(null)}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                Are you sure you want to delete this file?
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setDeleteId(null)}>Cancel</button>
                <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
