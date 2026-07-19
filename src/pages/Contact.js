
import React from 'react';
import SEO from '../components/SEO';

function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Contact"
        description="Contact Elijah Feldman by email or find him on GitHub and LinkedIn."
        path="/contact"
      />
      <main className="max-w-6xl mx-auto w-full text-left px-4 sm:px-6 md:px-8 flex-1 flex flex-col justify-start bg-neutral-900 bg-opacity-70 p-4">
        <div className="mt-8 flex items-start justify-between">
          <div>
            <h1 className="text-5xl font-bold text-left">Emails</h1>
          </div>
        </div>

        <div className="mt-6">
          <div className="mb-4">
            <a href="mailto:eli@elijahwfeldman.com" className="text-xl sm:text-2xl md:text-3xl text-white hover:underline hover:text-gray-400 break-words">eli <span className="text-gray-500">[@]</span> elijahwfeldman.com</a>
            <p className="text-base text-neutral-300">The main way to reach me! Email forwarding is on.</p>
          </div>
          <div className="mb-4">
            <a href="mailto:2028efeldman@tjhsst.edu" className="text-xl sm:text-2xl md:text-3xl text-white hover:underline hover:text-gray-400 break-words">2028efeldman <span className="text-gray-500">[@]</span> tjhsst.edu</a>
            <p className="text-base text-neutral-300">For school related inquiries! Email forwarding is on.</p>
          </div>
          <div className="mb-4">
            <a href="mailto:efeldma5@gmu.edu" className="text-xl sm:text-2xl md:text-3xl text-white hover:underline hover:text-gray-400 break-words">efeldma5 <span className="text-gray-500">[@]</span> gmu.edu</a>
            <p className="text-base text-neutral-300">For GMU research related inquiries.</p>
          </div>
          <div className="mb-4">
            <a href="mailto:ef594@rutgers.edu" className="text-xl sm:text-2xl md:text-3xl text-white hover:underline hover:text-gray-400 break-words">ef594 <span className="text-gray-500">[@]</span> rutgers.edu</a>
            <p className="text-base text-neutral-300">For Rutgers research related inquiries.</p>
          </div>

          <h1 className="text-5xl font-bold text-left mt-8">Socials</h1>
          <div className="mt-6 mb-4">
            <a href="https://github.com/ElijahFeldman7" target="_blank" rel="noopener noreferrer" className="text-xl sm:text-2xl md:text-3xl text-white hover:underline hover:text-gray-400 break-words">elijahfeldman7 <span className="text-gray-500">[@]</span> github</a>
          </div>
          <div className="mb-4">
            <a href="https://www.linkedin.com/in/elijah-feldman-48798330b" target="_blank" rel="noopener noreferrer" className="text-xl sm:text-2xl md:text-3xl text-white hover:underline hover:text-gray-400 break-words">elijahfeldman <span className="text-gray-500">[@]</span> linkedin</a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact;
