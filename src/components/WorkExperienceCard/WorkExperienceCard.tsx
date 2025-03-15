"use client";
import { WorkExperience } from "@/types";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const WorkExperienceCard = ({ experience }: { experience: WorkExperience }) => {
  useEffect(() => {
    AOS.init({
      offset: 10,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      once: true,
    });
  }, []);
  return (
    <div
      className="relative flex gap-4 md:left-6 left-2 w-[95%]"
      data-aos="fade-left"
    >
      {/* rounded point */}
      <div className="w-5 h-5 rounded-full bg-indigo-900 border-4 border-white"></div>
      {/* Section */}
      <div className="shadow-2xl w-[90%]">
        <h1 className="flex items-center gap-2">
          <FaRegCalendarAlt /> {experience.date}
        </h1>
        {/* card */}
        <div className="bg-indigo-900 rounded-lg rounded-tl-none p-4 mt-2 text-white">
          <h1 className="text-2xl shadow-2xl w-fit">{experience.title}</h1>
          <div className="flex md:gap-4 gap-2 items-center mt-2 text-indigo-950 flex-wrap w-fit">
            <p className="flex items-center gap-2 rounded-md bg-amber-50 md:px-2  px-3 py-1">
              <LuBriefcaseBusiness /> {experience.company}
            </p>
            <p className="flex items-center gap-2 rounded-md bg-amber-50 md:px-2  px-3 py-1">
              <IoLocationOutline /> {experience.location}
            </p>
          </div>
          <ul className="list-disc mt-4 pl-4 md:w-[90%]">
            {experience.workBenifits.map((benefit, index) => {
              return <li key={index}>{benefit}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceCard;
