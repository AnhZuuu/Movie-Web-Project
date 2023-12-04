// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { Link } from 'react-router-dom';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import '../src/style/dashboard.css';
// import { Icon } from 'react-materialize';
// const URL = 'https://65335286d80bd20280f665f3.mockapi.io/Films';

// const Dashboard = () => {

//     const [film, setMovie] = useState([]);

//     const getMovie = async () => {
//         const res = await axios.get(${URL});
//         setMovie(res.data)
//     }
//     const isLogin = localStorage.getItem("isLogin");
//     useEffect(() => {
//         getMovie();
//     }, [isLogin]);

//     const handleDelete = async (id) => {
//         if (window.confirm(Are you sure delete this movie?)) {
//             const res = await axios.delete(${URL}/${id});
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
//                 <Link to={'/add'}>
//                     <Icon>add_circle_outline</Icon>
//                 </Link>
//             </div>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Image</th>                        
//                         <th>Info</th>
//                         <th>Youtube</th>
//                         {/* <th>Edit</th> */}
//                         <th>Delete</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {film && film.map((film) => {
//                         // if (product.bestseller === true)
//                         return (
//                             <tr key={film.id}>
//                                 <td>{film.name}</td>
//                                 <td><img className='table-img' src={film.img} /></td>                                
//                                 <td>{film.info}</td>
//                                 <td>{film.url}</td>
//                                 {/* <td>
//                                     <Link to={`/update/${film.id}`}
//                                     ><EditIcon><button>Update</button></EditIcon>
//                                     </Link>
//                                 </td> */}
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