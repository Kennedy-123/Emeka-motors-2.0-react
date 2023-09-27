import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Component/NavBar';
import Home from './Component/Home';
import About from './Component/About';
import Car from './Component/Car';
import Contact from './Component/Contact';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Cars" element={<Car />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
