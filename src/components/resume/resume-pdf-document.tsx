import { Stack } from "@/components/layout/stack";
import {
  resumePdfContactLinks,
  resumePdfEducation,
  resumePdfExperience,
  resumePdfLocation,
  resumePdfEmail,
  resumePdfName,
  resumePdfProjects,
  resumePdfSkillGroups,
  resumePdfSummary,
  resumePdfSupportingSkills,
  resumePdfTitle,
} from "@/content/resume-pdf";

function SectionHeading({ children }: { children: string }) {
  return (
    <div className="border-b border-[hsl(var(--border))] pb-1.5">
      <h2 className="text-[10pt] font-semibold uppercase tracking-[0.18em] text-[hsl(var(--accent))]">
        {children}
      </h2>
    </div>
  );
}

export function ResumePdfDocument() {
  return (
    <article className="resume-pdf-sheet w-full bg-white text-slate-950">
      <header className="border-b border-[hsl(var(--border))] pb-4">
        <Stack gap="sm">
          <div className="space-y-1">
            <h1 className="text-[22pt] font-semibold tracking-[-0.04em] text-slate-950">
              {resumePdfName}
            </h1>
            <p className="text-[11pt] font-medium text-slate-800">{resumePdfTitle}</p>
          </div>

          <div className="space-y-1 text-[8.75pt] leading-[1.45] text-slate-700">
            <p className="break-normal">
              <span className="text-slate-700">{resumePdfLocation}</span>{" "}
              <span className="text-slate-500">·</span>{" "}
              <a
                className="text-slate-800 underline decoration-slate-300 underline-offset-2"
                href={`mailto:${resumePdfEmail}`}
              >
                {resumePdfEmail}
              </a>{" "}
              <span className="text-slate-500">·</span>{" "}
              {resumePdfContactLinks
                .filter((link) => link.label !== "Email")
                .map((link, index, links) => (
                  <span key={link.label}>
                    <a
                      className="text-slate-800 underline decoration-slate-300 underline-offset-2"
                      href={link.href}
                    >
                      {link.label}
                    </a>
                    {index < links.length - 1 ? <span className="text-slate-500"> · </span> : null}
                  </span>
                ))}
            </p>
          </div>
        </Stack>
      </header>

      <main className="pt-4 text-[9.75pt] leading-[1.45] text-slate-900">
        <section className="space-y-2">
          <SectionHeading>Professional Summary</SectionHeading>
          <p className="text-[9.75pt] leading-[1.5] text-slate-800">{resumePdfSummary}</p>
        </section>

        <section className="mt-4 space-y-2">
          <SectionHeading>Technical Skills</SectionHeading>

          <div className="space-y-2">
            {resumePdfSkillGroups.map((group) => (
              <div key={group.title} className="space-y-1">
                <p className="text-[9.25pt] font-semibold uppercase tracking-[0.12em] text-slate-900">
                  {group.title}
                </p>
                <p className="text-[9.75pt] text-slate-800">{group.technologies.join(" · ")}</p>
              </div>
            ))}

            <p className="text-[9.5pt] text-slate-700">
              <span className="font-semibold text-slate-900">Supporting:</span>{" "}
              {resumePdfSupportingSkills.join(" · ")}
            </p>
          </div>
        </section>

        <section className="mt-4 space-y-2">
          <SectionHeading>Professional Experience</SectionHeading>

          <div className="space-y-3">
            {resumePdfExperience.map((entry) => (
              <div key={`${entry.organization}-${entry.role}`} className="space-y-1">
                <p className="text-[9.75pt] font-semibold text-slate-950">{entry.organization}</p>
                <p className="text-[9.5pt] text-slate-800">{entry.role}</p>
                <p className="text-[9.25pt] text-slate-700">
                  {entry.employmentType} · {entry.workArrangement} · {entry.startDate} –{" "}
                  {entry.endDate}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-4 space-y-2">
          <SectionHeading>Selected Projects</SectionHeading>

          <div className="space-y-3">
            {resumePdfProjects.map((project) => (
              <div key={project.slug} className="space-y-1.5">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-[9.75pt] font-semibold text-slate-950">{project.name}</p>
                  <p className="text-[8.5pt] uppercase tracking-[0.14em] text-slate-600">
                    {project.status}
                  </p>
                </div>
                <p className="text-[9.5pt] text-slate-800">{project.summary}</p>
                <p className="text-[9.25pt] text-slate-700">
                  <span className="font-semibold text-slate-900">Technologies:</span>{" "}
                  {project.technologies.join(" · ")}
                </p>
                <p className="break-all text-[8.75pt] text-slate-700">
                  <a
                    className="text-slate-800 underline decoration-slate-300 underline-offset-2"
                    href={project.liveDemoUrl}
                  >
                    Live Demo
                  </a>
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-4 space-y-2">
          <SectionHeading>Education</SectionHeading>

          <div className="space-y-1">
            <p className="text-[9.75pt] font-semibold text-slate-950">
              {resumePdfEducation.institution}
            </p>
            <p className="text-[9.5pt] text-slate-800">{resumePdfEducation.degree}</p>
            <p className="text-[9.25pt] text-slate-700">{resumePdfEducation.fieldOfStudy}</p>
            <p className="text-[9.25pt] text-slate-700">{resumePdfEducation.gpa}</p>
          </div>
        </section>
      </main>
    </article>
  );
}
