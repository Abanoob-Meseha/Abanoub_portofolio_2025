import { ReactNode } from "react";

interface buttonProps {
    children  :ReactNode ,
    type : "primary" | "secondary" ,
    disabled? : boolean 
}
const Button = (props: buttonProps) => {
    const basicStyle = "flex items-center gap-2 py-2 px-4 shadow-2xl rounded-md  cursor-pointer transition duration-300 ease-in-out hover:scale-x-105"
    const primaryStyle = "bg-indigo-900 hover:bg-indigo-800"
    const secondaryStyle = ""
  return <button className={`${basicStyle} ${props.type == "primary" ? primaryStyle : "hover:bg-indigo-200"}`}>
    {props.children}
  </button>;
};

export default Button;
