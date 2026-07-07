
import React from 'react';

function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="max-w-5xl text-left pt-0 pl-32 pr-4 flex-1 flex flex-col justify-start bg-neutral-900 bg-opacity-70 p-4">
        <div className="mt-8 px-20 flex items-start justify-between">
          <div>
            <h1 className="text-5xl font-semibold flex text-left">
              <span className="left">Emails</span>
            </h1>
          </div>
        </div>

        <div className="mt-6 px-20">
          <div className="mb-4">
            <a href="mailto:eli@elijahfeldman.me" className=" text-3xl text-white hover:underline hover:text-gray-400">eli <span className="text-gray-500">[@]</span> elijahfeldman.me</a>
            <p className="text-medium text-neutral-300">The main way to reach me! Email forwarding is on.</p>
          </div>
          <div className="mb-4">
            <a href="mailto:2028efeldman@tjhsst.edu" className=" text-3xl text-white hover:underline hover:text-gray-400">2028efeldman <span className="text-gray-500">[@]</span> tjhsst.edu</a>
            <p className="text-medium text-neutral-300">For school related inquiries! Email forwarding is on.</p>
          </div>
          <div className="mb-4">
            <a href="mailto:efeldma5@gmu.edu" className=" text-3xl text-white hover:underline hover:text-gray-400">efeldma5 <span className="text-gray-500">[@]</span> gmu.edu</a>
            <p className="text-medium text-neutral-300">For GMU research related inquiries.</p>
          </div>
          <div className="mb-4">
            <a href="mailto:ef594@rutgers.edu" className=" text-3xl text-white hover:underline hover:text-gray-400">ef594 <span className="text-gray-500">[@]</span> rutgers.edu</a>
            <p className="text-medium text-neutral-300">For Rutgers research related inquiries.</p>
          </div>
          <h1 className="text-6xl font-semibold flex text-left">
              <span className="left">Socials</span>
          </h1>
          <div className="my-4">
            <a href="https://Github.com/ElijahFeldman7" className=" text-4xl text-white hover:underline hover:text-gray-400">elijahfeldman7 <span className="text-gray-500">[@]</span> github</a>
          </div>
          <div className="mb-4">
            <a href="https://www.linkedin.com/elijah-feldman-48798330b" className=" text-4xl text-white hover:underline hover:text-gray-400">elijahfeldman <span className="text-gray-500">[@]</span> linkedin</a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact;
