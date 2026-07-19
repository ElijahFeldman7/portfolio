
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

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
    <div className="min-h-screen flex flex-col">
      <SEO
        title="About"
        description="About Elijah Feldman, a student researcher at TJHSST working with Rutgers and GMU on AI safety, data mining, and biostatistics."
        path="/about"
      />
      <main className="max-w-6xl mx-auto w-full text-left px-4 sm:px-6 md:px-8 flex-1 flex flex-col justify-start bg-neutral-900 bg-opacity-70 p-4">
        <div className="mt-8 flex items-start justify-between">
          <div>
            <h1 className="text-5xl font-bold mb-2"><Link to="/">Elijah Feldman</Link></h1>
            <div className="text-neutral-200 text-2xl mt-1">
              Researcher @ Rutgers University
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row mt-6 items-start">
          <div className="flex-1">
            <p className="text-white text-lg leading-relaxed">
              Hi! I go by Eli. I'm currently a junior studying at <a href="https://tjhsst.fcps.edu/" className="hover:underline text-[var(--accent)]">TJ</a>, passionate about computer science and the applications of math for solving real world problems.
              My current research interests are in developing safer AI through watermarking algorithms, improving data mining techniques to help investigators in human smuggling cases, and information extraction to identify hallucinations.
              <br />
              <br />
              I'm currently working on a few projects, including <a href="https://bioblitz.net"className="hover:underline italic">BioBlitz</a> which revolutionizes how we study biology, a more robust watermark for diffusion models, and structuring knowledge graphs out of unstructed legal cases at 
              <a href="https://www.gmu.edu/" className="text-[var(--accent)] hover:underline"> George Mason University</a>. This summer I am working at Rutgers ('26) for a cohort study looking at how models fail to inference on external cohorts due to processing differences. I like working with
              compute to solve difficult tasks, and running robust experiments.
            </p> 
          </div>
          <figure className="w-full md:w-80 ml-0 md:ml-4 mt-4 md:mt-0 flex-shrink-0">
            <img src="/images/glacier.jpg" alt="Elijah Feldman" className="fade-in rounded-md" />
            <figcaption className="mt-2 text-center text-white text-sm italic">Glacier National Park, Montana</figcaption>
          </figure>
        </div>
        <div className="flex mt-4">
        </div>
        <div className="flex mt-6">
          <div className="flex-1">
            <p className="text-white text-lg leading-relaxed">
              I'm working at my school as a <a href="https://sysadmins.tjhsst.edu" className="text-[var(--accent)] hover:underline">student systems administrator</a>.
              I help maintain an <a href="https://ion.tjhsst.edu/about" className="text-[var(--accent)] hover:underline">intranet</a> used by over 2000 students, 
              low-tier university level <a href="https://documentation.tjhsst.edu/services/cluster" className="text-[var(--accent)] hover:underline">research cluster</a>, and over 60 workstations. I have spent plenty of time working 
              with Linux systems.
            </p>
          </div>
        </div>
        <div className="flex mt-6">
          <div className="flex-1">
            <p className="text-white text-lg leading-relaxed">
              In my free time, I play <a href="https://chess.com/members/elifeldman7" className="text-[var(--accent)] hover:underline">chess</a>, basketball, and sometimes bike. <Link to="/contact" className="text-[var(--accent)] hover:underline">Reach out</Link> with any opportunities, as I am always open to new projects.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default About;
