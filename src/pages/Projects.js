import React from 'react';
import SEO from '../components/SEO';
import projects from '../projects-data.json';

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function Projects() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Projects"
        description="Software projects built by Elijah Feldman, including BioBlitz, a platform for competitive biology practice."
        path="/projects"
      />
      <main className="max-w-6xl mx-auto w-full text-left px-4 sm:px-6 md:px-8 flex-1 flex flex-col justify-start bg-neutral-900 bg-opacity-70 p-4">
        <div className="mt-8 flex items-start justify-between">
          <div>
            <h1 className="text-5xl font-bold">Projects</h1>
          </div>
        </div>
        <div className="mt-8 mb-12">
          <h2 className="font-semibold text-lg mb-2">Table of Contents</h2>
          <ul className="list-inside text-white space-y-1">
            {projects.map((project) => (
              <li key={project.title}>
                <a href={`#${slugify(project.title)}`} className="text-white hover:underline">
                  {project.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-12">
          {projects.map((project) => (
            <div
              key={project.title}
              id={slugify(project.title)}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start pt-12 border-t border-white"
            >
              <div>
                <p className="text-sm text-white mb-2">{project.date}</p>
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-white leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap items-center gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block border border-white/30 text-white text-sm px-4 py-1.5 rounded hover:bg-white hover:text-neutral-900 transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <img
                  src={project.image}
                  alt={`Elijah Feldman ${project.title} project screenshot`}
                  className="w-full border border-neutral-400"
                />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Projects;