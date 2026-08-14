import { ProjectMediaGallery } from "@/components/projects/project-media-gallery";
import { Stack } from "@/components/layout/stack";
import type { ProjectScreenshot } from "@/types/project";

type CaseStudyScreenshotsProps = {
  projectName: string;
  screenshots?: ProjectScreenshot[];
};

export function CaseStudyScreenshots({ projectName, screenshots }: CaseStudyScreenshotsProps) {
  if (!screenshots?.length) {
    return null;
  }

  return (
    <section className="scroll-mt-28">
      <Stack gap="md">
        <h2 className="text-2xl font-semibold tracking-tight text-white">Screenshots</h2>
        <ProjectMediaGallery
          screenshots={screenshots}
          ariaLabel={`${projectName} screenshots`}
          priority={false}
          sizes="(max-width: 1024px) 100vw, 72vw"
          variant="case-study"
        />
      </Stack>
    </section>
  );
}
