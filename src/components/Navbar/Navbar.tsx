import Image from "next/image"
import { AiOutlineHome } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
        <Image src={"/logo_blue.png"} alt="Abanoub Logo" width={40} height={40} className="shadow-2xl"/>
        <div className="bg-slate-900 rounded-md py-2 px-4 w-[30%]">
            <AiOutlineHome />
        </div>
    </div>
  )
}

export default Navbar