import { ReactNode } from "react";

interface buttonProps {
    children  :ReactNode ,
    type : "primary" | "secondary" ,
    circled?: boolean ,
    disabled? : boolean ,
    onClick? : ()=> void ,
    submit?: boolean
}
const Button = (props: buttonProps) => {
    const basicStyle = "flex items-center gap-2 shadow-2xl cursor-pointer transition duration-300 ease-in-out hover:scale-x-105"
    const primaryStyle = "bg-indigo-900 hover:bg-indigo-800 text-white"
    const secondaryStyle = "hover:bg-indigo-200 hover:text-indigo-950 border border-indigo-400 dark:border-indigo-100"
    const circleStyle = "rounded-full p-2"
    const disabledStyle = "opacity-50 cursor-not-allowed"
  return <button type={props.submit?"submit":"button"} disabled={props.disabled} onClick={props.onClick} className={`${basicStyle} ${props.type == "primary" ? primaryStyle : secondaryStyle} ${props.disabled? disabledStyle:""} ${props.circled == true ? circleStyle :"md:py-2 md:px-4 py-3 px-6 rounded-md"}`}>
    {props.children}
  </button>;
};

export default Button;
