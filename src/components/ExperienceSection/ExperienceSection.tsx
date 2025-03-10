import SectionTitle from "../SectionTitle/SectionTitle";
import WorkExperiences from "../../../public/data/workExperiences";
import WorkExperienceCard from "../WorkExperienceCard/WorkExperienceCard";

const ExperienceSection = () => {
  return (
    <div className="mt-10" id="experience">
      <SectionTitle>Work Experience</SectionTitle>
      {/* timeline */}
      <div className="relative w-[90%] mx-auto my-10">
        {/* vertical line */}
        <div className="absolute md:left-8 left-4 w-1 rounded-md h-[100%] bg-indigo-900"></div>
        {/* experiecne */}
        <div className="flex flex-col gap-8 overflow-hidden">
          {WorkExperiences.map((exp, index) => {
            return <WorkExperienceCard experience={exp} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
