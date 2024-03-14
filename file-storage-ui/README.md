# File Storage System

File Storage System is a web application built with ReactJS for managing files. It allows users to upload, view, and delete files conveniently.

## Features

- **Upload File:** Users can upload files to the system.
- **View File:** Users can view files stored in the system.
- **Delete File:** Users can delete files from the system.

## Backend Application: spring-boot-file-storage-service

The backend application, named `spring-boot-file-storage-service`, provides the following endpoints:

    Clone the repository:

    ```bash
    git clone https://github.com/siddhantpatni0407/spring-boot-microservices.git
    ```

- **Upload File Endpoint:** POST `/api/v1/file-storage-service/file/upload`
- **Download File Endpoint:** GET `/api/v1/file-storage-service/file/download?id={fileId}`
- **Delete File Endpoint:** DELETE `/api/v1/file-storage-service/file/delete/{fileId}`
- **Get All Files Endpoint:** GET `/api/v1/file-storage-service/file`

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/siddhantpatni0407/react-js.git
    ```

2. Navigate to the project directory:

    ```bash
    cd file-storage-system
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm start
    ```

5. Open your web browser and go to [http://localhost:3000](http://localhost:3000) to view the app.

## Usage

- **Uploading Files:** Click on the "Upload File" button in the navigation bar to upload files.
- **Viewing Files:** Navigate to the "All Files" page to view all uploaded files.
- **Deleting Files:** Click on the "Delete" button next to a file to delete it.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/my-feature`.
3. Make your changes and commit them: `git commit -am 'Add some feature'`.
4. Push to the branch: `git push origin feature/my-feature`.
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [FontAwesome](https://fontawesome.com/)

## Author

Siddhant Patni
