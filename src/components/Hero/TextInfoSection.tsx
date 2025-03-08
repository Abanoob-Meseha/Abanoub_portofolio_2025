import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";
import { FaArrowRightLong } from "react-icons/fa6";

const aboutBullets: { icon: string; text: string }[] = [
  {
    icon: "🚀",
    text: "Passionate about building scalable web & mobile applications.",
  },
  {
    icon: "💻",
    text: "Expertise in: React.js, Next.js, React Native, Express.js, MongoDB and Postgres.",
  },
  {
    icon: "⚡",
    text: "I'm always eager to learn more.",
  },
];
const TextInfoSection = () => {
  return (
    <div className="relative md:w-[70%] w-[90%]">
      <Image
        src={"/dot.svg"}
        alt="dot image"
        width={160}
        height={160}
        className="absolute opacity-10 z-0 invert-100"
      />
      <div className="absolute z-10 p-4 pl-8">
        <h2 className="text-white text-4xl font-bold shadow-2xl">
          Hey there!, I'm-
        </h2>
        <h1 className="text-8xl mt-2 shadow-2xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          ABANOUB MESEHA
        </h1>
        <h3 className="mt-4 text-3xl font-bold">
          Full-Stack Software Engineer and a little bit of{" "}
          <span className="font-serif font-thin bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            everything
          </span>
        </h3>
        <div className="mt-4 flex flex-col gap-1 w-[110%] relative -left-8 md:text-start md:left-0">
          {aboutBullets.map((bullet, index) => {
            return (
              <div className="flex gap-2 text-xl text-gray-200" key={index}>
                <span className="shadow-2xl">{bullet.icon}</span>
                <p>{bullet.text}</p>
              </div>
            );
          })}
        </div>
        {/* buttons container */}
        <div className="flex items-center gap-6 mt-10">
          <Link href={""}>
            <Button type="primary">My Work <FaArrowRightLong/></Button>
          </Link>
          <Link href={""}>
            <Button type="secondary">Let's Connect <FaArrowRightLong/></Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default TextInfoSection;
