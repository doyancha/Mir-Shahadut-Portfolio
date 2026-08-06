import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen px-6 py-16 text-slate-950">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-6">
        <div className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500">404</p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-950">Page not found</h1>
          <p className="text-base leading-7 text-slate-700">The requested page is unavailable.</p>
        </div>
        <Link
          href="/"
          className="inline-flex w-fit items-center rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-900 no-underline"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}
