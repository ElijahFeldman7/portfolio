import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchMenu from './SearchMenu';

const NavBar = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const pathName = location.pathname === '/' ? 'home' : location.pathname.substring(1);
    setCurrentPage(pathName.charAt(0).toUpperCase() + pathName.slice(1));
  }, [location]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const pages = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Me', path: '/contact' },
    { name: 'Gallery', path: '/gallery'}
  ];

  return (
    <nav className="absolute top-5 left-0 w-full max-w-none px-10 py-2.5 box-border bg-neutral-900 rounded-b-lg flex justify-between items-center z-[1000] text-white">
      <Link to="/" className="text-lg font-bold text-white no-underline">
        <span className="text-[var(--accent)]">ef</span>/{currentPage}{showCursor && <span className="blinking-cursor">|</span>}
      </Link>

      <div className="flex items-center gap-5">
        <div className="hidden md:flex gap-5">
          {pages.map((page) => (
            <Link
              key={page.name}
              to={page.path}
              className={`no-underline transition-colors duration-300 ${isActive(page.path) ? 'text-[var(--accent)]' : 'text-white hover:text-[var(--accent)]'}`}
            >
              {page.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-[15px]">
          <button onClick={toggleSearch} className="bg-transparent border-none text-white hover:text-[var(--accent)] cursor-pointer text-lg">
            ⌘
          </button>

          <button
            onClick={toggleSidebar}
            className="md:hidden bg-transparent border-none text-white cursor-pointer text-lg rounded px-2.5 py-1"
          >
            {isSidebarOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {isSidebarOpen && (
        <div className="fixed inset-0 bg-neutral-900 z-[999] flex flex-col items-center justify-center gap-6" onClick={() => setIsSidebarOpen(false)}>
          <button onClick={toggleSidebar} className="absolute top-6 right-6 bg-transparent border-none text-white cursor-pointer text-2xl">
            ✕
          </button>
          {pages.map((page) => (
            <Link
              key={page.name}
              to={page.path}
              onClick={() => { setIsSidebarOpen(false); setIsSearchOpen(false); }}
              className={`text-2xl no-underline transition-colors duration-300 ${isActive(page.path) ? 'text-[var(--accent)]' : 'text-white hover:text-[var(--accent)]'}`}
            >
              {page.name}
            </Link>
          ))}
        </div>
      )}

      <SearchMenu isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} />
    </nav>
  );
};

export default NavBar;
