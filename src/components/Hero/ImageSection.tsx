import Image from "next/image";
import heroImg from "../../../public/profile_2025.png"
const ImageSection = () => {
  return (
      <Image
        src={heroImg}
        alt="Abanoub Profile Image"
        className="rounded-full drop-shadow-2xl border md:w-[300px] md:h-[300px] w-[200px] h-[200px] bg-indigo-900 md:-mt-4 animate-glow"
        width={200}
        height={200}
      />
  );
};

export default ImageSection;
