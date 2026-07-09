import Image from "next/image";

const links = {
  github: "https://github.com/XavierBeckles",
  email: "mailto:xavierbeckles23@gmail.com",
};

type Project = {
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  status: "wip" | "shipped";
  statusLabel: string;
  href?: string;
  linkLabel?: string;
  note?: string;
  logo: "inline" | "axiom";
};

const projects: Project[] = [
  {
    name: "InLine",
    tagline: "Booking & queue SaaS for barbers and hairdressers",
    description:
      "Public booking pages, live walk-in queues, client management, and PayPal payments. I own the product, the architecture, and every decision in it, built with AI-assisted development and a lot of hands-on debugging.",
    tags: ["Next.js", "TypeScript", "Supabase", "PayPal API", "Tailwind CSS"],
    status: "wip",
    statusLabel: "Work in progress — pre-launch",
    href: "https://myinline.vercel.app",
    linkLabel: "Visit site →",
    note: "Live preview — payments aren't fully live yet",
    logo: "inline",
  },
  {
    name: "Axiom",
    tagline: "Fitness tracking app — workouts, meals, progress",
    description:
      "Workout logging, USDA food search, BMI and progress tracking, Argon2 auth, PWA support. Same approach as InLine: I designed the product and data model and built it with AI-assisted development.",
    tags: ["Flask", "Python", "SQLite", "USDA API"],
    status: "wip",
    statusLabel: "Work in progress",
    href: "https://axiom-fitness.onrender.com",
    linkLabel: "Visit site →",
    note: "Free tier — may take a few seconds to wake up",
    logo: "axiom",
  },
];

const ownership = [
  "Scope and design the product",
  "Direct AI coding tools (mostly Claude Code) to build it",
  "Review, debug, and fix what doesn't work",
  "Own architecture, database design, and integrations",
  "Ship it — deployment, payments, the whole pipeline",
];

const stack = [
  "Next.js",
  "TypeScript",
  "React",
  "Supabase",
  "PostgreSQL",
  "Flask",
  "Python",
  "PayPal / Stripe APIs",
  "Tailwind CSS",
  "Git",
];

const terminalLines = [
  { prompt: "$", text: "whoami" },
  { prompt: ">", text: "Xavier Beckles — solo founder, full-stack" },
  { prompt: "$", text: "cat status.txt" },
  { prompt: ">", text: "Building InLine — product, architecture, ship." },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col font-sans">
      <Nav />
      <main className="flex flex-1 flex-col">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-accent">
      {children}
    </p>
  );
}

function Nav() {
  const items = [
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "How I build" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="font-pixel text-sm tracking-wide">
          XB
        </a>
        <ul className="flex items-center gap-6 text-sm text-muted">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="relative py-1 transition-colors duration-300 ease-out hover:text-accent after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 after:ease-out hover:after:w-full"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function TerminalWindow() {
  return (
    <div className="w-full max-w-xl border border-border bg-surface font-mono text-sm">
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-3 text-xs text-muted">xavier@portfolio</span>
      </div>
      <div className="flex flex-col gap-1.5 px-4 py-4">
        {terminalLines.map((line, i) => (
          <p key={i} className={line.prompt === "$" ? "text-foreground" : "text-muted"}>
            <span className="text-accent">{line.prompt}</span> {line.text}
          </p>
        ))}
        <p className="text-foreground">
          <span className="text-accent">$</span> <span className="blink">_</span>
        </p>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(circle_at_15%_10%,color-mix(in_srgb,var(--accent)_14%,transparent),transparent_45%)]"
      />
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <Eyebrow>Solo founder building InLine</Eyebrow>
        <h1 className="font-pixel max-w-3xl text-2xl leading-normal tracking-wide sm:text-4xl md:text-5xl">
          I take products
          <br />
          from idea
          <br />
          <span className="text-accent">to shipped.</span>
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-muted">
          I scope the product, design the architecture, and own every decision end to end —
          leaning on AI tooling to move fast, then doing the hands-on debugging and judgment calls
          myself to make sure it actually works.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#work"
            className="border border-accent bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#08110d] transition-colors hover:bg-transparent hover:text-accent"
          >
            See my work
          </a>
          <a
            href={links.email}
            className="border border-border px-6 py-3 text-sm font-semibold uppercase tracking-wide text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Get in touch
          </a>
        </div>
        <div className="pt-4">
          <TerminalWindow />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-border px-6 py-20">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 sm:flex-row sm:gap-16">
        <div className="sm:w-40 sm:shrink-0">
          <Eyebrow>About</Eyebrow>
        </div>
        <p className="max-w-2xl text-lg leading-relaxed text-muted">
          I&apos;m Xavier. Most of my time goes into{" "}
          <span className="text-foreground">InLine</span>, a SaaS app that lets barbers and
          hairdressers manage bookings, walk-in queues, and client relationships. I own it end to
          end — the product decisions, the data model, the payments, the launch checklist. I build
          fast by using AI-assisted development as leverage, but the judgment is mine: knowing
          what to build, spotting what&apos;s broken, and not shipping until it actually works.
        </p>
      </div>
    </section>
  );
}

function StatusBadge({ status, label }: { status: Project["status"]; label: string }) {
  const styles =
    status === "wip"
      ? "border-amber-500/30 bg-amber-500/10 text-amber-400"
      : "border-accent/30 bg-accent/10 text-accent";
  return (
    <span
      className={`inline-flex w-fit items-center gap-1.5 border px-3 py-1 text-xs font-medium ${styles}`}
    >
      <span className="h-1.5 w-1.5 bg-current" />
      {label}
    </span>
  );
}

function ProjectLogo({ logo }: { logo: Project["logo"] }) {
  if (logo === "inline") {
    return (
      <Image
        src="/logos/inline-icon.png"
        alt="InLine logo"
        width={40}
        height={40}
        className="h-10 w-10 object-contain"
      />
    );
  }
  return (
    <Image
      src="/logos/axiom-icon.svg"
      alt="Axiom logo"
      width={40}
      height={40}
      className="h-10 w-10 object-contain"
    />
  );
}

function ProjectCard({ project }: { project: Project }) {
  const content = (
    <>
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-border bg-background">
          <ProjectLogo logo={project.logo} />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-pixel text-base tracking-wide">{project.name}</h3>
            <StatusBadge status={project.status} label={project.statusLabel} />
          </div>
          <p className="text-sm text-muted">{project.tagline}</p>
        </div>
      </div>
      <p className="mt-6 leading-relaxed text-muted">{project.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="border border-border px-3 py-1 text-xs text-muted">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        {project.href && (
          <span className="text-sm font-semibold text-accent">{project.linkLabel ?? "Visit →"}</span>
        )}
        {project.note && <span className="text-sm text-muted">{project.note}</span>}
      </div>
    </>
  );

  const cardClass = "block border border-border bg-surface p-8 transition-colors sm:p-10";

  if (project.href) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${cardClass} hover:border-accent/60`}
      >
        {content}
      </a>
    );
  }

  return <article className={cardClass}>{content}</article>;
}

function Projects() {
  return (
    <section id="work" className="border-t border-border px-6 py-20">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-10">
          <Eyebrow>Selected work</Eyebrow>
        </div>
        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>

        <p className="mt-8 text-sm text-muted">
          More on{" "}
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline decoration-accent/60 underline-offset-4 hover:decoration-accent"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="border-t border-border px-6 py-20">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 sm:flex-row sm:gap-16">
        <div className="sm:w-40 sm:shrink-0">
          <Eyebrow>How I build</Eyebrow>
        </div>
        <div className="flex max-w-2xl flex-col gap-10">
          <div>
            <p className="mb-4 text-sm font-medium text-foreground">What I actually do</p>
            <ul className="flex flex-col gap-2">
              {ownership.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 text-sm font-medium text-foreground">Stack I build with</p>
            <ul className="flex flex-wrap gap-2">
              {stack.map((item) => (
                <li key={item} className="border border-border px-3 py-1.5 text-sm text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-border px-6 py-24">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-start gap-6">
        <Eyebrow>Contact</Eyebrow>
        <p className="font-pixel max-w-xl text-xl leading-normal tracking-wide sm:text-2xl">
          Need something built? I take on select freelance work.
        </p>
        <p className="max-w-xl leading-relaxed text-muted">
          If InLine or Axiom looks like what your business needs — a booking system, a client
          tool, something custom — that&apos;s exactly the kind of work I take on.
        </p>
        <a
          href={links.email}
          className="border border-accent bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#08110d] transition-colors hover:bg-transparent hover:text-accent"
        >
          xavierbeckles23@gmail.com
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} Xavier Beckles</p>
        <div className="flex gap-6">
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            GitHub
          </a>
          <a href={links.email} className="hover:text-accent">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
