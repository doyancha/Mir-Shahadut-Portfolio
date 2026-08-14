import type { CaseStudy } from ".";

export const taskOrbitCaseStudy = {
  slug: "taskorbit",
  projectSlug: "taskorbit",
  title: "TaskOrbit",
  description:
    "Workspace-based productivity platform for managing projects, tasks, teams, and permissions.",
  canonicalPath: "/projects/taskorbit",
  liveDemoUrl: "https://taskorbit-mu.vercel.app/",
  keyFacts: [
    { label: "Current status", value: "Active Development" },
    { label: "Private repository", value: "Private repository" },
    { label: "Live demo available", value: "Live demo available" },
  ],
  relatedProjectSlug: "bookeasy",
  sections: {
    overview: {
      paragraphs: [
        "TaskOrbit is a workspace-based productivity platform for managing workspaces, projects, tasks, teams, invitations, and permissions inside a single App Router codebase.",
        "Authenticated users work inside scoped workspace and project contexts, while workspace owners and admins manage membership, invitations, project creation, and lifecycle state through protected routes.",
      ],
    },
    problem: {
      paragraphs: [
        "Collaborative productivity software needs more than task CRUD. It has to keep workspace membership, project membership, and task scope aligned with the current authenticated user.",
        "The application also has to keep archived states, recovery flows, invitations, attachments, dependency relationships, and protected actions consistent while route access stays aligned with server-side authorization.",
      ],
    },
    goals: {
      items: [
        "Organize work around isolated workspaces.",
        "Support project and task collaboration inside each workspace.",
        "Centralize permission checks across workspace, project, and task flows.",
        "Protect workspace, project, task, and invitation actions on the server.",
        "Maintain clear lifecycle states for active, archived, and recovered records.",
        "Keep validation close to domain boundaries.",
        "Support maintainable nested workflows across workspace, project, and task routes.",
      ],
    },
    architecture: {
      frontend: [
        "Next.js App Router pages under `src/app` provide the landing page, authentication screens, dashboards, and nested workspace, project, task, team, activity, and invitation pages.",
        "Server Components handle most reads, while interactive forms and controls stay isolated to the components that need client behavior.",
        "Shared layout and UI primitives keep the product surfaces consistent across public and protected routes.",
      ],
      backend: [
        "Server Actions handle workspace, project, task, member, and invitation mutations.",
        "Reusable authorization helpers are used by both route guards and mutation entry points so UI visibility does not become the security boundary.",
      ],
      data: [
        "Prisma models and PostgreSQL store workspaces, workspace members, workspace activity, workspace invitations, projects, project members, tasks, comments, attachments, and dependencies.",
        "Relational links keep project and task records scoped to their parent workspace and project.",
      ],
      auth: [
        "Supabase SSR handles session retrieval and refresh for authenticated flows.",
        "The proxy layer and server helpers coordinate protected routing and safe redirects.",
      ],
      deployment: [
        "The repository is configured for Vercel deployment with environment-based Supabase and Prisma-backed data access.",
        "Verification scripts cover database, Supabase, and auth-recovery checks during setup.",
      ],
    },
    features: {
      items: [
        "Authentication flows and password recovery.",
        "Workspace creation, listing, switching, detail views, and settings.",
        "Workspace activity views for recent events.",
        "Team member management and invitations.",
        "Project creation, listing, detail views, archive and restore behavior, and ownership recovery.",
        "Project membership management.",
        "Task list and task detail views.",
        "Task lifecycle updates, assignment, comments, attachments, and dependencies.",
        "Private attachment download for authorized members.",
        "Dashboard-level project and task directory views.",
      ],
    },
    workflows: {
      items: [
        {
          title: "Workspace workflow",
          steps: [
            "Authenticate with Supabase-backed login or password recovery.",
            "Open or create a workspace inside the protected app shell.",
            "Review workspace activity and settings.",
            "Invite teammates and manage workspace membership.",
            "Switch between accessible workspaces from the shared navigation.",
          ],
        },
        {
          title: "Project workflow",
          steps: [
            "Open the workspace project area.",
            "Create or update a project inside the current workspace.",
            "Manage project members and roles.",
            "Archive or restore a project when lifecycle state changes.",
            "Recover ownership for an orphaned project when required.",
          ],
        },
        {
          title: "Task workflow",
          steps: [
            "Open the project task directory.",
            "Create or update a task with status, priority, and optional assignee details.",
            "Update task lifecycle state, archive it, or restore it when appropriate.",
            "Add comments, upload attachments, and manage task dependencies.",
            "Download private attachments through the authorized route when access is allowed.",
          ],
        },
      ],
    },
    decisions: {
      items: [
        "Use a workspace-centric tenancy model so all project and task records stay isolated by workspace.",
        "Mirror the workspace, project, and task hierarchy in the nested route structure.",
        "Centralize route access rules with reusable authorization helpers.",
        "Apply the same authorization rules in the UI and in server actions, but keep the server as the real boundary.",
        "Model the domain with Prisma so relationships and lifecycle state remain explicit.",
        "Validate inputs with Zod at the trust boundary before protected mutations run.",
        "Represent archived and recovered states explicitly instead of inferring them from partial data.",
        "Keep attachment downloads protected rather than exposing private files directly.",
        "Use Supabase SSR session handling so server-rendered protected routes stay authenticated.",
      ],
    },
    challenges: {
      items: [
        "Workspace, project, and task permissions had to stay aligned across nested routes and server actions.",
        "Invitation and membership flows had to avoid duplicate records while still supporting acceptance and decline paths.",
        "Task comments, attachments, and dependencies had to remain scoped to the current project and task.",
        "Archived and recovered entities needed predictable behavior across read and write surfaces.",
        "Authentication callbacks and recovery flows had to preserve safe redirects and session state.",
        "Project ownership recovery had to be possible without breaking access control.",
      ],
    },
    solutions: {
      items: [
        "The same authorization helpers are reused in route guards, UI visibility, and mutation entry points.",
        "Invitation creation and acceptance use duplicate checks and transactional writes before membership records are saved.",
        "Prisma relationships keep tasks, comments, attachments, and dependencies tied to the correct project and workspace.",
        "Private attachment downloads and server-side authorization keep files and mutations scoped to authenticated members.",
        "Dependency helpers reject self-references, duplicate edges, and cycles before writes land.",
        "Safe redirect helpers keep auth flows inside internal routes.",
        "A recovery surface lets a workspace owner reassign ownership when a project becomes orphaned.",
      ],
    },
    responsive: {
      paragraphs: [
        "The public and protected surfaces use stacked small-screen layouts, card-based sections, and responsive grids so content reflows cleanly from mobile to desktop.",
        "Workspace, project, and task pages widen their structured evidence areas on larger screens while keeping narrative content readable.",
      ],
    },
    accessibility: {
      items: [
        "Semantic App Router pages and sectioned layouts provide a clear document structure.",
        "Action labels stay descriptive across the public and protected surfaces.",
        "Decorative icons are marked as aria-hidden where they do not add meaning.",
        "Native controls and shared form components keep keyboard interaction predictable.",
        "Validation and status messages are written in plain language instead of relying on color alone.",
      ],
    },
    security: {
      items: [
        "Supabase authentication and SSR session refresh support protected server routes.",
        "Route guards and server actions enforce workspace, project, and task permissions server-side.",
        "Row Level Security policies restrict access to the PostgreSQL data layer.",
        "Security definer helper functions are hardened by revoking direct execute access from client roles.",
        "Attachment downloads require authorization before signed access is issued.",
        "Scoped data access keeps workspace, project, and task records isolated to authorized members.",
      ],
    },
    validation: {
      items: [
        "Zod schemas validate auth, workspace, project, task, and invitation inputs before protected actions run.",
        "Prisma unique constraints keep workspace slugs, project slugs, and membership joins from duplicating.",
        "Foreign keys keep project, task, comment, attachment, and dependency records attached to their parents.",
        "Task attachment validation checks file type, size, and extension before upload.",
        "Invitation acceptance uses transactional checks so membership changes stay consistent.",
      ],
    },
    testing: {
      items: [
        "The repository includes verification scripts for database connectivity, Supabase connectivity, and auth recovery behavior.",
        "Standard verification commands cover type checking, linting, formatting, and production builds.",
        "No conventional unit or Playwright test suite was found in the repository scan.",
        "The implementation relies on source-level validation, build checks, and focused verification scripts rather than a large public test matrix.",
      ],
    },
    deployment: {
      paragraphs: [
        "The application is configured for Vercel deployment with Supabase providing authentication and data services, and Prisma backed by PostgreSQL handling domain persistence.",
        "Environment-driven configuration keeps the local and hosted setups aligned without exposing private credentials in the browser bundle.",
      ],
    },
    currentStatus: {
      paragraphs: [
        "TaskOrbit is presented publicly as an active development portfolio demo. The repository already shows the implemented workspace, project, task, team, invitation, and permission workflows.",
        "The live demo is available for review, while the repository remains private and the public evidence should be read as implementation work rather than commercial usage.",
      ],
    },
    limitations: {
      items: [
        "The product is still in active development, so additional scope remains unfinished.",
        "The public demo does not imply commercial production usage.",
        "The repository is private, so the case study must stand on documented implementation evidence.",
        "No conventional unit or Playwright test suite was found in the repository scan.",
      ],
    },
    lessons: {
      items: [
        "Nested SaaS permissioning benefits from centralized authorization logic.",
        "UI visibility should not replace server-side access enforcement.",
        "Workspace, project, and task boundaries are easier to maintain when they stay explicit.",
        "Typed validation and relational modeling make permissioned workflows easier to reason about.",
        "Lifecycle and recovery states need deliberate authorization rules rather than ad hoc exceptions.",
      ],
    },
    screenshots: [
      {
        src: "/images/projects/taskorbit/01-primary-desktop.png",
        alt: "TaskOrbit dashboard with workspace overview and active workspace switching.",
        width: 1440,
        height: 900,
      },
    ],
  },
} satisfies CaseStudy;
