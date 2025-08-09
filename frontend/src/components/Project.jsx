import GitHubIcon from '@mui/icons-material/GitHub';

const Project = ({project}) => {

  const handleRedirect = () => {
    window.location.href = project.github;
  }

  const imgURL = `https://jacob-peach-se.onrender.com${project.pic}`;
  
  return (
    <div className="flex relative bg-gray-100 my-20 rounded-full justify-end">
      <div className={`w-100 -ml-[calc((100vw-100%)/2)] flex justify-end items-center rounded-r-[160px] rounded-bl-[60px] bg-yellow-300 h-50`}>
        <h3 className="flex text-end text-4xl font-bold pr-15 max-w-100 w-fit">
          {project.title}
        </h3>
      </div>
      <div className="w-43 absolute inset-0 -translate-x-11/8 -translate-y-8/8 z-10 rounded-l-full bg-yellow-400 h-15"/>
      <div className="w-43 absolute inset-0 -translate-x-11/8 -translate-y-8/8 z-0 rounded-tl-[30px] bg-yellow-300 h-15"/>
      <div className="flex-col justify-center">
        <div className="flex justify-start font-light text-4xl p-4">
          {project.mode}
        </div>
        <div>
        <p className="flex justify-center p-4 w-80">
          {project.desc} 
        </p>
        </div>
      </div>
      <div className="flex-col items-center justify-center py-4 pr-5 divide-y-2 divide-gray-300">
        {project.techs.map(tech => (
          <p key={tech._id}className="flex justify-start italic p-1 w-80">
            {tech.name}
          </p>
        ))}
      </div>
      <div className=" flex justify-end">
        <div onClick={handleRedirect} className="relative rounded-full group h-50 w-50">
          <img src={imgURL} className="transition rounded-full object-cover group-hover:grayscale group-hover:blur-sm h-50 w-60"/>
          <GitHubIcon style={{fontSize: "64px" }} className="opacity-0 group-hover:opacity-100 absolute transition-opacity duration-300 inset-x-17 inset-y-17"/>
        </div>
      </div>
    </div>
  )
}

export default Project
