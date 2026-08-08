import { readFile } from "node:fs/promises";
import path from "node:path";

import { describe, expect, it } from "vitest";
import { PDFParse } from "pdf-parse";

const resumePdfPath = path.resolve(
  process.cwd(),
  "public/documents/resume/mir-shahadut-hossain-resume.pdf"
);

describe("resume PDF smoke", () => {
  it("parses the approved downloadable PDF and extracts the expected text", async () => {
    const fileBuffer = await readFile(resumePdfPath);
    const parser = new PDFParse({ data: fileBuffer });

    try {
      const result = await parser.getText();

      expect(result.total).toBe(1);
      expect(result.pages).toHaveLength(1);
      expect(result.text).toContain("Mir Shahadut Hossain");
      expect(result.text).toContain("Full Stack Web Developer");
      expect(result.text).toContain("HRH Shopping");
      expect(result.text).toContain("BookEasy");
      expect(result.text).toContain("TaskOrbit");
      expect(result.text).toContain("Daffodil International University");
      expect(result.text).not.toMatch(/localhost/i);
    } finally {
      await parser.destroy();
    }
  });
});
