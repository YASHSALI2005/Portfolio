import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';

import ClickSpark from './bits/ClickSpark';
import ShinyText from './bits/ShinyText';
import SpotlightCard from './bits/SpotlightCard';
import { Contact } from './Contact';
import { education, experiences, profile, projects, skills } from './data';
import { Hero } from './Hero';
import { icons } from './icons';
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

const App = () => {
  const reduceMotion = useReducedMotion();
  return (
    <ClickSpark sparkColor="#c4b5fd" sparkSize={10} sparkRadius={20} sparkCount={8} duration={450}>
      {/* Soft night-sky glows fixed behind the page; the glass panels blur these. */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[130px]" />
        <div className="absolute right-[-10%] top-1/3 h-[420px] w-[420px] rounded-full bg-blue-600/15 blur-[130px]" />
        <div className="absolute bottom-[-10%] left-[-10%] h-[420px] w-[420px] rounded-full bg-fuchsia-600/10 blur-[130px]" />
      </div>

      <Nav />

      <main id="top" className="mx-auto max-w-3xl px-6">
        <Hero />

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
                          <ShinyText
                            text="Working"
                            disabled={!!reduceMotion}
                            color="#34d399"
                            shineColor="#ecfdf5"
                            speed={2.5}
                            delay={1.5}
                          />
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

        <Section id="projects" title="Projects">
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map(p => (
              <SpotlightCard
                key={p.name}
                spotlightColor="rgba(167, 139, 250, 0.35)"
                className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-md transition hover:border-white/20 hover:bg-white/[0.05]"
              >
                {/* Screenshot set into a gradient like a device mockup; the whole image opens the site. */}
                <motion.a
                  href={p.live ?? p.source}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${p.name}`}
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className={`relative block aspect-[16/10] overflow-hidden rounded-xl bg-gradient-to-br ${p.accent}`}
                >
                  <span className="absolute left-3 top-3 z-10 rounded-md border border-white/20 bg-black/60 px-2 py-1 font-mono text-[11px] text-neutral-100 backdrop-blur">
                    {p.badge}
                  </span>
                  <img
                    src={p.image}
                    alt={`${p.name} screenshot`}
                    loading="lazy"
                    className="absolute left-[9%] top-[17%] w-[96%] rounded-tl-lg shadow-2xl shadow-black/50 ring-1 ring-black/20 transition duration-500 ease-out group-hover:-translate-x-2 group-hover:-translate-y-2"
                  />
                </motion.a>

                <div className="flex flex-1 flex-col px-1.5 pb-1 pt-4">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-lg font-bold">{p.name}</h3>
                    {p.live && (
                      <span className="flex shrink-0 items-center gap-1.5 text-xs text-neutral-400">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                        </span>
                        Live
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-neutral-500">{p.tagline}</p>
                  <p className="mt-3 text-sm text-neutral-400">{p.description}</p>
                  <div className="mt-auto flex items-end justify-between gap-3 pt-4">
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map(t => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                    <div className="flex shrink-0 gap-3 text-neutral-500">
                      {[
                        { href: p.live, label: 'Website', icon: icons.globe },
                        { href: p.paper, label: 'Paper', icon: icons.paper },
                        { href: p.source, label: 'Code', icon: icons.github },
                      ].map(
                        l =>
                          l.href && (
                            <a
                              key={l.label}
                              href={l.href}
                              target="_blank"
                              rel="noreferrer"
                              aria-label={`${p.name} ${l.label}`}
                              title={l.label}
                              className="transition hover:text-neutral-100"
                            >
                              {l.icon}
                            </a>
                          )
                      )}
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <dl className="space-y-4">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="grid gap-2 sm:grid-cols-[9.5rem_1fr]">
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

        <Section id="education" title="Education">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-medium">{education.degree}</h3>
            <span className="font-mono text-xs text-neutral-500">{education.date}</span>
          </div>
          <p className="text-sm text-neutral-500">
            {education.school} · {education.grade}
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-neutral-400">
            {education.highlights.map(h => (
              <li key={h.text}>
                {h.href ? (
                  <a href={h.href} target="_blank" rel="noreferrer" className={link}>
                    {h.text} ↗
                  </a>
                ) : (
                  h.text
                )}
              </li>
            ))}
          </ul>
          <div className="mt-5 space-y-3">
            {education.schooling.map(e => (
              <div key={e.title}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-medium">{e.title}</h3>
                  <span className="font-mono text-xs text-neutral-500">{e.date}</span>
                </div>
                <p className="text-sm text-neutral-500">{e.school}</p>
              </div>
            ))}
          </div>
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
            Hiring for an ML, GenAI or AI engineering role — or have a hard problem worth modelling?
            I'd like to hear about it.
          </p>
          <Contact />
        </Section>
      </main>

      <footer className="mx-auto max-w-3xl border-t border-neutral-900 px-6 py-8 text-sm text-neutral-600">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </ClickSpark>
  );
};

export default App;
