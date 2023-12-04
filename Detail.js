import React, { Component, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { MovieData } from '../shared/ListofMovies'
import { useState } from 'react';
// import { Button} from 'react-bootstrap';
import ModalCase from './ModalCase';

export default function Detail() {
  const [isOpen, setIsOpen] = useState(false);
  // const userName = useParams();
  // const movie = MovieData.find(obj => {
  //   return obj.id === userName.id;
  // });
  //  let cost = player.cost.toLocaleString();
  const {id} = useParams();
  const [data, setData] = useState([])
  useEffect(() => {
    fetch(`https://6533531ed80bd20280f66792.mockapi.io/Movie/${id}`)
      .then(response => response.json())
      .then(data => { setData(data) })

  }, []);
  return (
    <div className='container'>
      <div className='product-card'>
        <div className='badge'>{data.name}</div>
        <div className='product-tumb'>
          <img src={`../${data.big}`} alt='' />
        </div>
        <div className='product-details'>
          {/* <h4>{player.club}</h4>
				<div className='product-price'>Market value: €{cost}</div> */}
        <a onClick={() => setIsOpen(true)} className="btn-floating halfway-fab waves-effect waves-light red">
            <icon>Demo</icon>
          </a>
          <p className='director' style={{color: 'white'}}>Đạo diễn: {data.producer}</p>
          <p style={{color: 'white'}}> <br/> {data.info}</p>
          
        {isOpen && <ModalCase setIsOpen={setIsOpen} movie={data}/>}
          <div className='product-bottom-details'></div>
        </div>
      </div>
    </div>
  )

}
