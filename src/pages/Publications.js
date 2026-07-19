import React from 'react';
import SEO from '../components/SEO';
import publications from '../publications-data.json';

const MY_NAME = 'Elijah Feldman';

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function AuthorList({ authors }) {
  return (
    <p className="text-white mb-1">
      {authors.map((author, index) => (
        <React.Fragment key={author}>
          <span className={author.trim().toLowerCase() === MY_NAME.toLowerCase() ? 'underline' : ''}>
            {author}
          </span>
          {index < authors.length - 1 && ', '}
        </React.Fragment>
      ))}
    </p>
  );
}

function Publications() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Publications"
        description="Research publications by Elijah Feldman."
        path="/publications"
      />
      <main className="max-w-6xl mx-auto w-full text-left px-4 sm:px-6 md:px-8 flex-1 flex flex-col justify-start bg-neutral-900 bg-opacity-70 p-4">
        <div className="mt-8 flex items-start justify-between">
          <div>
            <h1 className="text-5xl font-bold">Publications</h1>
          </div>
        </div>

        <div className="mt-8 space-y-12">
          {publications.map((pub) => (
            <div
              key={pub.title}
              id={slugify(pub.title)}
              className="pt-12 border-t border-white"
            >
              <h3 className="text-xl font-bold text-white mb-3">{pub.title}</h3>
              <AuthorList authors={pub.authors} />
              <p className="text-sm text-neutral-400 mb-4">{pub.venue} </p>
              <div className="flex flex-wrap items-center gap-3">
                {pub.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border border-white/30 text-white text-sm px-4 py-1.5 rounded hover:bg-white hover:text-neutral-900 transition-colors duration-300"
                  >
                    {link.tag}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Publications;
