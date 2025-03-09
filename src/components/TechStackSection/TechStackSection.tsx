import Image from "next/image";
import SectionTitle from "../SectionTitle/SectionTitle";
import stackTechs from "../../../public/data/stackTechs";
import Button from "../Button/Button";


const TechStackSection = () => {
  return (
    <div className="p-4">
      <div className="relative w-[400] h-[300] mx-auto flex items-center flex-col overflow-clip">
        <Image
          src={"/gpt.webp"}
          alt="Rotating image"
          width={400}
          height={400}
          className="absolute z-0 shadow-2xl opacity-65 animate-pulse"
        />
        <div className="absolute z-10 w-full backdrop-blur-xs flex items-center flex-col bottom-0 px-2 pt-2">
          <p className="uppercase opacity-80 shadow-2xl">I constantly try to improve</p>
          <SectionTitle>My Tech Stack</SectionTitle>
        </div>
      </div>
      {/* techs */}
      <div className="mt-4 flex md:w-[70%] w-full mx-auto items-center justify-center gap-2 flex-wrap">
        {
            stackTechs.map((tech , index)=>{
                return(
                    <Button type="secondary" key={index}>
                        <Image src={`https://cdn.simpleicons.org/${tech.toLowerCase()}?viewbox=auto`} alt={tech} width={25} height={25} unoptimized className="rounded-md"/>
                        <p>{tech}</p>
                    </Button>
                )
            })
        }
      </div>
    </div>
  );
};

export default TechStackSection;
