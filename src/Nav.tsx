import { useEffect, useState } from 'react';

import { profile } from './data';

const links = ['about', 'experience', 'projects', 'skills', 'contact'];
// Shorter labels so the pill fits a phone screen without scrolling.
const mobileLabel: Record<string, string> = { experience: 'work' };
const desktopOnly = ['about', 'skills'];

// Floating glass pill; highlights the section currently in the middle band of the viewport.
export const Nav = () => {
  const [active, setActive] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    links.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-4 z-20 mt-4 flex justify-center px-3 sm:px-4">
      <nav className="flex max-w-full items-center gap-0.5 overflow-x-auto rounded-full border border-white/10 bg-neutral-900/60 p-1 text-xs [scrollbar-width:none] sm:gap-1 sm:p-1.5 sm:text-sm [&::-webkit-scrollbar]:hidden shadow-lg shadow-black/40 backdrop-blur-xl">
        <a href="#top" className="px-2 font-pixel text-sm text-neutral-100 sm:px-3 sm:text-base">
          {profile.name.split(' ')[0]}
          <span className="text-violet-400">.</span>
        </a>
        {links.map(id => (
          <a
            key={id}
            href={`#${id}`}
            className={`whitespace-nowrap rounded-full px-2 py-1.5 capitalize transition sm:px-3 ${
              desktopOnly.includes(id) ? 'hidden sm:inline' : ''
            } ${
              active === id
                ? 'bg-white/10 text-neutral-100'
                : 'text-neutral-400 hover:text-neutral-100'
            }`}
          >
            <span className="sm:hidden">{mobileLabel[id] ?? id}</span>
            <span className="hidden sm:inline">{id}</span>
          </a>
        ))}
        {profile.resume && (
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="whitespace-nowrap rounded-full bg-neutral-100 px-2 py-1.5 font-medium sm:px-3 text-neutral-950 transition hover:bg-white"
          >
            Resume
          </a>
        )}
      </nav>
    </header>
  );
};
