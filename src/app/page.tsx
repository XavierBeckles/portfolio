const links = {
  github: "https://github.com/XavierBeckles",
  linkedin: "https://linkedin.com/in/your-linkedin-here",
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
  note?: string;
};

const projects: Project[] = [
  {
    name: "InLine",
    tagline: "Booking & queue SaaS for barbers and hairdressers",
    description:
      "Public booking pages, live walk-in queues, client management, and PayPal payments. I own the product, the architecture, and every decision in it — Claude Code writes most of the actual code, I direct it, review it, and fix what's broken.",
    tags: ["Next.js", "TypeScript", "Supabase", "PayPal API", "Tailwind CSS"],
    status: "wip",
    statusLabel: "Work in progress — pre-launch",
    note: "Private repo, not public yet",
  },
  {
    name: "Axiom",
    tagline: "Fitness tracking app — workouts, meals, progress",
    description:
      "Workout logging, USDA food search, BMI and progress tracking, Argon2 auth, PWA support. Same approach as InLine: I designed the product and data model, AI wrote most of the Flask backend under my direction.",
    tags: ["Flask", "Python", "SQLite", "USDA API"],
    status: "wip",
    statusLabel: "Work in progress",
    href: "https://github.com/XavierBeckles/Axiom-Fitness",
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

function Nav() {
  const items = [
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "How I build" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="text-sm font-semibold tracking-tight">
          Xavier Beckles
        </a>
        <ul className="flex items-center gap-6 text-sm text-muted">
          {items.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="transition-colors hover:text-foreground">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-28 sm:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(circle_at_15%_10%,color-mix(in_srgb,var(--accent)_14%,transparent),transparent_45%)]"
      />
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-7">
        <p className="font-mono text-sm text-accent">Solo founder building InLine</p>
        <h1 className="max-w-3xl text-5xl font-bold tracking-tight sm:text-7xl">
          I ship products.
          <br />
          AI writes the code.
          <br />
          <span className="text-accent">I make the decisions.</span>
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-muted">
          I&apos;m not going to pretend I hand-wrote every line. I scope the product, design the
          architecture, and direct AI tools to build it — then I&apos;m the one debugging it,
          fixing it, and shipping it.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href="#work"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-[#08110d] transition-opacity hover:opacity-90"
          >
            See my work
          </a>
          <a
            href={links.email}
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-border px-6 py-20">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 sm:flex-row sm:gap-16">
        <h2 className="text-sm font-mono text-accent sm:w-40 sm:shrink-0">About</h2>
        <p className="max-w-2xl text-lg leading-relaxed text-muted">
          I&apos;m Xavier. Most of my time goes into{" "}
          <span className="text-foreground">InLine</span>, a SaaS app that lets barbers and
          hairdressers manage bookings, walk-in queues, and client relationships. I own it end to
          end — the product decisions, the data model, the payments, the launch checklist — and I
          get there by directing AI coding tools rather than typing every line myself. What I
          bring is judgment: knowing what to build, spotting what&apos;s broken, and not shipping
          until it actually works.
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
      className={`inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${styles}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {label}
    </span>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const content = (
    <>
      <div className="flex flex-wrap items-center gap-3">
        <h3 className="text-2xl font-semibold tracking-tight">{project.name}</h3>
        <StatusBadge status={project.status} label={project.statusLabel} />
      </div>
      <p className="mt-1 text-sm text-muted">{project.tagline}</p>
      <p className="mt-6 leading-relaxed text-muted">{project.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-border px-3 py-1 text-xs text-muted">
            {tag}
          </span>
        ))}
      </div>
      {project.href ? (
        <p className="mt-6 text-sm font-medium text-accent">View on GitHub →</p>
      ) : project.note ? (
        <p className="mt-6 text-sm text-muted">{project.note}</p>
      ) : null}
    </>
  );

  const cardClass =
    "block rounded-2xl border border-border bg-surface p-8 transition-colors sm:p-10";

  if (project.href) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${cardClass} hover:border-accent/50`}
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
        <h2 className="mb-10 font-mono text-sm text-accent">Selected work</h2>
        <div className="flex flex-col gap-6">
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
        <h2 className="text-sm font-mono text-accent sm:w-40 sm:shrink-0">How I build</h2>
        <div className="flex max-w-2xl flex-col gap-10">
          <div>
            <p className="mb-4 text-sm font-medium text-foreground">What I actually do</p>
            <ul className="flex flex-col gap-2">
              {ownership.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 text-sm font-medium text-foreground">Stack I build with</p>
            <ul className="flex flex-wrap gap-2">
              {stack.map((item) => (
                <li key={item} className="rounded-full border border-border px-3 py-1.5 text-sm text-muted">
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
        <h2 className="font-mono text-sm text-accent">Contact</h2>
        <p className="max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Building something interesting? Let&apos;s talk.
        </p>
        <a
          href={links.email}
          className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-[#08110d] transition-opacity hover:opacity-90"
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
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            GitHub
          </a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            LinkedIn
          </a>
          <a href={links.email} className="hover:text-foreground">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
