
const PythonSkill = ({pythonSkill}) => {
  return (
    <div>
      <div className="flex justify-center text-3xl font-semibold mb-5 mt-10">{pythonSkill.title}</div>
      <ul className="list-disc flex-col justify-center">
        {pythonSkill.skills.map(skill => (
          <li key={skill._id} className="text-xl mx-6 py-3">{skill.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default PythonSkill