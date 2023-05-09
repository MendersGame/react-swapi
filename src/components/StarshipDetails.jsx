import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getStarshipDetails } from "../services/sw-api";

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const { starshipId } = useParams()
  useEffect(() => {
    const fetchDetails = async () => {
      const shipData = await getStarshipDetails(starshipId)
      setStarshipDetails(shipData)
    }
    fetchDetails()
  }, [starshipId])

  if(!starshipDetails.length) return <h1>Loading Starship...</h1>
  return(
    <main>
      <div className="card-container">
        <div className="ship-details">
          <h2>NAME: {starshipDetails.name}</h2>
          <h2>MODEL: {starshipDetails.model}</h2>
          <Link to="/">RETURN</Link>
        </div>
      </div>
    </main>
  )
}

export default StarshipDetails