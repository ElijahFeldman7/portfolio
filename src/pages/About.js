
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function About() {
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const toRotate = [" researcher.", " learner.", " developer."];

    const handleTyping = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];

      setTypedText(
        isDeleting
          ? fullText.substring(0, typedText.length - 1)
          : fullText.substring(0, typedText.length + 1)
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && typedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimer);
  }, [typedText, isDeleting, loopNum, typingSpeed]);

  useEffect(() => {
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, appearOptions);
    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center">
      <main className="max-w-6xl mx-auto text-left pt-0 px-4 flex-1 flex flex-col justify-start bg-neutral-900 bg-opacity-70 p-4">
        <div className="mt-8 flex items-start justify-between">
          <div>
            <h1 className="text-6xl font-bold"><Link to="/">Elijah Feldman</Link><span className="text-[var(--accent)]">.</span></h1>
            <div className="text-white text-lg mt-1">
              <span className="semi-bold text-4xl">I'm a<span className="text-[var(--accent)]">{typedText}</span></span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row mt-6 items-start">
          <div className="flex-1">
            <p className="text-white semi-bold text-xl leading-relaxed">
              Hi! I go by Eli. I'm currently a sophomore studying at <a href="https://tjhsst.fcps.edu/" className="hover:underline text-[var(--accent)]">TJ</a>, passionate about computer science, and focus on <span className="italic">algorithms, computation, and information</span>.
              I want to work on <span className="italic">solving problems</span>, especially those that enhance human understanding and productivity.
              Most recently, that's meant exploring applications of large language models and changing the way how we study Biology.
              <br />
              <br />
              I'm currently working on a few projects, including <a href="https://bioblitz.net"className="hover:underline italic">BioBlitz</a>, a platform for competitive Biology practice, Inertia Adaptive AdamW, 
              an optimizer for transformers, and structuring knowledge graphs out of unstructed legal cases at 
              <a href="https://www.gmu.edu/" className="text-[var(--accent)] hover:underline"> George Mason University</a>.
            </p>
          </div>
          <figure className="w-full md:w-80 ml-0 md:ml-4 mt-4 md:mt-0 flex-shrink-0">
            <img src="/glacier.jpg" alt="Elijah Feldman" className="fade-in rounded-md" />
            <figcaption className="mt-2 text-center text-white text-sm italic">Glacier National Park, Montana</figcaption>
          </figure>
        </div>
        <div className="flex mt-4">
        </div>
        <div className="flex mt-6">
          <div className="flex-1">
            <p className="text-white semi-bold text-xl leading-relaxed">
              I'm working at my school as a <a href="https://sysadmins.tjhsst.edu" className="text-[var(--accent)] hover:underline">student systems administrator</a>.
              I help maintain an <a href="https://ion.tjhsst.edu/about" className="text-[var(--accent)] hover:underline">intranet</a> used by over 2000 students, 
              low-tier university level <a href="https://documentation.tjhsst.edu/services/cluster" className="text-[var(--accent)] hover:underline">research cluster</a>, and over 60 workstations. I have spent plenty of time working 
              with Linux systems, and daily drive Arch Linux.
            </p>
          </div>
        </div>
        <div className="flex mt-6">
          <div className="flex-1">
            <p className="text-white semi-bold text-xl leading-relaxed">
              In my free time, I play <a href="https://chess.com/members/elifeldman7" className="text-[var(--accent)] hover:underline">chess</a>, play basketball with my friends, and bike. <Link to="/contact" className="text-[var(--accent)] hover:underline">Reach out.</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default About;
