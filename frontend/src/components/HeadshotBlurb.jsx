import headshot from "../assets/Images/Headshot.JPG";
import EmailIcon from '@mui/icons-material/Email';
import { useState } from "react";
import ModalContact from "./ModalContact";

const HeadshotBlurb = () => {
  const [open,setOpen] = useState(false);

  return (
    <div className="grid grid-cols-2 w-auto pt-32 p-4">
      <div className="flex  items-center justify-center">
        <img className="rounded-full object-cover size-120" src={headshot}/>
      </div>
      <div className="flex-col">
        <h3 className="flex justify-center font-bold text-4xl px-4 pt-4">
          Full Stack Developer
        </h3>
        <h3 className="flex justify-center font-bold text-4xl px-4 pb-4">
          & Python Programmer
        </h3>

        <p className="flex justify-center p-4">
          University of Central Florida Graduate (2025)
        </p>

        <div className="flex justify-center">
          <p className="italic w-[400px] p-4">
            I am a tenacious problem solver dedicated to non-stop learning! I am proficient in multiple specializations, and if you'd like to work together, please contact me at your earliest convenience.
          </p>
        </div>
        <div className="flex justify-center items-center pt-10">
          <button className="btn bg-yellow-300 rounded-full text-xl p-6" onClick={() => setOpen(true)}>
          <EmailIcon/>
          Contact Me
          </button>
        </div>
      </div>

      <ModalContact open={open} onClose={() => setOpen(false)}>
        <div className="text-center w-120">
          <h3 className="font-light text-4xl p-4">
            Email Me At:
          </h3>
          <div className="font-bold text-2xl">
            JacobPeachSE@Outlook.com
          </div>
        </div>
      </ModalContact>
    </div>
  )
}

export default HeadshotBlurb