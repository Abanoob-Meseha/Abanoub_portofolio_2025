import Image from "next/image";
import SectionTitle from "../SectionTitle/SectionTitle";
type Project = {
  img: string;
  name: string;
  description: string;
  techs: string[];
  demoLink: string;
  githubLink: string;
};
const projects: Project[] = [
    {
        img: "/logo.png",
        name: "string",
        description: "string",
        techs: [],
        demoLink: "string",
        githubLink: "string"
    }
];
const ProjectsSection = () => {
  return (
    <div className="p-4">
      <SectionTitle>Projects</SectionTitle>
      <div className="px-8 grid md:grid-cols-3 grid-cols-1">
        {
        projects.map((project , index)=>{
            return(
                <div key={index}>
                    <Image src={project.img} alt={project.name} width={100} height={100}/>
                    <h1>{project.name}</h1>
                </div>
            )
        })
        }
        </div>
    </div>
  );
};

export default ProjectsSection;
