import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchMenu = ({ isOpen, setIsOpen }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const pages = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Me', path: '/contact' },
    { name: 'Gallery', path: '/gallery' }

  ];

  const filteredPages = pages.filter((page) =>
    page.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-[1999]"
        onClick={() => setIsOpen(false)} 
      ></div>
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/90 p-8 rounded-xl z-[2000] w-[90%] max-w-[600px] shadow-2xl"
      >
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-4 pl-12 pr-4 mb-4 rounded-lg border-none text-lg bg-[#333] text-white"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="absolute left-4 text-gray-400 w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      <ul>
        {filteredPages.map((page) => (
          <li key={page.name}>
            <Link
              to={page.path}
              className="text-white hover:underline"
              onClick={() => setIsOpen(false)}
            >
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
  
};

export default SearchMenu;
