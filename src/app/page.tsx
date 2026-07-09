const links = {
  github: "https://github.com/XavierBeckles",
  linkedin: "https://linkedin.com/in/your-linkedin-here",
  email: "mailto:xavierbeckles23@gmail.com",
};

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Supabase",
  "Tailwind CSS",
  "Stripe / PayPal APIs",
  "Python",
  "C#",
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
    { href: "#skills", label: "Skills" },
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
    <section className="relative overflow-hidden px-6 py-28 sm:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(circle_at_20%_20%,color-mix(in_srgb,var(--accent)_12%,transparent),transparent_45%)]"
      />
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
        <p className="font-mono text-sm text-accent">Full-stack developer &amp; solo founder</p>
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-6xl">
          I build and ship products end to end.
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-muted">
          Currently building{" "}
          <a
            href="#work"
            className="font-medium text-foreground underline decoration-accent/60 underline-offset-4 hover:decoration-accent"
          >
            InLine
          </a>
          , a booking and queue platform for barbers and hairdressers — designed, coded, and
          launched solo.
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
          I&apos;m Xavier, a full-stack developer who likes owning a product from the first
          commit to the customer&apos;s inbox. Most of my time goes into{" "}
          <span className="text-foreground">InLine</span>, a SaaS app that lets barbers and
          hairdressers manage bookings, walk-in queues, and client relationships — covering
          everything from the database schema to payments to the UI a client sees on their phone.
          I care about shipping software that&apos;s fast, simple, and actually gets used.
        </p>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="work" className="border-t border-border px-6 py-20">
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="mb-10 font-mono text-sm text-accent">Selected work</h2>
        <article className="grid gap-8 rounded-2xl border border-border bg-surface p-8 sm:grid-cols-5 sm:p-10">
          <div className="sm:col-span-3">
            <h3 className="text-2xl font-semibold tracking-tight">InLine</h3>
            <p className="mt-1 text-sm text-muted">Booking &amp; queue SaaS for barbers and hairdressers</p>
            <p className="mt-6 leading-relaxed text-muted">
              A full booking platform built solo — public booking pages, live walk-in queues,
              client management, and integrated payments via PayPal. Built with Next.js and
              Supabase, from schema design through to a production launch.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Next.js", "TypeScript", "Supabase", "PayPal API", "Tailwind CSS"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center gap-3 sm:col-span-2 sm:border-l sm:border-border sm:pl-8">
            <p className="text-sm text-muted">
              Solo-built: product, design, backend, and launch.
            </p>
          </div>
        </article>

        <p className="mt-8 text-sm text-muted">
          More projects on{" "}
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
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 sm:flex-row sm:gap-16">
        <h2 className="text-sm font-mono text-accent sm:w-40 sm:shrink-0">Skills</h2>
        <ul className="flex max-w-2xl flex-wrap gap-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-border px-3 py-1.5 text-sm text-muted"
            >
              {skill}
            </li>
          ))}
        </ul>
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
