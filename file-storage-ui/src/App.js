import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./about/about";
import Footer from "./footer/footer";
import AddFile from "./files/AddFile";
import GetFileData from "./files/GetFileData";
import GetAllFiles from "./files/GetAllFiles";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addFile" element={<AddFile />} />
          <Route exact path="/getFileData/:id" element={<GetFileData />} />
          <Route exact path="/getAllFiles/:id" element={<GetAllFiles />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;