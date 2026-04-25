import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button.jsx';

const links = [
  { label: 'Home', hash: 'home' },
  { label: 'Experience', hash: 'experience' },
  { label: 'Projects', hash: 'projects' },
  { label: 'Skills', hash: 'skills' },
  { label: 'Contact', hash: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const baseUrl = import.meta.env.BASE_URL;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition duration-300 ${
        scrolled ? 'border-line bg-canvas/78 shadow-2xl shadow-black/20 backdrop-blur-xl' : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href={`${baseUrl}#home`} className="text-base font-black tracking-normal text-ink">
          Nitesh Jadhav
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a key={link.hash} href={`${baseUrl}#${link.hash}`} className="text-sm font-semibold text-muted transition hover:text-ink">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button href={`${baseUrl}#contact`}>Hire Me</Button>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-line bg-panel/80 text-ink md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-line bg-canvas/95 px-6 py-5 backdrop-blur-xl md:hidden">
          <div className="mx-auto grid max-w-7xl gap-3">
            {links.map((link) => (
              <a
                key={link.hash}
                href={`${baseUrl}#${link.hash}`}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-3 py-3 text-sm font-semibold text-muted transition hover:bg-white/5 hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <Button href={`${baseUrl}#contact`}>Hire Me</Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
