import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const pathName = location.pathname === '/' ? 'home' : location.pathname.substring(1);
    setCurrentPage(pathName.charAt(0).toUpperCase() + pathName.slice(1));
  }, [location]);

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
    { name: 'Publications', path: '/publications' },
    { name: 'CV', path: '/cv' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Me', path: '/contact' },
    { name: 'Gallery', path: '/gallery'}
  ];

  return (
    <nav className="absolute top-5 left-0 w-full max-w-none px-4 sm:px-6 md:px-10 py-2.5 box-border bg-neutral-900 rounded-b-lg flex justify-between items-center z-[1000] text-white">
      <Link to="/" className="text-lg font-bold text-white no-underline">
        <span className="text-[var(--accent)]">ef</span>/{currentPage}
      </Link>

      <div className="hidden md:flex items-center gap-5">
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

      <button
        onClick={toggleSidebar}
        aria-label={isSidebarOpen ? 'Close menu' : 'Open menu'}
        className="md:hidden relative z-[1001] w-9 h-9 flex items-center justify-center bg-transparent border-none text-white cursor-pointer text-xl leading-none rounded"
      >
        {isSidebarOpen ? '✕' : '☰'}
      </button>

      {isSidebarOpen && (
        <div className="fixed inset-0 bg-neutral-900 z-[999] flex flex-col items-center justify-center gap-6" onClick={() => setIsSidebarOpen(false)}>
          {pages.map((page) => (
            <Link
              key={page.name}
              to={page.path}
              onClick={() => setIsSidebarOpen(false)}
              className={`text-2xl no-underline transition-colors duration-300 ${isActive(page.path) ? 'text-[var(--accent)]' : 'text-white hover:text-[var(--accent)]'}`}
            >
              {page.name}
            </Link>
          ))}
        </div>
      )}

    </nav>
  );
};

export default NavBar;
