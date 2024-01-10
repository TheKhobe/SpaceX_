import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import "../App.css";
import RocketFold from "./RocketFold";
import SearchBox from "./SearchBox";
function Section() {
  const API_URL = "https://api.spacexdata.com/v3/rockets/";
  const [data, setData] = useState([]);
 
  const [searchInput, setSearchInput] = useState('')
  // get rockets function v2
  const getRockets = async () => {
    const { data } = await axios.get(`${API_URL}`)
   
    setData(data);
    console.log('data', data)
  };

  useEffect(() => {
    getRockets();
  }, []);

  const rockets = useMemo(() => {
    if(searchInput) {
      return data?.filter(data=>data.rocket_name.toLowerCase().includes(searchInput.toLowerCase()))
    } return data
  }, [searchInput, data])

  return (
    <div className="App min-h-[calc(100vh-100px)]">
      <SearchBox 
        setSearchInput={setSearchInput}
      />
      <div className="flex justify-center">
      </div>
  
      <div className="md:grid grid-cols-2 gap-2 p-4">
        {data && rockets?.map((rocket) => (
          <RocketFold key={rocket.id} rocket={rocket} />
        ))}
        {
          data && rockets.length < 1 && <p>No rocket Launched!</p>
        }
      </div>
    </div>
  );
}

export default Section;
