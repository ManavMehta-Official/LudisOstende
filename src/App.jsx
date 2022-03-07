import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import {BsInfoCircleFill} from 'react-icons/bs'
//? COMPONENTS
import Navbar from './components/navbar/navbar';
//? PAGES
import Home from './pages/home/home';

function App() {
  return (
    <Router>
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong><BsInfoCircleFill /> &nbsp; This website is just an HTML design template. No link works and wouldn't lead you anywhere!</strong>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
        <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
