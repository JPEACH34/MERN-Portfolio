
const EducationCell = ({earned, major, title, attended, place}) => {
  return (
    <div>
      <div className="flex justify-center text-center font-light text-4xl p-4">
        {earned}
      </div>
      <div className="flex justify-center text-center font-bold text-2xl p-4 ">
        {title}
      </div>
      <div className="flex justify-center text-center text-2xl pb-4 ">
        {major}
      </div>
      <div className="flex justify-center text-center text-xl">
        {attended}
      </div>
      <div className="flex justify-center text-center italic text-xl">
        {place}
      </div>
    </div>
  )
}

export default EducationCell