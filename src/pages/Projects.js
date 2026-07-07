import React from 'react';

function Projects() {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <main className="max-w-6xl mx-auto text-left pt-0 px-4 sm:px-6 md:px-8 flex-1 flex flex-col justify-start bg-neutral-900 bg-opacity-70 p-4">
        <div className="mt-8 flex items-start justify-between">
          <div>
            <h1 className="text-5xl font-bold">Projects</h1>
          </div>
        </div>        
        <div className="mt-8 mb-12">
          <h2 className="font-semibold text-medium mb-2">Table of Contents</h2>
          <ul className=" list-inside text-white space-y-1">
            <li><a href="#bioblitz" className="text-white hover:underline">Bioblitz</a></li>
          </ul>
        </div>
      
        <div className="space-y-12">
          <div id="bioblitz" className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start pt-12 border-t border-white">
            <div>
              <p className="text-sm text-white mb-2">Feb 2025 - Present</p>
              <h3 className="text-xl font-bold text-white mb-3">BioBlitz</h3>
              <p className="text-white leading-relaxed mb-4">
                While studying for biology olympiad, I noticed a lack of centralized problems. There were organization that made money off of
                making their own courses that gatekept problem sets. LLMs also did not make very good problems, creating the need for
                a shared source of quality contests to test people's knowledge. After each topic you learn, this platform has user-made contests,
                and those made by people who perform well (top 50). My favorite part of this project was building the rating system and markov chain
                based reccomendation system.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a href="https://bioblitz.net" target="_blank" rel="noopener noreferrer" className="inline-block border border-white/30 text-white text-sm px-4 py-1.5 rounded hover:bg-white hover:text-neutral-900 transition-colors duration-300">Website</a>
                <a href="https://github.com/bioblitz" target="_blank" rel="noopener noreferrer" className="inline-block border border-white/30 text-white text-sm px-4 py-1.5 rounded hover:bg-white hover:text-neutral-900 transition-colors duration-300">Code</a>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <img src="/images/bioblitzcover.png" alt="Elijah Feldman BioBlitz Project Screenshot" className="w-full border border-neutral-400" />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default Projects;