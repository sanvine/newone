import './App.css';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Nav from './Pages/Nav';
import Chat from './Subpages/Chat'
import Footer from './Pages/Footer';
import About from './Pages/About';
import Courses from './Pages/Courses';
import Contact from './Pages/Contact';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <Router>
      <ToastContainer position='top-center'/>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Chat />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
