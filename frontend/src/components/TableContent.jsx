import TableVals from "./TableVals";

const TableContent = ({table}) => {

  return (
    <div className="divide-y-2 divide-gray-600/50">
      <div className="flex justify-start gap-50">
        <p className="text-xl bg-yellow-300/50 px-5 py-1 m-3 rounded-full">
          {table.title}
        </p>
        <p className="text-xl bg-yellow-300/50 px-5 py-1 m-3 rounded-full">
          Experience
        </p>
      </div>
      {table.langs_and_exp.map(content => (
        <TableVals key={content._id} cell={content}/>
      ))}
      
    </div>
  )
}

export default TableContent
