import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function MoviePre({ moviesParams }) {
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
          <div className='col s4 m3'>
            <div className='card'>
              <div className='card-image'>
                <img src={movie.image} />
                <span className='card-title'>{movie.name}</span>
              </div>
              {/* <p className='title'>{movie.nation} - {movie.year}</p> */}

              <Link to={`detail/${movie.id}`}>
                <p><button>Detail</button></p>
              </Link>

              {/* <p><button onClick={() => { setMovie(movie) }}><a href='#popup1' id='openPopup'>Detail</a></button></p> */}
            </div>
          </div>
          <div id='popup1' className='overlay'>
            <div className='popup'>
              <img src={movie.img} />
              <h4>{movie.name}</h4>
              <a className='close' href='#'>&times;</a>
              <div className='content'>
                {movie.info}
              </div>

            </div>
          </div>
        </div>

      ))}


    </div>
  )
}