import { getAllStarships } from "../services/sw-api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Starships = () => {

  const [starships, setStarships] = useState([])
  useEffect(() => {
    const fetchStarships = async () => {
      const shipData = await getAllStarships()
      console.log("Ship Data: ", shipData);
      setStarships(shipData.results)
    }
    fetchStarships()
  }, [])

  if (!starships.length) return <h1>Loading Starships...</h1>

  return (
    <>
      <div className="card-container">
        {starships.map((starship, idx) => {
          const starshipId = starship.url.slice(21)
          return (
            <button className="ship-card" key={idx}>
              <Link to={`${starshipId}`}>
                {starship.name}
              </Link>
            </button>
          )
        })}
      </div>
    </>
  )
}

export default Starships