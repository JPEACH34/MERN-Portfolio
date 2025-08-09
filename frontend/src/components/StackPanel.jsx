
const StackPanel = ({stackTab}) => {

  return (
    <div className="flex relative justify-end">
      <div className="w-187 relative -ml-[calc((100vw-100%)/2)] flex-col justify-end bg-yellow-300 rounded-r-2xl rounded-bl-[30px] my-16">
        <div className="flex justify-end text-4xl  font-sans font-bold pr-50 p-8">
          {stackTab.title}
        </div>
        <div className="flex flex-grid grid-cols-2 gap-3 justify-end">
          <div className="flex flex-col items-end justify-end">
            {stackTab.components.length > 0 && (
              <div>
                {stackTab.components.map(component =>(
                  <div key={component._id} className="flex justify-end items-center w-40 text-xl rounded-xl bg-gray-100 shadow-sm/25 p-4 m-8 mt-0">{component.name}</div>
                ))}
              </div>
            )}
          </div>
          <div className="flex flex-col items-end  w-[250px] pr-8">
            <div className="text-2xl">
              Additional tools:
            </div>
            <ul className="list-disc">
              {stackTab.extras.length > 0 && (
              <div>
                {stackTab.extras.map(extra =>(
                  <li key={extra._id} className="text-xl px-4 py-2">{extra.name}</li>
                ))}
              </div>
            )}
            </ul>
            <div className="pt-10 text-2xl">
              Experience: {stackTab.exp} Years
            </div>
          </div>
        </div>
      </div>
      <div className="w-43 absolute inset-0 -translate-x-375/256 translate-y-1/14 z-10 rounded-l-full bg-yellow-400 h-15"/>
      <div className="w-43 absolute inset-0 -translate-x-375/256 translate-y-1/14 z-0 rounded-tl-[30px] bg-yellow-300 h-15"/>
    </div>
  )
}

export default StackPanel