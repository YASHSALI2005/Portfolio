import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';

import { Contact } from './Contact';
import { education, experiences, profile, projects, skills } from './data';
import { Hero } from './Hero';
import { Nav } from './Nav';

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
    <h2 className="mb-6 font-display text-2xl font-bold tracking-tight text-neutral-100">
      {title}
    </h2>
    {children}
  </motion.section>
);

const Tag = ({ children }: { children: ReactNode }) => (
  <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-xs text-neutral-400">
    {children}
  </span>
);

const link =
  'text-neutral-400 underline-offset-4 transition hover:text-neutral-100 hover:underline';

const App = () => (
  <>
    {/* Soft night-sky glows fixed behind the page; the glass panels blur these. */}
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[130px]" />
      <div className="absolute right-[-10%] top-1/3 h-[420px] w-[420px] rounded-full bg-blue-600/15 blur-[130px]" />
      <div className="absolute bottom-[-10%] left-[-10%] h-[420px] w-[420px] rounded-full bg-fuchsia-600/10 blur-[130px]" />
    </div>

    <Nav />

    <main id="top" className="mx-auto max-w-3xl px-6">
      <Hero />

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
        <div className="space-y-6">
          {experiences.map(exp => (
            <article key={exp.title} className="flex gap-4">
              {/* Company logo, or its first letter when no logo is set in data.ts. */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 font-display font-bold text-neutral-300 backdrop-blur">
                {exp.logo ? (
                  <img src={exp.logo} alt={`${exp.company} logo`} className="h-6 w-6" />
                ) : (
                  exp.company[0]
                )}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-x-3">
                  <h3 className="flex items-center gap-2 font-medium">
                    {exp.company}
                    {exp.date.endsWith('Present') && (
                      <span className="flex items-center gap-1.5 rounded-full border border-emerald-900 bg-emerald-950 px-2 py-0.5 text-xs text-emerald-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        Working
                      </span>
                    )}
                  </h3>
                  <span className="font-mono text-xs text-neutral-500">{exp.date}</span>
                </div>
                <p className="text-sm text-neutral-400">{exp.title}</p>
                <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-neutral-500">
                  {exp.points.map(p => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
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
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
            >
              <div className="relative aspect-video overflow-hidden bg-neutral-900">
                <img
                  src={p.image}
                  alt={`${p.name} screenshot`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
                {/* Themed label per project — text comes from `badge` in data.ts. */}
                <span className="absolute bottom-3 left-3 rounded-md border border-white/10 bg-black/70 px-2 py-1 font-mono text-xs text-neutral-100 backdrop-blur">
                  {p.badge}
                </span>
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
