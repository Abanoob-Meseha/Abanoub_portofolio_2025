import ImageSection from "./ImageSection";
import TextInfoSection from "./TextInfoSection";

const Hero = () => {
  return (
    <div className="md:py-4 md:px-10 px-2 flex flex-col-reverse md:flex-row md:gap-4 gap-1 items-center">
      {/* text info */}
      <TextInfoSection />
      {/* image */}
      <ImageSection />
    </div>
  );
};

export default Hero;

