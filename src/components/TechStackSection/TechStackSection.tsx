"use client";
import Image from "next/image";
import SectionTitle from "../SectionTitle/SectionTitle";
import stackTechs from "../../../public/data/stackTechs";
import Button from "../Button/Button";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const TechStackSection = () => {
  useEffect(() => {
    AOS.init({
      offset: 10,
      duration: 1000,
      easing: "ease-in-sine",
      delay: 100,
      once: true
    });
  }, []);
  return (
    <div className="p-4 mb-20 " id="tools">
      <div className="relative md:w-[400] md:h-[300] w-[300px] h-[300px] mx-auto flex items-center flex-col overflow-clip">
        <Image
          src={"/gpt.webp"}
          alt="Rotating image"
          width={400}
          height={400}
          className="absolute z-0 md:w-[400px] md:h-[400px] w-[300px] h-[300px] opacity-65 animate-rotate"
        />
        <div className="absolute z-10 w-full backdrop-blur-xs flex items-center flex-col md:bottom-0 bottom-7 px-2 pt-2">
          <p className="uppercase opacity-80 shadow-2xl">
            I constantly try to improve
          </p>
          <SectionTitle>My Tech Stack</SectionTitle>
        </div>
      </div>
      {/* techs */}
      <div className="mt-4 flex md:w-[70%] w-full mx-auto items-center justify-center gap-2 flex-wrap">
        {stackTechs.map((tech, index) => {
          return (
            <div key={index} data-aos="fade-up">
              <Button type="secondary" >
                <Image
                  src={`https://cdn.simpleicons.org/${tech.toLowerCase()}?viewbox=auto`}
                  alt={tech}
                  width={25}
                  height={25}
                  unoptimized
                  className="rounded-md w-[25] h-[25]"
                />
                <p>{tech}</p>
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechStackSection;
