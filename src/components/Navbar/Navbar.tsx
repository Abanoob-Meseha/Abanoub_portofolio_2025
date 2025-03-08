"use client";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegFolder } from "react-icons/fa";
import { PiToolboxThin } from "react-icons/pi";
import { FiTool } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { IoSunnyOutline } from "react-icons/io5";
import { ReactNode, useState } from "react";
import { IoMoonOutline } from "react-icons/io5";

const Navbar = () => {
  const [isDark, setIsDark] = useState(true);
  return (
    <div className="fixed flex items-center z-50 justify-between py-4 md:w-[90%] md:left-[5%] w-[98%] left-[1%] h-[15vh]">
      {/* nav logo */}
      <Image
        src={"/logo_blue.png"}
        alt="Abanoub Logo"
        width={40}
        height={40}
        className="shadow-2xl"
      />
      {/* center nav */}
      <CenterNav />
      {/* theme Mode toggle */}
      <div className="border border-indigo-900 rounded-full p-4 text-white shadow-2xl hover:bg-gray-800 cursor-pointer">
        {isDark ? <IoSunnyOutline size={20} /> : <IoMoonOutline />}
      </div>
    </div>
  );
};

export default Navbar;

const CenterNav = () => {
  const navLinkStyle: string =
    "text-white p-2 rounded-md hover:bg-indigo-900 cursor-pointer transition-all duration-300 ease-initial";
  const navLinks: { icon: ReactNode; link: string }[] = [
    {
      icon: <AiOutlineHome className={navLinkStyle} size={40} title="Home" />,
      link: "/",
    },
    {
      icon: <FaRegFolder className={navLinkStyle} size={40} title="Projects" />,
      link: "/",
    },
    {
      icon: (
        <PiToolboxThin className={navLinkStyle} size={40} title="Experience" />
      ),
      link: "/",
    },
    {
      icon: <FiTool className={navLinkStyle} size={40} title="Tools" />,
      link: "/",
    },
    {
      icon: <CiMail className={navLinkStyle} size={40} title="Contact" />,
      link: "/",
    },
  ];
  return (
    <div className="bg-gray-950 rounded-xl py-2 md:px-4 px-2 md:w-[30%] w-[65%] shadow-2xl flex items-center justify-between">
      {navLinks.map((navLink, index) => {
        const {icon , link} = navLink ;
        return (
          <Link href={link} key={index}>
            {icon}
          </Link>
        );
      })}
    </div>
  );
};
