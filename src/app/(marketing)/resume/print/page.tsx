import type { Metadata } from "next";

import { ResumePdfDocument } from "@/components/resume/resume-pdf-document";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  path: "/resume/print",
  title: "Resume PDF Preview",
  description: "Internal print-focused preview of the downloadable resume PDF.",
  robots: {
    index: false,
    follow: false,
  },
});

export default function ResumePrintPage() {
  return (
    <div className="resume-print-shell min-h-screen bg-white px-4 py-6 text-slate-950 md:px-8 md:py-8 print:bg-white print:px-0 print:py-0">
      <div className="mx-auto w-full max-w-[210mm]">
        <ResumePdfDocument />
      </div>
    </div>
  );
}
