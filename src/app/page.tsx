import Hero from "@/components/Hero/Hero";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-[15vh]">
      <Hero />
      <ProjectsSection />
    </div>
  );
}
