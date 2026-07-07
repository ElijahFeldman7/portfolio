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
              Research Intern @ <a href="https://rutgers.edu" className="hover:underline text-[var(--accent)]">Rutgers University</a>
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
          <div>
            <p className="text-neutral-200 leading-relaxed">
              Hi! I go by Eli. I am a student at <a href="https://tjhsst.fcps.edu" className="hover:underline text-[var(--accent)]">Thomas Jefferson High School</a>, and I like working on computer science research.
              I'm most interested in data mining, AI safety, and biostatistics.
            <br/>
            <br/>
              I spent the last year working at <a href="https://gmu.edu" className="hover:underline text-[var(--accent)]">GMU</a>, structuring court documents into knowledge graphs (<a href="https://arxiv.org/abs/2606.19710" className="hover:underline text-[var(--accent)]">paper</a>  <span> </span>
                 under submission ICKG '26). I just started work this summer ('26) at <a href="https://rutgers.edu" className="hover:underline text-[var(--accent)]">Rutgers</a>, experimenting on external validation during statistical and ML modelling.
              Independently, I am looking at advancing watermarking methods for LLMs.
            <br />
            <br />
              I also like to build software, including several <Link to="/projects" className="hover:underline text-[var(--accent)]">projects</Link>. I am currently building at <a href="https://bioblitz.net" className="hover:underline text-[var(--accent)]">BioBlitz</a>, a platform making competitive biology questions easily accessible. 
              I volunteer at <a href="https://arbccompetition.org" className="hover:underline text-[var(--accent)]">ARBC</a> where I previously built testing softwar for biology competitions.
            <br />
            <br />
              At my school, I volunteer as a student <a href="https://sysadmins.tjhsst.edu" className="hover:underline text-[var(--accent)]">sysadmin</a>, where we manage a cluster and linux servers.
            </p>

          </div>
        </div>

      </main>
    </div>
    </>
  );
}

export default Home;