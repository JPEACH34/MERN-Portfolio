import TableContent from "./TableContent"
import api from "../lib/axios";
import { useState, useEffect} from "react";

const LanguagesWorkloads = () => {
  const [tables, setTables] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTables = async () => {
      try{
        const res = await api.get("/tables");
        setTables(res.data);
      }catch(error){
        console.log("Error fetching Experience Tables");
      }finally{
        setLoading(false);
      }
    }

    fetchTables();
  }, []);

  return (
    <div className="flex-col justify-center p-4">
      {tables.length > 0 && (
        <div>
          {tables.map(table => (
            <div key={table._id}>
              <h3 className="flex justify-center font-light text-4xl p-4 pt-16">
              {table.title}s
              </h3>
              <TableContent table={table}/>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguagesWorkloads