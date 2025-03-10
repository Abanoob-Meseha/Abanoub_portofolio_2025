import Button from "../Button/Button";
import SectionTitle from "../SectionTitle/SectionTitle";
import { SiMinutemailer } from "react-icons/si";

const ContactSection = () => {
    const inputStyle : string = "w-full p-2 pl-4 outline-indigo-800 outline-2 rounded-md shadow-2xl"
  return (
    <div className="w-full my-20" id="contact">
      <SectionTitle>Let's Work Together</SectionTitle>
      <form className="md:w-[70%] w-full mx-auto p-4 flex flex-col gap-4 items-center mt-5">
        <div className="flex gap-4 items-center w-full">
          <input type="text" placeholder="Your name .." className={inputStyle}/>
          <input type="email" placeholder="Your Email .." className={inputStyle}/>
        </div>
        <input type="text" placeholder="Subject .." className={inputStyle}/>
        <textarea rows={10} placeholder="Your Message .." className={inputStyle}/>
        <Button type="primary"><SiMinutemailer/> Send Message</Button>
      </form>
    </div>
  );
};

export default ContactSection;
