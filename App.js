import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import { Link, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import Slide from './components/Slide';
import Detail from './components/Detail';
import Contact from './components/Contact';
import News from './components/News';
import About from './components/About';
import MoviePre from './components/MoviePre.js';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
//import Dashboard from './components/Dashboard.js';
import Dashboard from './components/Dashboard.js';
import Add from './components/Add.js';
import LoginByGG from './components/Intro/LoginByGG.js';
// import jwt_decode from 'jwt-decode';
function App() {

  const [user, setUser] = useState({})
  function handleCallBackResponse(response) {
    console.log("Encode JWT ID token: " + response.credential);
    var decoded = jwtDecode(response.credential);
    setUser(decoded);
    document.getElementById('signInDiv').hidden = true;
    // var userObject = jwt_decode(response.credential);
  }
  const handleLogOut = (e) => {
    setUser({});
    document.getElementById('signInDiv').hidden = false;
  }

  useEffect(() => {
    /* global google*/
    window.onload = function () {
      google.accounts.id.initialize({
        client_id: "1073671516569-f78dsslte5hclh6mtjbfdv2s9b9t26tq.apps.googleusercontent.com",
        callback: handleCallBackResponse
      });
      google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        { theme: "outline", size: "large" }  // customization attributes
      );
      google.accounts.id.prompt(); // also display the One Tap dialog
    }
  }, []);
  return (
    <>
      <Navigation/>
      <div id='signInDiv'></div>
      {Object.keys(user).length != 0 &&
        <a onClick={handleLogOut}>
          <Link to="/">Logout</Link></a>
      }
      {user &&
        <div className='Dashboard-css'>
          <p>
            <Link to="/dashboard">
              Dashboard
            </Link>
          </p>
          <h5>{user.name}</h5>
          
        </div>
      }
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/detail/:id' element={<Detail />} ></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/news' element={<News />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/add' element={<Add />}></Route>
      </Routes>
      {/* <LoginByGG/> */}
      <Footer />
    </>
  );
}

export default App;
