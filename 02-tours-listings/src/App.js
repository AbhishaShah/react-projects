import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'
function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,setError] = useState(null);
  
  const fetchTours = async ()  => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if(!response.ok) {
        throw Error("Not able to fetch the data");
      }
      const tours = await response.json();
      setTours(tours);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }

  const removeTour = id => {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <main>
      {loading && !error ? <Loading /> :
        error ? <div>{error}</div> :
        tours.length === 0 ? 
          <div className="title">
            <h2>No tours left</h2>
            <button className="btn" onClick={fetchTours}>Refresh</button>
          </div> : 
        <Tours tours={tours} removeTour={removeTour}/>
      
      }

    </main>
  )
}

export default App
