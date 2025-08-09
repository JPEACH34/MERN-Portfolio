
import api from "../lib/axios";
import { useState, useEffect } from "react";
import StackPanel from "./StackPanel";
import PythonSkill from "./PythonSkill";

const SkillsPanel = () => {
  const [stackTabs, setStackTabs] = useState([]);
  const [pythonSkills, setPythonSkills] = useState([]);
  const [loadingStack, setLoadingStack] = useState(true);
  const [loadingSkill, setLoadingSkill] = useState(true);

  useEffect(() =>{
    const fetchStackTabs = async () => {
      try{
        const res = await api.get("/stacks");
        setStackTabs(res.data);
      }catch(error){
        console.log("Error fetching Stack Tabs");
      }finally{
        setLoadingStack(false);
      }
    }

    fetchStackTabs();
  }, []);

  useEffect(() =>{

    const fetchPythonSkills = async () => {
      try{
        const res = await api.get("/python-skills");
        setPythonSkills(res.data);
      }catch(error){
        console.log("Error fetching Python Skills");
      }finally{
        setLoadingSkill(false);
      }
    }

    fetchPythonSkills();
  }, []);

  return (
    <div className="pt-32 p-16">
      <h3 className="flex justify-center text-7xl font-bold p-8">
            Skills
      </h3>
      <div className="grid grid-cols-2 w-auto p-4">
        <div>
          <div className="flex justify-center font-light text-4xl p-4">My Stacks</div>
          {stackTabs.length > 0 && (
            <div>
              {stackTabs.map(stackTab => (
                <StackPanel key={stackTab._id} stackTab={stackTab}/>
              ))}
            </div>
          )}
        </div>
        <div className="flex-col">
          <div className="flex justify-center font-light text-4xl p-4">Python Experience</div>
          <div className="px-16 my-16">
            
            {pythonSkills.length > 0 && (
            <div>
              {pythonSkills.map(pythonSkill => (
                <PythonSkill key={pythonSkill._id} pythonSkill={pythonSkill}/>
              ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillsPanel