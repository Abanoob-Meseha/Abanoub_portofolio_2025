import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import { SiMinutemailer } from "react-icons/si";
import { ReactNode } from "react";
import { FiLinkedin } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

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
const contacts: { icon: ReactNode; link: string }[] = [
  {
    link: "https://linkedin.com/in/abanoob-meseha",
    icon: <FiLinkedin />,
  },
  {
    link: "https://github.com/Abanoob-Meseha",
    icon: <FiGithub />,
  },
  {
    link: "https://wa.me/201206010738",
    icon: <FaWhatsapp />,
  },
  {
    link: "https://www.facebook.com/abanoub.meseha.9/",
    icon: <FiFacebook />,
  },
];
const TextInfoSection = () => {
  return (
    <div className="relative md:w-[70%] w-[95%]">
      <Image
        src={"/dot.svg"}
        alt="dot image"
        width={160}
        height={160}
        className="absolute opacity-10 z-0 dark:invert-100 md:w-[160px] md:h-[160px] w-[120px] h-[120px]"
      />
      <div className="z-10 p-4 pl-8">
        <h2 className="md:text-4xl text-3xl font-bold dark:shadow-2xl">
          Hey there!, I'm-
        </h2>
        <h1 className="text-[40px] md:text-8xl md:mt-2 dark:shadow-2xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          ABANOUB MESEHA
        </h1>
        <h3 className="md:mt-4 md:text-3xl text-2xl font-bold">
          Full-Stack Software Engineer and a little bit of{" "}
          <span style={{fontFamily: "Playwrite IT Moderna"}} className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            everything
          </span>
        </h3>
        <div className="md:mt-4 mt-2 flex flex-col md:gap-1 w-[110%] relative -left-8 md:text-start md:left-0">
          {aboutBullets.map((bullet, index) => {
            return (
              <div className="flex gap-2 md:text-xl text-lg dark:text-gray-200" key={index}>
                <span className="shadow-2xl">{bullet.icon}</span>
                <p>{bullet.text}</p>
              </div>
            );
          })}
        </div>
        {/* buttons container */}
        <div className="flex items-center gap-6 md:mt-10 mt-5">
          <Link href={"/#projects"}>
            <Button type="primary">
              My Work <FaArrowRightLong />
            </Button>
          </Link>
          <Link href={"/#contact"}>
            <Button type="secondary">
              Let's Connect <SiMinutemailer />
            </Button>
          </Link>
        </div>
        {/* contact icons container */}
        <div className="flex gap-4 md:mt-8 mt-6">
          {contacts.map((contact, index) => {
            return (
              <Link href={contact.link} key={index} target="_blank">
                <Button type="secondary" circled={true}>{contact.icon}</Button>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default TextInfoSection;
