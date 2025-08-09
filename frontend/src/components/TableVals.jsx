

const TableVals = ({cell}) => {

   //Pixel count for bar length
  const barLength = parseInt(cell.exp, 10) * 75;

  return (
    <div className="flex justify-start gap-40">
      <p className="text-xl px-5 m-3 w-[195px]">
        {cell.lang}
      </p>
      <div className="flex">
        <p className="text-xl px-5 m-3 w-[150px]">{cell.exp} Year{parseInt(cell.exp) > 1 ? `s` : ``}</p>
        <div className={`text-xl bg-yellow-300 rounded-full px-5 m-3`} style={{width: `${barLength}px`}}/>
      </div>
    </div>
  )
}

export default TableVals