import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';

import avatar from './assets/avatar.png';
import { Contact } from './Contact';
import { education, experiences, profile, projects, skills } from './data';

const nav = ['about', 'experience', 'projects', 'skills', 'contact'];

// Every section fades up once as it scrolls into view.
const Section = ({ id, title, children }: { id: string; title: string; children: ReactNode }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    className="scroll-mt-24 py-12"
  >
    <h2 className="mb-6 font-serif text-3xl italic text-neutral-200">{title}</h2>
    {children}
  </motion.section>
);

const Tag = ({ children }: { children: ReactNode }) => (
  <span className="rounded-md border border-neutral-800 bg-neutral-900 px-2 py-0.5 font-mono text-xs text-neutral-400">
    {children}
  </span>
);

const link =
  'text-neutral-400 underline-offset-4 transition hover:text-neutral-100 hover:underline';

const App = () => (
  <>
    <header className="sticky top-0 z-10 border-b border-neutral-900 bg-neutral-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4 text-sm">
        <a href="#top" className="font-serif text-xl">
          {profile.name.split(' ')[0]}
          <span className="text-neutral-500">.</span>
        </a>
        <div className="flex gap-5">
          {nav.map(id => (
            <a key={id} href={`#${id}`} className={`${link} hidden capitalize sm:inline`}>
              {id}
            </a>
          ))}
          <a href="#contact" className={`${link} sm:hidden`}>
            Contact
          </a>
        </div>
      </nav>
    </header>

    <main id="top" className="mx-auto max-w-3xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pb-8 pt-20 sm:pt-28"
      >
        <img src={avatar} alt={`${profile.name} avatar`} className="mb-8 h-28 w-28" />
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-neutral-500">
          {profile.role} · {profile.location}
        </p>
        <h1 className="font-serif text-5xl leading-tight sm:text-6xl">
          Hi, I'm {profile.name}.
          <br />
          <span className="italic text-neutral-400">I build intelligent systems, end to end.</span>
        </h1>
        <div className="mt-8 flex flex-wrap gap-5 text-sm">
          <a href={profile.github} target="_blank" rel="noreferrer" className={link}>
            GitHub ↗
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className={link}>
            LinkedIn ↗
          </a>
          <a href={`mailto:${profile.email}`} className={link}>
            Email ↗
          </a>
        </div>
      </motion.div>

      <Section id="about" title="About">
        <ul className="space-y-2 text-neutral-300">
          {profile.about.map(line => (
            <li key={line} className="flex gap-3">
              <span className="text-neutral-600">—</span>
              {line}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="experience" title="Experience">
        <div className="space-y-8">
          {experiences.map(exp => (
            <article key={exp.title} className="border-l border-neutral-800 pl-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-medium">{exp.title}</h3>
                <span className="font-mono text-xs text-neutral-500">{exp.date}</span>
              </div>
              <p className="text-sm text-neutral-500">{exp.company}</p>
              <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-neutral-400">
                {exp.points.map(p => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section id="education" title="Education">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-medium">{education.degree}</h3>
          <span className="font-mono text-xs text-neutral-500">{education.date}</span>
        </div>
        <p className="text-sm text-neutral-500">{education.school}</p>
        <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-neutral-400">
          {education.highlights.map(h => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </Section>

      <Section id="projects" title="Projects">
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map(p => (
            <article
              key={p.name}
              className="group overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 transition hover:border-neutral-600"
            >
              <div className="aspect-video overflow-hidden bg-neutral-900">
                <img
                  src={p.image}
                  alt={`${p.name} screenshot`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-3 p-5">
                <div>
                  <h3 className="font-medium">{p.name}</h3>
                  <p className="text-sm text-neutral-500">{p.tagline}</p>
                </div>
                <p className="text-sm text-neutral-400">{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map(t => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
                <div className="flex gap-4 pt-1 text-sm">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className={link}>
                      Live ↗
                    </a>
                  )}
                  <a href={p.source} target="_blank" rel="noreferrer" className={link}>
                    Code ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <dl className="space-y-4">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="grid gap-2 sm:grid-cols-[8rem_1fr]">
              <dt className="font-mono text-xs uppercase tracking-widest text-neutral-500 sm:pt-1">
                {group}
              </dt>
              <dd className="flex flex-wrap gap-1.5">
                {items.map(s => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="github" title="GitHub activity">
        <div className="overflow-x-auto text-neutral-400">
          <GitHubCalendar
            username={profile.githubUser}
            colorScheme="dark"
            fontSize={12}
            blockSize={10}
            blockMargin={3}
          />
        </div>
      </Section>

      <Section id="contact" title="Let's talk">
        <p className="mb-6 text-neutral-400">
          Open to internships, freelance work and interesting collaborations.
        </p>
        <Contact />
      </Section>
    </main>

    <footer className="mx-auto max-w-3xl border-t border-neutral-900 px-6 py-8 text-sm text-neutral-600">
      © {new Date().getFullYear()} {profile.name}
    </footer>
  </>
);

export default App;
