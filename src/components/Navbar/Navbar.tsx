"use client"
import Image from "next/image";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegFolder } from "react-icons/fa";
import { PiToolboxThin } from "react-icons/pi";
import { FiTool } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { ReactNode, useState } from "react";
import ToggleTheme from "../ToggleTheme/ToggleTheme";

const Navbar = () => {
  return (
    <div className="sticky top-0 backdrop-blur flex items-center z-50 justify-between py-4 md:px-10 px-2 w-full h-[12vh]">
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
      <ToggleTheme />
    </div>
  );
};

export default Navbar;

const CenterNav = () => {
  const navLinks: { icon: ReactNode; link: string , title :string }[] = [
    {
      title: "HOME",
      icon: <AiOutlineHome />,
      link: "/",
    },
    {
      title: "PROJECTS",
      icon: <FaRegFolder />,
      link: "/#projects",
    },
    {
      title: "TOOLS",
      icon: <FiTool />,
      link: "/#tools",
    },
    {
      title: "EXPERIRNCE",
      icon: (
        <PiToolboxThin/>
      ),
      link: "/#experience",
    },
    {
      title: "CONTACT",
      icon: <CiMail />,
      link: "/#contact",
    },
  ];
  const navLinkStyle: string =
  "text-2xl dark:text-white p-2 rounded-md hover:bg-indigo-900 cursor-pointer transition-all duration-300 ease-initial";
  const activeStyle : string = "bg-indigo-900 text-white"
  const [active , setActive] = useState('HOME')
  return (
    <div className="dark:bg-gray-950 bg-white rounded-xl py-2 md:px-4 px-2 md:w-[30%] w-[65%] shadow-2xl flex items-center justify-between">
      {navLinks.map((navLink, index) => {
        const {icon , link} = navLink ;
        return (
          <Link href={link} key={index} onClick={()=>setActive(navLink.title)} className={`${active == navLink.title ? `${activeStyle} ${navLinkStyle}` :navLinkStyle}`}>
            {icon}
          </Link>
        );
      })}
    </div>
  );
};
