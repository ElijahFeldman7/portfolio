import React from 'react';
import SEO from '../components/SEO';
import cv from '../cv-data.json';
import publications from '../publications-data.json';

const MY_NAME = 'Elijah Feldman';

function Section({ title, children }) {
  return (
    <section className="pt-10 mt-10 border-t border-white">
      <h2 className="text-2xl font-bold text-white mb-5">{title}</h2>
      {children}
    </section>
  );
}

function EntryHeading({ left, right, subLeft, subRight }) {
  return (
    <div className="mb-2">
      <div className="flex flex-wrap justify-between items-baseline gap-x-4">
        <h3 className="font-bold text-white">{left}</h3>
        <span className="text-sm text-neutral-400">{right}</span>
      </div>
      {(subLeft || subRight) && (
        <div className="flex flex-wrap justify-between items-baseline gap-x-4 text-sm text-neutral-400 italic">
          <span>{subLeft}</span>
          <span>{subRight}</span>
        </div>
      )}
    </div>
  );
}

function CV() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="CV"
        description="Curriculum vitae of Elijah Feldman - education, experience, projects, awards, and publications."
        path="/cv"
      />
      <main className="max-w-6xl mx-auto w-full text-left px-4 sm:px-6 md:px-8 flex-1 flex flex-col justify-start bg-neutral-900 bg-opacity-70 p-4">
        <div className="mt-8 flex flex-wrap items-start justify-between gap-4">
          <h1 className="text-5xl font-bold">CV</h1>
          <a
            href="/documents/Elijah-Feldman-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-white/30 text-white text-sm px-4 py-1.5 rounded hover:bg-white hover:text-neutral-900 transition-colors duration-300"
          >
            Download PDF
          </a>
        </div>

        <Section title="Education">
          {cv.education.map((edu) => (
            <div key={edu.institution} className="mb-4">
              <EntryHeading
                left={edu.institution}
                right={edu.location}
                subLeft={edu.degree}
                subRight={edu.dates}
              />
              <ul className="list-disc list-inside text-white mt-2 space-y-1">
                {edu.details.map((d) => <li key={d}>{d}</li>)}
              </ul>
            </div>
          ))}
        </Section>

        <Section title="Experience">
          {cv.experience.map((job) => (
            <div key={job.org} className="mb-8 last:mb-0">
              <EntryHeading
                left={job.org}
                right={job.location}
                subLeft={job.role}
                subRight={job.dates}
              />
              <ul className="list-disc list-inside text-white mt-2 space-y-1">
                {job.bullets.map((b) => (
                  <li key={b.label}><strong>{b.label}:</strong> {b.text}</li>
                ))}
              </ul>
            </div>
          ))}
        </Section>

        <Section title="Projects">
          <ul className="list-disc list-inside text-white space-y-2">
            {cv.projects.map((p) => (
              <li key={p.title}>
                <strong>
                  {p.url ? (
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="hover:underline text-[var(--accent)]">{p.title}</a>
                  ) : p.title}
                </strong>: {p.text}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Awards & Honors">
          <ul className="list-disc list-inside text-white space-y-1">
            {cv.awards.map((a) => (
              <li key={a.title}><strong>{a.title}</strong>: {a.text}</li>
            ))}
          </ul>
        </Section>

        <Section title="Technical Skills">
          <ul className="list-disc list-inside text-white space-y-1">
            {cv.skills.map((s) => (
              <li key={s.category}><strong>{s.category}</strong>: {s.items}</li>
            ))}
          </ul>
        </Section>

        <Section title="Publications">
          {publications.map((pub) => (
            <div key={pub.title} className="mb-4 last:mb-0">
              <p className="text-white">
                <strong>{pub.title}</strong>:{' '}
                {pub.authors.map((author, i) => (
                  <React.Fragment key={author}>
                    <span className={author.trim().toLowerCase() === MY_NAME.toLowerCase() ? 'underline' : ''}>{author}</span>
                    {i < pub.authors.length - 1 && ', '}
                  </React.Fragment>
                ))}
                . {pub.venue}.{' '}
                {pub.links.map((link, i) => (
                  <React.Fragment key={link.url}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="hover:underline text-[var(--accent)]">{link.tag}</a>
                    {i < pub.links.length - 1 && ' · '}
                  </React.Fragment>
                ))}
              </p>
            </div>
          ))}
        </Section>
      </main>
    </div>
  );
}

export default CV;
