import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

import avatar from './assets/avatar.png';
import DecryptedText from './bits/DecryptedText';
import { profile } from './data';
import { icons } from './icons';

const socials = [
  { label: 'GitHub', href: profile.github, icon: icons.github },
  { label: 'LinkedIn', href: profile.linkedin, icon: icons.linkedin },
  { label: 'Email', href: `mailto:${profile.email}`, icon: icons.mail },
];

export const Hero = () => {
  const [copied, setCopied] = useState(false);
  const reduceMotion = useReducedMotion();

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
      className="pb-4 pt-10 sm:pt-14"
    >
      {/* Decorative banner; muted + playsInline are required for autoplay on mobile. */}
      <video
        src="/banner.mp4"
        poster="/banner.jpg"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="mb-8 aspect-[1440/562] w-full rounded-xl border border-neutral-800 object-cover"
      />
      <div className="flex items-center gap-5">
        <img
          src={avatar}
          alt={`${profile.name} avatar`}
          className="h-24 w-24 shrink-0 rounded-full sm:h-28 sm:w-28"
        />
        <div>
          <h1 className="text-rgb-split font-serif text-4xl leading-none sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-2 font-mono text-sm text-neutral-400 sm:text-base">
            {reduceMotion ? (
              profile.role
            ) : (
              <DecryptedText
                text={profile.role}
                animateOn="view"
                sequential
                speed={35}
                characters="01<>/{}[]#$%&*+=ABCDEFabcdef"
                encryptedClassName="text-violet-400"
              />
            )}
          </p>
          <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-neutral-500 sm:text-sm">
            <span className="flex items-center gap-1.5 [&_svg]:h-4 [&_svg]:w-4">
              {icons.pin}
              {profile.location}
            </span>
            <span className="flex items-center gap-1.5 [&_svg]:h-4 [&_svg]:w-4">
              {icons.mail}
              {profile.email}
              <button
                onClick={copyEmail}
                aria-label={copied ? 'Email copied' : 'Copy email'}
                title={copied ? 'Copied!' : 'Copy email'}
                className="text-neutral-500 transition hover:text-neutral-100"
              >
                {copied ? icons.check : icons.copy}
              </button>
            </span>
          </p>
        </div>
      </div>

      <p className="mt-8 text-neutral-300">{profile.tagline}</p>

      <blockquote className="mt-4 flex flex-wrap items-center gap-x-2 text-sm text-neutral-500">
        <span className="italic">“{profile.quote.text}”</span>
        <span aria-hidden="true">—</span>
        <cite className="not-italic text-neutral-400">{profile.quote.by}</cite>
      </blockquote>

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
