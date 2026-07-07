import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center relative z-10">
      <main className="max-w-xl mx-auto text-left flex-1 flex flex-col justify-start p-4 bg-neutral-900 bg-opacity-70">
        <div className="mt-8 flex items-center justify-between">
          <div>
            <h1 className="text-5xl text-neutral-100 mb-2"><Link to="/"><span className="font-semibold">Elijah</span> Feldman</Link></h1>
            <div className="text-neutral-300 text-lg mt-1">
              Research Intern @ <Link to="https://rutgers.edu" className="hover:underline text-[var(--accent)]">Rutgers University</Link>
             </div>
          </div>
          <div className="ml-8">
            <div className="ml-8 w-44 h-33 rounded overflow-hidden">
            <img src="/gallery/IMG_0640.jpg" alt="Elijah Feldman" className="w-full h-full object-cover" style={{ objectPosition: '10% 50%' }} />
          </div>
          </div>
        </div>

        <hr className="my-8 border-gray-500" />

        <div className="flex">
          <div className="flex flex-col pr-16">
            <Link to="/about" className="text-neutral-300 hover:underline hover:text-[var(--accent)] text-sm mb-4">ABOUT</Link>
            <Link to="/projects" className="text-neutral-300 hover:underline hover:text-[var(--accent)] text-sm mb-4">PROJECTS</Link>
            <Link to="/contact" className="text-neutral-300 hover:underline hover:text-[var(--accent)] text-sm mb-4">CONTACT</Link>
            <Link to="/blog" className="text-neutral-300 hover:underline hover:text-[var(--accent)] text-sm mb-4">BLOG</Link>
            <Link to="/gallery" className="text-neutral-300 hover:underline hover:text-[var(--accent)] text-sm mb-4">GALLERY</Link>
          </div>

          <div>
            <p className="text-neutral-200 leading-relaxed">
              Hi! I go by Eli. I am a student at <Link to="https://tjhsst.fcps.edu" className="hover:underline text-[var(--accent)]">Thomas Jefferson High School</Link>, and I like working on computer science research.
              I'm most interested in data mining, AI safety, and biostatistics.
            <br/>
            <br/>
              I spent the last year working at <a href="https://gmu.edu" className="hover:underline text-[var(--accent)]">GMU</a>, structuring court documents into knowledge graphs (<Link to="https://arxiv.org/abs/2606.19710" className="hover:underline text-[var(--accent)]">paper
              </Link> under submission ICKG '26). I just started work this summer ('26) at <Link to="https://rutgers.edu" className="hover:underine text-[var(--accent)]">Rutgers</Link>, experimenting on external validation during statistical and ML modelling.
              Independently, I am looking at advancing watermarking methods for LLMs.
            <br />
            <br />
              I also like to build software, including several <Link to="/projects" className="hover:underline text-[var(--accent)]">projects</Link>. I am currently building at <Link to="https://bioblitz.net" className="hover:underline text-[var(--accent)]">BioBlitz</Link>, a platform making competitive biology questions easily accessible. 
              I volunteer at <Link to="https://arbccompetition.org" className="hover:underline text-[var(--accent)]">ARBC</Link> where I previously built testing softwar for biology competitions.
            <br />
            <br />
              At my school, I volunteer as a student <Link to="https://sysadmins.tjhsst.edu" className="hover:underline text-[var(--accent)]">sysadmin</Link>, where we manage a cluster and linux servers.
            </p>

          </div>
        </div>

      </main>
    </div>
    </>
  );
}

export default Home;