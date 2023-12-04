import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function News({ moviesParams }) {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch(`https://6533531ed80bd20280f66792.mockapi.io/Movie/`)
      .then(response => response.json())
      .then(data => { setData(data) })

  }, []);

  return (
    <div className='row'>
      {data.map((movie) => (
        <div key={movie.id}>
          <div className='col s6 m6'>
            <div className='card'>
              <div className='card-image'>
                <img src={movie.ads} />
                {/* <span className='card-title'>{movie.name}</span> */}
              </div>
            </div>
          </div>
        </div>

      ))}


    </div>
  )
}