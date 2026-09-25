import FloatingNavbar from "@/components/FloatingNavbar";
import HeroBento from "@/components/HeroBento";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectsBento from "@/components/ProjectsBento";
import SkillsBento from "@/components/SkillsBento";
import ContactBento from "@/components/ContactBento";

export default function Home() {
  return (
    <>
      <FloatingNavbar />
      <main
        id="top"
        className="min-h-screen max-w-5xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-12 flex flex-col gap-10 sm:gap-14"
      >
        <HeroBento />

        <div id="experience" className="scroll-mt-24">
          <ExperienceTimeline />
        </div>

        <ProjectsBento />

        <div id="skills" className="scroll-mt-24">
          <SkillsBento />
        </div>

        <ContactBento />
      </main>
    </>
  );
}