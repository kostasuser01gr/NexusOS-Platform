const capabilities = [
  "Adaptive workspace modes",
  "Fleet and booking workflows",
  "AI-assisted suggestions",
  "Web and mobile surfaces",
  "Postgres-backed persistence",
  "Security validation gates",
];

export default function PublicOverviewPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-16">
        <div className="max-w-3xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            AdaptiveAI Business Suite
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            A modular AI operations suite for business workflows, fleet operations, and decision support.
          </h1>
          <p className="text-lg leading-8 text-muted-foreground">
            Nexus OS demonstrates a production-style React and Express platform with PostgreSQL,
            Drizzle ORM, authenticated workspaces, mobile validation, and AI-assisted operating modes.
            This public overview is open for portfolio review; private workspaces remain protected.
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => (
            <div key={item} className="rounded-lg border bg-card p-4 text-sm font-medium">
              {item}
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href="/dashboard" className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
            Open protected workspace
          </a>
          <a
            href="https://github.com/kostasuser01gr/AdaptiveAI-Business-Suite"
            className="rounded-md border px-4 py-2 text-sm font-semibold"
          >
            View source
          </a>
        </div>
      </section>
    </main>
  );
}
