import React from 'react';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <main className="max-w-6xl mx-auto text-left pt-0 px-4 sm:px-6 md:px-8 flex-1 flex flex-col justify-start bg-neutral-900 bg-opacity-70 p-4">
        <div className="mt-8 flex items-start justify-between">
          <div>
            <h1 className="text-5xl font-bold flex items-center flex-wrap">
              <span>Projects </span><span className="text-5xl text-[var(--accent)]">.</span>
            </h1>
          </div>
        </div>        
        <div className="mt-8 mb-12">
          <h2 className="font-semibold text-medium mb-2">Table of Contents</h2>
          <ul className=" list-inside text-white space-y-1">
            <li><a href="#bioblitz" className="text-white hover:underline">Bioblitz</a></li>
          </ul>
        </div>
      
        <div className="space-y-12">
          <div id="bioblitz" className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 items-start pt-12 border-t border-white">
            <div className="col-span-1 md:col-span-2">
              <p className="text-sm text-white mb-2">Feb 2025 - Present</p>
              <h3 className="text-xl font-bold text-white mb-3">BioBlitz</h3>
              <p className="text-white leading-relaxed mb-4">
                What started out as a hackathon project at HackTJ became something I continued. In hindsight, this project was much too large in scale for the hackathon. I'm working with a couple of friends on this currently. Hoping for launch around August 2026. We partenered with <Link to="https://Mitosisphere.org">Mitosisphere</Link>, a group of people that make quality biology questions.
              </p>
              <div className="flex flex-wrap items-center gap-1 mb-4 text-sm">
                <span className="font-semibold">Links:</span>
                <a href="https://github.com/bioblitz" target="_blank" rel="noopener noreferrer" className="underline font-semibold text-white hover:text-white">Github</a><span>,</span>
                <a href="https://bioblitz.net" target="_blank" rel="noopener noreferrer" className="underline font-semibold text-white hover:text-white">Email list</a>
              </div>
            </div>
            <div className="md:col-span-1 mt-4 md:mt-0 w-full sm:w-11/12 mx-auto md:w-auto md:mx-0">
              <img src="/bioblitz.png" alt="Elijah Feldman BioBlitz Project Screenshot" className="rounded-sm shadow-md hover:shadow-xl transition-shadow duration-300" width="200" height="200" />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default Projects;