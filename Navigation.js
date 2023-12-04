import { useEffect } from 'react'
import React, { Component } from 'react'
import LoginByGG from './Intro/LoginByGG'
export default class Navigation extends Component {
    
    // function handleCallBackResponse(response) { 
    //     console.log("Encode JWT ID token: " + response.credential);
    //   }
    
    //   useEffect(() => {
    //     /*global google */
    //     google.accounts.id.initialize({
    //       client_id: "1073671516569-f78dsslte5hclh6mtjbfdv2s9b9t26tq.apps.googleusercontent.com",
    //       callback: handleCallBackResponse
    //     })
    
    //     google.accounts.id.renderButton(
    //       document.getElementById("signInDiv"),
    //       {theme: "outline", size: "large"}
    //     );
    //   }, [])
    render() {
        return (
            
                <nav class='nav-bar'>
                  <img src='assets/Anh-Vu-30-10-2023.png'/>
                    <ul>
                        <li><a className='active' href='/'>Home</a></li>
                        <li><a href='news'> News</a></li>
                        <li><a href='about'>About</a></li>
                        <li><a href='contact'>Contact</a></li>
                        {/* <li><LoginByGG/></li> */}
                        <li><div id="signInDiv"></div></li>
                        
                    </ul>
                </nav>
            
        )
    }
}