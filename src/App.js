import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Publications from './pages/Publications';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import CreatePost from './pages/CreatePost';
import Gallery from './pages/Gallery';
import ProgressBar from './components/ProgressBar';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <div className={isHomePage ? '' : 'bg-neutral-900'}>
      <ProgressBar />
      <NavBar />
      <div className="relative w-full box-border" style={{ paddingTop: '70px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:uid" element={<BlogPost />} />
          <Route path="/create-post-hidden" element={<CreatePost />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;