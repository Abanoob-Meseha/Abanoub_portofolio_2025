"use client";
import { Project } from "@/types";
import Image from "next/image";
import Button from "../Button/Button";
import { FiGithub, FiLock, FiSlash } from "react-icons/fi";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Link from "next/link";

const ProjectCard = ({ project }: { project: Project }) => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 400,
      easing: "ease-in-sine",
      delay: 50,
      once: true,
    });
  }, []);
  return (
    <div data-aos="fade-up">
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
          className="relative object-center -bottom-10 rounded-lg shadow-2xl transition duration-300 ease-in-out hover:-rotate-6 w-[90%] h-[100%]"
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
        <p className="text-sm dark:text-gray-300">{project.description}</p>
        {/* techs */}
        <div className="flex flex-wrap gap-1 mt-4 text-white">
          {project.techs.map((tech, index) => {
            return (
              <p
                className="rounded-md shadow-2xl py-1 px-2 text-xs "
                style={{ backgroundColor: project.themeColor }}
                key={index}
              >
                {tech}
              </p>
            );
          })}
        </div>
        {/* Links section */}
        <div className="flex items-center gap-4 mt-6">
          <Link
            href={project.no_live_demo ? "#" : project.demoLink}
            target={project.no_live_demo ? "_self" : "_blank"}
            onClick={(e) => project.no_live_demo && e.preventDefault()}
          >
            <Button type="primary" disabled={project.no_live_demo}>
              {project.no_live_demo ? <FiSlash /> : <FaArrowUpRightFromSquare />}
              {project.no_live_demo ? "No Live Demo" : "Live Demo"}
            </Button>
          </Link>
          <Link
            href={project.is_private ? "#" : project.githubLink}
            target={project.is_private ? "_self" : "_blank"}
            onClick={(e) => project.is_private && e.preventDefault()}
          >
            <Button type="secondary" disabled={project.is_private}>
              {project.is_private ? <FiLock /> : <FiGithub />}
              {project.is_private ? "Private" : "Source Code"}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
