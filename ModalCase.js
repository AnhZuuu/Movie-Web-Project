import React from 'react'
import { MovieData } from '../shared/ListofMovies'

export default function ModalCase({ setIsOpen, movie }) {
    return (
        <div className='modal-show' onClick={() => setIsOpen(false)}>
            <div id="modal1" className="modal" style={{ display: 'block', top: '35%' }}>
                <div className='modal-content'>
                    <h4>Video for</h4>
                    <p><iframe width="100%" height="400px" src={movie.clip} frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write;encryted-media; gyroscope; picture-in-picture" allowFullScreen/></p>
                </div>
                <div className='modal-footer'>
                    <a className='modal-close red text'>Close</a>
                </div>
            </div>
        </div>
    )
}
