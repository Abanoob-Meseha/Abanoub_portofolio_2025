import { Project } from "@/types";
import Image from "next/image";
import Button from "../Button/Button";
import { FiGithub } from "react-icons/fi";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="">
      {/* image Section */}
      <div
        style={{ backgroundColor: project.themeColor }}
        className="rounded-lg border shadow-2xl w-full h-[35vh] flex justify-center items-end overflow-clip cursor-pointer"
      >
        <Image
          src={project.img}
          alt={project.name}
          width={900}
          height={450}
          className="relative -bottom-10 rounded-lg shadow-2xl transition duration-300 ease-in-out hover:-rotate-6 w-[90%] h-[100%]"
        />
      </div>
      {/* description Section */}
      <div className="flex flex-col mt-2 px-2">
        <h1 className="flex text-2xl items-center gap-4">
          {project.name}{" "}
          <div
            className="w-10 h-1 rounded-2xl"
            style={{ backgroundColor: project.themeColor }}
          ></div>
        </h1>
        <p className="text-sm text-gray-300">{project.description}</p>
        {/* techs */}
        <div className="flex flex-wrap gap-1 mt-4">
            {
                project.techs.map((tech ,index)=>{
                    return(
                        <p className="rounded-md shadow-2xl py-1 px-2 text-xs " style={{backgroundColor:project.themeColor}} key={index}>{tech}</p>
                    )
                })
            }
        </div>
        {/* Links section */}
        <div className="flex items-center gap-4 mt-6">
            <Button type="primary" ><FaArrowUpRightFromSquare/> Live Demo</Button>
            <Button type="secondary" ><FiGithub/> Source Code</Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
