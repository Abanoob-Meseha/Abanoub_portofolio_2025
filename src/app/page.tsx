import Hero from "@/components/Hero/Hero";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import TechStackSection from "@/components/TechStackSection/TechStackSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <ProjectsSection />
      <TechStackSection />
    </div>
  );
}
