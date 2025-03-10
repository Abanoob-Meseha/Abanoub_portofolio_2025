import SectionTitle from "../SectionTitle/SectionTitle";
import ProjectCard from "../ProjectCard/ProjectCard";
import projects from "../../../public/data/projects";

const ProjectsSection = () => {
  return (
    <div className="p-4 mb-10">
      <SectionTitle>Featured Projects</SectionTitle>
      <div className="md:px-4 px-2 grid md:grid-cols-3 grid-cols-1 gap-8 mt-8 overflow-hidden">
        {projects.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </div>
    </div>
  );
};

export default ProjectsSection;
