import { createRequire } from "node:module";
import { createWriteStream } from "node:fs";
import { mkdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import {
  resumePdfContactLinks,
  resumePdfEducation,
  resumePdfExperience,
  resumePdfEmail,
  resumePdfName,
  resumePdfPath,
  resumePdfProjects,
  resumePdfSkillGroups,
  resumePdfSummary,
  resumePdfSupportingSkills,
  resumePdfTitle,
} from "@/content/resume-pdf";

// The owner-approved PDF in public/documents/resume/mir-shahadut-hossain-resume.pdf is the
// canonical public artifact. This generator is retained only as fallback / legacy tooling.
// Running it will overwrite the canonical PDF and must be intentional.
if (process.env.ALLOW_RESUME_PDF_OVERWRITE !== "1") {
  console.error(
    "Refusing to overwrite the canonical resume PDF. Set ALLOW_RESUME_PDF_OVERWRITE=1 to run this legacy generator intentionally."
  );
  process.exit(1);
}

const require = createRequire(import.meta.url);
const PDFDocument = require("pdfkit") as typeof import("pdfkit");

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputPath = path.join(
  repoRoot,
  "public",
  "documents",
  "resume",
  resumePdfPath.split("/").pop() ?? "resume.pdf"
);

const pageWidth = 595.28;
const pageHeight = 841.89;
const margin = 38;
const contentWidth = pageWidth - margin * 2;
const bottomLimit = pageHeight - margin;

function ensureSpace(doc: InstanceType<typeof PDFDocument>, height: number, label: string) {
  if (doc.y + height > bottomLimit) {
    throw new Error(
      `Resume PDF overflowed while rendering ${label}. Reduce content or typography.`
    );
  }
}

function sectionHeading(doc: InstanceType<typeof PDFDocument>, title: string) {
  const headingHeight = doc.heightOfString(title, { width: contentWidth });
  ensureSpace(doc, headingHeight + 14, title);
  doc.font("Helvetica-Bold").fontSize(10.8).fillColor("#0f172a").text(title.toUpperCase(), {
    width: contentWidth,
    characterSpacing: 1.1,
  });
  doc.moveDown(0.22);
  doc
    .moveTo(margin, doc.y)
    .lineTo(margin + contentWidth, doc.y)
    .lineWidth(0.6)
    .strokeColor("#cbd5e1")
    .stroke();
  doc.moveDown(0.6);
}

function paragraph(doc: InstanceType<typeof PDFDocument>, text: string, fontSize = 9.75) {
  const height = doc.heightOfString(text, {
    width: contentWidth,
    lineGap: 2.3,
    align: "left",
  });
  ensureSpace(doc, height, text);
  doc.font("Helvetica").fontSize(fontSize).fillColor("#1f2937").text(text, {
    width: contentWidth,
    lineGap: 2.3,
    align: "left",
  });
}

function contactLink(doc: InstanceType<typeof PDFDocument>, label: string, href: string) {
  ensureSpace(doc, 10, label);
  doc.font("Helvetica").fontSize(9.1).fillColor("#0f172a").text(label, {
    continued: true,
    link: href,
    underline: true,
  });
}

function renderContactLine(doc: InstanceType<typeof PDFDocument>) {
  const lineHeight = doc.currentLineHeight(true);
  ensureSpace(doc, lineHeight + 2, "contact line");
  doc.font("Helvetica").fontSize(9.1).fillColor("#334155").text("Dhaka, Bangladesh", {
    continued: true,
  });
  doc.fillColor("#94a3b8").text(" · ", {
    continued: true,
  });
  doc.fillColor("#0f172a").text(resumePdfEmail, {
    continued: true,
    link: `mailto:${resumePdfEmail}`,
    underline: true,
  });
  doc.fillColor("#94a3b8").text(" · ", {
    continued: true,
  });
  contactLink(doc, "GitHub", "https://github.com/doyancha");
  doc.fillColor("#94a3b8").text(" · ", {
    continued: true,
  });
  contactLink(doc, "LinkedIn", "https://www.linkedin.com/in/mir-shahadut-hossain/");
  doc.fillColor("#94a3b8").text(" · ", {
    continued: true,
  });
  contactLink(doc, "Upwork", "https://www.upwork.com/freelancers/~01bf024e0460582968");
  doc.text("", { continued: false });
}

function renderSkillGroup(
  doc: InstanceType<typeof PDFDocument>,
  title: string,
  technologies: string[]
) {
  const body = technologies.join(" · ");
  const headingHeight = doc.heightOfString(title, { width: contentWidth });
  const bodyHeight = doc.heightOfString(body, { width: contentWidth });
  ensureSpace(doc, headingHeight + bodyHeight + 11, title);
  doc.font("Helvetica-Bold").fontSize(9.45).fillColor("#0f172a").text(title.toUpperCase(), {
    width: contentWidth,
    characterSpacing: 0.9,
  });
  doc.moveDown(0.12);
  doc.font("Helvetica").fontSize(9.95).fillColor("#1f2937").text(body, {
    width: contentWidth,
    lineGap: 1.9,
  });
}

function renderExperienceEntry(
  doc: InstanceType<typeof PDFDocument>,
  entry: (typeof resumePdfExperience)[number]
) {
  const lines = [
    entry.organization,
    entry.role,
    `${entry.employmentType} · ${entry.workArrangement} · ${entry.startDate} – ${entry.endDate}`,
  ];
  const height = lines.reduce(
    (sum, line, index) =>
      sum +
      doc.heightOfString(line, {
        width: contentWidth,
      }) +
      (index < lines.length - 1 ? 2 : 0),
    0
  );
  ensureSpace(doc, height + 4, entry.organization);

  doc.font("Helvetica-Bold").fontSize(10.05).fillColor("#0f172a").text(entry.organization, {
    width: contentWidth,
  });
  doc.font("Helvetica").fontSize(9.8).fillColor("#1f2937").text(entry.role, {
    width: contentWidth,
  });
  doc
    .font("Helvetica")
    .fontSize(9.5)
    .fillColor("#475569")
    .text(
      `${entry.employmentType} · ${entry.workArrangement} · ${entry.startDate} – ${entry.endDate}`,
      {
        width: contentWidth,
      }
    );
}

function renderProject(
  doc: InstanceType<typeof PDFDocument>,
  project: (typeof resumePdfProjects)[number]
) {
  const titleLine = `${project.name} — ${project.status}`;
  const summaryHeight = doc.heightOfString(project.summary, { width: contentWidth });
  const techLine = `Technologies: ${project.technologies.join(" · ")}`;
  const techHeight = doc.heightOfString(techLine, { width: contentWidth });
  const titleHeight = doc.heightOfString(titleLine, { width: contentWidth });
  ensureSpace(doc, titleHeight + summaryHeight + techHeight + 10, project.name);

  doc.font("Helvetica-Bold").fontSize(10.05).fillColor("#0f172a").text(titleLine, {
    width: contentWidth,
  });
  doc.font("Helvetica").fontSize(9.8).fillColor("#1f2937").text(project.summary, {
    width: contentWidth,
    lineGap: 1.9,
  });
  doc.font("Helvetica").fontSize(9.5).fillColor("#475569").text(techLine, {
    width: contentWidth,
  });
  doc.font("Helvetica").fontSize(9.1).fillColor("#0f172a").text("Live Demo", {
    link: project.liveDemoUrl,
    underline: true,
  });
}

async function main() {
  await mkdir(path.dirname(outputPath), { recursive: true });

  const doc = new PDFDocument({
    size: "A4",
    margins: { top: margin, bottom: margin, left: margin, right: margin },
    info: {
      Title: `${resumePdfName} Resume`,
      Author: resumePdfName,
      Subject: "Downloadable resume PDF",
      Keywords: "resume, ATS, full stack web developer, Next.js, React, TypeScript",
      Creator: "Mir-Shahadut-Portfolio",
    },
    bufferPages: false,
    compress: true,
  });

  const stream = doc.pipe(createWriteStream(outputPath));

  doc.font("Helvetica-Bold").fillColor("#0f172a").fontSize(23).text(resumePdfName, {
    width: contentWidth,
  });
  doc.font("Helvetica").fillColor("#1f2937").fontSize(11.5).text(resumePdfTitle, {
    width: contentWidth,
  });
  doc.moveDown(0.6);
  renderContactLine(doc);

  doc.moveDown(0.78);

  sectionHeading(doc, "Professional Summary");
  paragraph(doc, resumePdfSummary);

  doc.moveDown(0.52);
  sectionHeading(doc, "Technical Skills");
  for (const group of resumePdfSkillGroups) {
    renderSkillGroup(doc, group.title, group.technologies);
    doc.moveDown(0.34);
  }
  paragraph(doc, `Supporting: ${resumePdfSupportingSkills.join(" · ")}`, 9.65);

  doc.moveDown(0.52);
  sectionHeading(doc, "Professional Experience");
  for (const entry of resumePdfExperience) {
    renderExperienceEntry(doc, entry);
    doc.moveDown(0.42);
  }

  doc.moveDown(0.28);
  sectionHeading(doc, "Selected Projects");
  for (const project of resumePdfProjects) {
    renderProject(doc, project);
    doc.moveDown(0.48);
  }

  doc.moveDown(0.34);
  sectionHeading(doc, "Education");
  paragraph(doc, resumePdfEducation.institution, 9.95);
  paragraph(doc, resumePdfEducation.degree, 9.8);
  paragraph(doc, resumePdfEducation.fieldOfStudy, 9.65);
  paragraph(doc, resumePdfEducation.gpa, 9.65);

  const pageBottom = doc.page.height - doc.page.margins.bottom;
  if (doc.y > pageBottom) {
    throw new Error("Resume PDF exceeds one page. Reduce content before regenerating.");
  }

  doc.end();

  await new Promise<void>((resolve, reject) => {
    stream.on("finish", resolve);
    stream.on("error", reject);
    doc.on("error", reject);
  });

  const fileInfo = await stat(outputPath);
  console.log(`Generated ${outputPath} (${fileInfo.size} bytes)`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
