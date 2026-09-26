import { useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';

import avatar from './assets/avatar.png';
import { profile } from './data';

// 24px stroke icons (lucide-style paths) — inlined to avoid an icon dependency for four glyphs.
const Icon = ({ children }: { children: ReactNode }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const icons = {
  github: (
    <Icon>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </Icon>
  ),
  linkedin: (
    <Icon>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </Icon>
  ),
  mail: (
    <Icon>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </Icon>
  ),
  copy: (
    <Icon>
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </Icon>
  ),
  check: (
    <Icon>
      <path d="M20 6 9 17l-5-5" />
    </Icon>
  ),
};

const socials = [
  { label: 'GitHub', href: profile.github, icon: icons.github },
  { label: 'LinkedIn', href: profile.linkedin, icon: icons.linkedin },
  { label: 'Email', href: `mailto:${profile.email}`, icon: icons.mail },
];

export const Hero = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="pb-8 pt-20 sm:pt-28"
    >
      <div className="flex items-center gap-5">
        <img
          src={avatar}
          alt={`${profile.name} avatar`}
          className="h-24 w-24 shrink-0 rounded-full sm:h-28 sm:w-28"
        />
        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{profile.name}</h1>
          <p className="mt-1 flex flex-wrap items-center gap-x-2 text-neutral-400">
            <span>{profile.role}</span>
            <span aria-hidden="true">·</span>
            <span>{profile.location}</span>
            <span aria-hidden="true">·</span>
            <span>{profile.email}</span>
            <button
              onClick={copyEmail}
              aria-label={copied ? 'Email copied' : 'Copy email'}
              title={copied ? 'Copied!' : 'Copy email'}
              className="scale-90 text-neutral-500 transition hover:text-neutral-100"
            >
              {copied ? icons.check : icons.copy}
            </button>
          </p>
        </div>
      </div>

      <p className="mt-8 text-neutral-300">{profile.tagline}</p>

      <div className="mt-6 flex gap-4">
        {socials.map(s => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            aria-label={s.label}
            title={s.label}
            className="text-neutral-500 transition hover:text-neutral-100"
          >
            {s.icon}
          </a>
        ))}
      </div>
    </motion.div>
  );
};
