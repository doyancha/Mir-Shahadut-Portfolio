import type { CaseStudy } from ".";

export const bookEasyCaseStudy = {
  slug: "bookeasy",
  projectSlug: "bookeasy",
  title: "BookEasy",
  description:
    "A single-location appointment booking app with calculated availability, protected customer accounts, and admin scheduling tools backed by Supabase.",
  canonicalPath: "/projects/bookeasy",
  liveDemoUrl: "https://bookeasy-topaz.vercel.app/",
  keyFacts: [
    { label: "Current status", value: "Functional Demo" },
    { label: "Private repository", value: "Private repository" },
    { label: "Live demo available", value: "Live demo available" },
  ],
  relatedProjectSlug: "taskorbit",
  sections: {
    overview: {
      paragraphs: [
        "BookEasy is an appointment-booking application for one service business and one location. It combines public service discovery with availability-based booking, protected customer accounts, appointment management, profile management, and administrative tools for services, weekly business hours, and blocked periods.",
        "The implementation keeps the public marketing pages, booking flow, customer dashboard, and admin workflows under one App Router codebase so the product can be reviewed as a complete full-stack booking system.",
      ],
    },
    problem: {
      paragraphs: [
        "Appointment booking requires more than choosing a date and time. The application has to reconcile available services, business hours, blocked periods, existing confirmed appointments, booking notice constraints, and a limited future booking horizon before it can offer a valid slot.",
        "It also has to protect customer and administrator actions so each role can operate inside the same scheduling system without bypassing the underlying data rules.",
      ],
    },
    goals: {
      items: [
        "Provide a clear customer booking flow from service selection to confirmed appointment creation.",
        "Compute valid appointment availability predictably from the underlying schedule data.",
        "Protect customer and admin actions behind server-side authorization checks.",
        "Prevent overlapping confirmed appointments.",
        "Keep scheduling rules centralized and maintainable.",
        "Support responsive use across mobile, tablet, and desktop widths.",
        "Keep privileged data access on the server where it belongs.",
      ],
    },
    architecture: {
      frontend: [
        "Next.js App Router pages under `src/app` structure the public marketing pages, booking flow, dashboard, and admin areas.",
        "Server Components handle most reads so public routes still render even when Supabase is not configured.",
      ],
      backend: [
        "Server Actions handle booking, auth, profile, and admin mutations.",
        "Client Components are reserved for interactive pieces such as booking steps, form controls, and confirmation dialogs.",
      ],
      data: [
        "Supabase PostgreSQL stores services, profiles, appointments, weekly business hours, and blocked periods.",
        "Availability is computed from service duration, business hours, blocked periods, and existing confirmed appointments.",
      ],
      auth: [
        "Supabase email/password authentication is refreshed through the Next.js proxy flow.",
        "Server helpers gate protected customer and admin routes with `requireUser` and `requireAdmin`.",
      ],
      deployment: [
        "The app is configured for Vercel deployment.",
        "Environment-based Supabase configuration keeps the app portable across local and hosted environments.",
      ],
    },
    features: {
      items: [
        "Public homepage, service catalog, and service detail pages.",
        "Availability-driven booking flow.",
        "Protected customer dashboard.",
        "Customer profile management.",
        "Appointment cancellation and rescheduling for eligible appointments.",
        "Administrative dashboard and appointment management.",
        "Service management for the booked offering.",
        "Weekly business hours and blocked period management.",
      ],
    },
    workflows: {
      items: [
        {
          title: "Customer booking flow",
          steps: [
            "Select a service from the public catalog.",
            "Choose a date that is within the allowed booking window.",
            "Load calculated availability for that service and date.",
            "Pick an available time slot.",
            "Validate the booking payload on the server.",
            "Create the appointment through protected server-side logic.",
            "Return the customer to the dashboard and appointment views.",
          ],
        },
        {
          title: "Admin workflow",
          steps: [
            "Review the administrative dashboard and current appointment state.",
            "Manage services and activation state.",
            "Maintain weekly business hours.",
            "Add or remove blocked periods.",
            "Review and update appointment statuses where permitted.",
          ],
        },
      ],
    },
    decisions: {
      items: [
        "Use Server Actions for protected mutations instead of client-side writes.",
        "Validate incoming booking and admin data with Zod at the trust boundary.",
        "Keep scheduling logic in a pure utility so availability rules stay testable.",
        "Store app data in Supabase PostgreSQL with row-level access control.",
        "Protect appointment overlap at the database layer with an exclusion constraint.",
        "Use UTC storage and business-timezone display for scheduling consistency.",
        "Validate return paths to avoid unsafe redirects after authentication actions.",
      ],
    },
    challenges: {
      items: [
        "Appointment overlap prevention had to be enforced both in application logic and in the database.",
        "Availability had to be derived from several constraints at once, not from a single calendar value.",
        "Timezone handling had to stay consistent between local business dates and stored timestamps.",
        "Authenticated routes needed reliable session refresh and role checks.",
        "Customer and admin write paths had to remain clearly separated.",
        "The app needed to render reviewable public content even when Supabase credentials were absent.",
      ],
    },
    solutions: {
      items: [
        "The database uses a PostgreSQL GiST exclusion constraint to reject overlapping confirmed appointments.",
        "A pure `generateAvailability` utility evaluates business hours, blocked periods, confirmed appointments, notice rules, and the booking horizon.",
        "Supabase SSR session refresh keeps authentication state available across protected server routes.",
        "Row Level Security and role-aware helper functions protect profiles, services, business hours, blocked periods, and appointments.",
        "The booking and auth actions validate input with Zod before any protected mutation runs.",
        "Public routes can still render sample content when Supabase is not configured, which keeps the app reviewable in portfolio conditions.",
      ],
    },
    responsive: {
      paragraphs: [
        "The public marketing pages, booking flow, and protected application layouts are structured to wrap cleanly from mobile to desktop without horizontal overflow.",
        "Public browser QA confirmed clean layout behavior at 320px, 390px, 768px, 1024px, 1440px, and 1536px, including the mobile widths used for overflow checks.",
      ],
    },
    accessibility: {
      items: [
        "Semantic App Router pages and sectioned layouts provide a clear document structure.",
        "Form controls are labeled in the booking, auth, profile, and admin flows.",
        "Keyboard-visible focus is present in the public navigation and action controls.",
        "Validation errors are surfaced with readable messages instead of silent failures.",
        "The public booking flow remains usable at mobile sizes.",
      ],
    },
    security: {
      items: [
        "Supabase authentication and SSR session refresh support protected server routes.",
        "Role-aware checks separate customer and admin actions.",
        "Zod validation guards booking and mutation inputs.",
        "Row Level Security restricts access to app tables.",
        "Database triggers prevent profile role escalation and appointment ownership changes.",
        "The service-role key is kept out of public browser variables.",
      ],
    },
    testing: {
      items: [
        "Unit tests cover slot generation, duration fit, notice constraints, booking horizon rules, overlaps, blocked periods, and exact boundary cases.",
        "Playwright public E2E tests cover the homepage, navigation, service browsing, auth validation, booking usability, and protected-route behavior.",
        "Public E2E checks also verify mobile horizontal overflow behavior.",
        "Credential-dependent admin and booking integration checks are documented separately for manual execution after Supabase setup.",
        "The scheduling logic is tested independently from Supabase credentials.",
      ],
    },
    deployment: {
      paragraphs: [
        "The repository is configured for Vercel deployment with environment-based Supabase settings and the usual production build flow.",
        "The portfolio evidence reflects a functional demo setup rather than external operational usage.",
      ],
    },
    currentStatus: {
      paragraphs: [
        "BookEasy is presented publicly as a functional demo. The live app renders sample content without Supabase credentials, while authenticated booking, dashboard, and admin workflows require the configured environment, migrations, and Supabase services.",
      ],
    },
    limitations: {
      items: [
        "The product is modeled around one service business and one location.",
        "Database-backed booking and dashboards depend on configured Supabase services.",
        "No approved screenshot gallery has been added yet.",
        "The portfolio evidence should not be read as a commercial production adoption claim.",
        "The contact form remains a local demo validation flow in the repository documentation.",
      ],
    },
    lessons: {
      items: [
        "Scheduling correctness improves when availability rules are centralized in a pure utility.",
        "Customer-facing validation is stronger when application checks and database constraints both protect writes.",
        "Server-side authorization and database policies work best together rather than as substitutes.",
        "Keeping testable scheduling logic separate from the UI makes the system easier to maintain.",
      ],
    },
  },
} satisfies CaseStudy;
