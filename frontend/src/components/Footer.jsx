import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import ModalContact from './ModalContact';
import { useState } from 'react';


const Footer = () => {
  const [open,setOpen] = useState(false);

  const handleRedirect = () => {
    window.location.href = 'https://github.com/JPEACH34';
  }
  
  return (
    <div className="flex-col justify-center pt-20 p-4">
      <h3 className="flex justify-center font-light text-4xl p-4">
        Interested in working together?
      </h3>
      <div className="flex justify-center text-2xl font-bold p-4">
        Reach out!
      </div>
      <div className="flex justify-center gap-5">
        <button onClick={handleRedirect} className="btn bg-yellow-300 rounded-full text-xl p-6">
          <GitHubIcon/>
          Github
        </button>
        <button onClick={() => setOpen(true)} className="btn bg-yellow-300 rounded-full text-xl p-6">
          <EmailIcon/>
          Contact Info
        </button>
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

export default Footer