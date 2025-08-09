import Project from "./Project"
import api from "../lib/axios";
import { useState, useEffect } from "react";


const ProjectsPanel = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async() => {
      try{
        const res = await api.get("/projects");
        setProjects(res.data);
      }catch(error){
        console.log("Error fetching Projects");
      } finally{
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return (
    <div className="pt-32 p-16">
      <h3 className="flex justify-center text-7xl font-bold p-8">
        Projects
      </h3>

      {projects.length > 0 && (
        <div>
          {projects.map(project => (
            <Project key={project._id} project={project}/>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProjectsPanel