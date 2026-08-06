export default function HomePage() {
  return (
    <main className="min-h-screen px-6 py-16 text-slate-950">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-8">
        <header className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500">
            Mir-Shahadut-Portfolio
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Mir Shahadut Hossain
          </h1>
          <p className="max-w-2xl text-base leading-7 text-slate-700">
            The portfolio foundation is initialized.
          </p>
        </header>

        <section aria-labelledby="current-state" className="space-y-3">
          <h2 id="current-state" className="text-lg font-semibold text-slate-900">
            Current state
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-slate-700">
            <li>Project name: Mir-Shahadut-Portfolio</li>
            <li>Owner: Mir Shahadut Hossain</li>
            <li>Implementation status: Foundation initialized</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
