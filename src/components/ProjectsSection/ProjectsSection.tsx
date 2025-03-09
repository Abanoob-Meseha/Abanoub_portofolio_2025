import SectionTitle from "../SectionTitle/SectionTitle";
import ProjectCard from "../ProjectCard/ProjectCard";
import { Project } from "@/types";

const projects: Project[] = [
  {
    img: "/projects_imgs/portofolio_project.png",
    name: "BEBOSTORE E-Commerce",
    description: "Full Stack E-commerce Web App with user and Admin Dashboard",
    techs: ["Next.js", "Typescript", "Tailwind CSS", "Express.js", "JWT" , "Rate limit" , "Postgres" , "MongoDB" , "Redis"],
    demoLink: "/",
    githubLink: "/",
    themeColor: "#551681"
  },
  {
    img: "/projects_imgs/portofolio_project.png",
    name: "BEBOSTORE E-Commerce",
    description: "Full Stack E-commerce Web App with user and Admin Dashboard",
    techs: ["Next.js", "Typescript", "Tailwind CSS", "Express.js", "JWT" , "Rate limit" , "Postgres" , "MongoDB" , "Redis"],
    demoLink: "/",
    githubLink: "/",
    themeColor: "#A30B58"
  },
  {
    img: "/projects_imgs/portofolio_project.png",
    name: "BEBOSTORE E-Commerce",
    description: "Full Stack E-commerce Web App with user and Admin Dashboard",
    techs: ["Next.js", "Typescript", "Tailwind CSS", "Express.js", "JWT" , "Rate limit" , "Postgres" , "MongoDB" , "Redis"],
    demoLink: "/",
    githubLink: "/",
    themeColor: "#1B3181"
  },
];
const ProjectsSection = () => {
  return (
    <div className="p-4 mb-10">
      <SectionTitle>Featured Projects</SectionTitle>
      <div className="md:px-4 px-2 grid md:grid-cols-3 grid-cols-1 gap-8 mt-8">
        {projects.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </div>
    </div>
  );
};

export default ProjectsSection;
