import Image from "next/image";

const authorLinks = [
  {
    label: "Email Mukul Kumar",
    text: "Email",
    href: "mailto:contact@mukulkumar.dev",
  },
  {
    label: "Mukul Kumar on LinkedIn",
    text: "LinkedIn",
    href: "https://www.linkedin.com/in/mukulkr",
  },
  {
    label: "Mukul Kumar on GitHub",
    text: "GitHub",
    href: "https://github.com/CS-savvy",
  },
];

export default function AuthorBlock() {
  return (
    <section className="mt-8 rounded-xl border border-zinc-800/80 bg-zinc-900/60 p-4" aria-label="About the author">
      <div className="flex items-start gap-3">
        <Image
          src="/profile_picture.jpg"
          alt="Mukul Kumar"
          width={40}
          height={40}
          className="h-10 w-10 shrink-0 rounded-full object-cover shadow-lg shadow-indigo-500/20"
        />
        <div className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-indigo-300">
            About the author
          </p>
          <h2 className="mt-1 text-base font-semibold text-white">Mukul Kumar</h2>
          <p className="text-xs text-zinc-400">Applied AI Engineer</p>
          <p className="mt-2 text-xs leading-5 text-zinc-500">
            Building production AI systems across computer vision, NLP, and document intelligence.
          </p>
        </div>
      </div>

      <nav className="mt-4 grid grid-cols-3 gap-2" aria-label="Author links">
        {authorLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={link.label}
            className="rounded-md border border-zinc-700/80 px-2 py-1.5 text-center text-[11px] font-medium text-zinc-400 transition-colors hover:border-indigo-400/60 hover:text-white"
          >
            {link.text}
          </a>
        ))}
      </nav>
    </section>
  );
}