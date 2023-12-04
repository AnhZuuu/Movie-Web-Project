import React, { Component } from 'react'

export default class FooterEx extends Component {
  render() {
    return (
      <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Exclusive Movies</h5>
                <p class="grey-text text-lighten-4">Have a nice time watching movies.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="/contact">Contact</a></li>
                  <li><a class="grey-text text-lighten-3" href="/about">About us</a></li>
                  <li><a class="grey-text text-lighten-3" href="/news">News</a></li>
                  <li><a class="grey-text text-lighten-3" href="/">Home</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2023 Đặng Anh Vũ
            
            <div>
            <br/>
            <a class="grey-text text-lighten-4 right" href="/">Return Home</a>
            </div>
            
            </div>
          </div>
        </footer>
    )
  }
}