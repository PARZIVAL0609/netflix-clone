import React, { useEffect, useState } from 'react'
import axios from './axios'

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);

    //A snippet of code that runs based on specific conditions
    useEffect(()=>{

        async function fetchData(){
            const request = await axios.get(fetchUrl);
            console.log(request);
            setMovies(request.data.results);
            return request;
        }
        fetchData();

    }, []);
  
    return (
        <div>
            <h2>{title}</h2>

            {/* container --> posters */}

        </div>
    )
}

export default Row
