import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Icon } from 'react-materialize';

const URL = 'https://6533531ed80bd20280f66792.mockapi.io/Movie';
const Dashboard = () => {


  const [data, setData] = useState([])
  useEffect(() => {
    fetch(`${URL}`)
      .then(response => response.json())
      .then(data => { setData(data) })

  }, []);

  const [film, setMovie] = useState([]);

    const getMovie = async () => {
        const res = await axios.get(`${URL}`);
        setMovie(res.data)
    }
    const isLogin = localStorage.getItem("isLogin");
    useEffect(() => {
        getMovie();
    }, [isLogin]);

    const handleDelete = async (id) => {
        if (window.confirm(`Are you sure delete this movie?`)) {
            const res = await axios.delete(`${URL}/${id}`);
            if (res.status === 200) {
                getMovie();
                toast.success("Deleted Successfully ~");
            } else {
                toast.error("Delete: Error!");
            }
        }
    }
  return (
    <>
    <div className="btn-add">
                <Link to={'/add'}>
                    <p>Add</p>
                </Link>
            </div>
    <div className='row'>
      {data.map((movie) => (
       <table>
       <thead>
           <tr>
               <th>Name</th>
               <th>Image</th>
               <th>producer</th>
               <th>info</th>
               <th>clip</th>
               <th>Edit</th>
               <th>Delete</th>
           </tr>
       </thead>
       <tbody>
           {data && data.map((movie) => {
               // if (product.bestseller === true)
               return (
                   <tr key={movie.id}>
                       <td>{movie.name}</td>
                       <td><img className='table-img' src={movie.image} /></td>
                       <td>{movie.producer}</td>
                       <td>{movie.info}</td>
                       <td>{movie.clip}</td>
                       <td>
                           <Link to={`/update/${movie.id}`}
                           ><EditIcon><button>Update</button></EditIcon>
                           </Link>
                       </td>
                       <td>
                           <button onClick={() => handleDelete(movie.id)}><DeleteIcon style={{color:"red"}}>Delete</DeleteIcon></button>
                       </td>
                   </tr>)
           })}
       </tbody>
   </table>
      ))}


    </div>
    </>
  )
}

export default Dashboard;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { Link } from 'react-router-dom';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import '../style/dashboard.css';
// const URL = 'https://6533531ed80bd20280f66792.mockapi.io/Movie';

// const Dashboard = () => {

//     const [film, setMovie] = useState([]);

//     const getMovie = async () => {
//         const res = await axios.get(`${URL}`);
//         setMovie(res.data)
//     }
//     const isLogin = localStorage.getItem("isLogin");
//     useEffect(() => {
//         getMovie();
//     }, [isLogin]);

//     const handleDelete = async (id) => {
//         if (window.confirm('Are you sure that you want to delete this movie?')) {
//             const res = await axios.delete(`${URL}/${id}`);
//             if (res.status === 200) {
//                 getMovie();
//                 toast.success("Deleted Successfully ~");
//             } else {
//                 toast.error("Delete: Error!");
//             }
//         }
//     }
//     return (

//         <div className="staff-table">
//             <div className="btn-add">
//                 <Link to={'/add/'}>
//                     <button className='add-staff-btn'>ADD NEW PRODUCT</button>
//                 </Link>
//             </div>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Image</th>
//                         <th>producer</th>
//                         <th>info</th>
//                         <th>clip</th>
//                         <th>Edit</th>
//                         <th>Delete</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {film && film.map((film) => {
//                         // if (product.bestseller === true)
//                         return (
//                             <tr key={film.id}>
//                                 <td>{film.name}</td>
//                                 <td><img className='table-img' src={film.image} /></td>
//                                 <td>{film.producer}</td>
//                                 <td>{film.info}</td>
//                                 <td>{film.clip}</td>
//                                 <td>
//                                     <Link to={`/update/${film.id}`}
//                                     ><EditIcon><button>Update</button></EditIcon>
//                                     </Link>
//                                 </td>
//                                 <td>
//                                     <button onClick={() => handleDelete(film.id)}><DeleteIcon style={{color:"red"}}>Delete</DeleteIcon></button>
//                                 </td>
//                             </tr>)
//                     })}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default Dashboard;