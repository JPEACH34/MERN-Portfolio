
import HeadshotBlurb from "./components/HeadshotBlurb";
import LanguagesWorkloads from "./components/LanguagesWorkloads";
import SkillsPanel from "./components/SkillsPanel";
import EducationPanel from "./components/EducationPanel";
import Footer from "./components/Footer";
import ProjectsPanel from "./components/ProjectsPanel";

const App = () => {

  return (
    <div className="flex justify-center py-5 h-full w-full ">
      <div className="w-6xl shadow-xl z-10">
        <div className="h-40 flex justify-around items-center font-slim text-7xl">Jacob Peach</div>
        <HeadshotBlurb/>
        <ProjectsPanel/>
        <SkillsPanel/>
        <LanguagesWorkloads/>
        <EducationPanel/>
        <Footer/>
      </div>
    </div>
  )
}

export default App