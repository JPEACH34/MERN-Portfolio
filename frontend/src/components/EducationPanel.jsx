import EducationCell from "./EducationCell";


const EducationPanel = () => {
  return (
    <div className="flex-col justify-center pt-32 p-16">
      <h3 className="flex justify-center text-7xl font-bold p-8">
        Education
      </h3>
      <div className="grid grid-cols-3 gap-10 divide-x-2  divide-gray-600/50">
        <EducationCell earned="Bachelor's" major="Computer Science" title="University of Central Florida" attended="2022-2025" place="Orlando, Fl"/>
        <EducationCell earned="Associate's" major="Computer Science" title="Seminole State College of Florida" attended="2016-2021" place="Sanford, Fl"/>
        <EducationCell earned="High School Diploma" title="Crooms Academy of Information Technology" attended="2012-2016" place="Sanford, Fl"/>
      </div>
    </div>
  )
}

export default EducationPanel