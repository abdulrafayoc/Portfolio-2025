import { useEffect } from 'react';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import { ReactLenis, useLenis } from 'lenis/react'
import './App.css';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Nav from './components/Nav.jsx';
import Projects from './pages/Projects.jsx';


function App() {

  useEffect(() => {
    // window.scrollTo(0, 0);
  }, []);
  
  const lenis = useLenis(({ scroll }) => {
    
  });

  return (
    <ReactLenis root>

    <BrowserRouter>
    <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
    
    </ReactLenis>
  );
}

export default App;

