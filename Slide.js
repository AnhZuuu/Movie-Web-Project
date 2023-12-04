import React, { Component } from 'react'

export default class Slide extends Component {
    
    render() {
        return (
            <div>
                
                <div class="slideshow-container">
                    
                    <div class="mySlides fade">
                        <div class="numbertext">1 / 3</div>
                        <img src="assets/avenger.jpg"/>
                            <div class="text">Avenger</div>
                    </div>

                    <div class="mySlides fade">
                        <div class="numbertext">2 / 3</div>
                        <img src="assets/sky.png" />
                            <div class="text">Sky ơi, say oh yeah</div>
                    </div>

                    <div class="mySlides fade">
                        <div class="numbertext">3 / 3</div>
                        <img src="assets/genshin.jpg" />
                            <div class="text">Genshin</div>
                    </div>

                    
                    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                    <a class="next" onclick="plusSlides(1)">&#10095;</a>
                </div>
                <br/>

                    
                    <div >
                        <span class="dot" onclick="currentSlide(1)"></span>
                        <span class="dot" onclick="currentSlide(2)"></span>
                        <span class="dot" onclick="currentSlide(3)"></span>
                    </div>
                    
            </div>
        )
        
    }
    
}
