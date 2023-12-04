import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <div>
        <ul class="collection">
    <li class="collection-item avatar">
      {/* <img src="images/yuna.jpg" alt="" class="circle"/> */}
      <span class="title">Name</span>
      <p>First Name : Vũ <br/>
         Last Name : Đặng Anh 
      </p>
      <a href="/" class="secondary-content"><i class="material-icons">Home</i></a>
    </li>
    <li class="collection-item avatar">
      {/* <i class="material-icons circle">folder</i> */}
      <span class="title">City</span>
      <p>Thủ Đức <br/>
         TPHCM
      </p>
      <a href="/" class="secondary-content"><i class="material-icons">Home</i></a>
    </li>
    <li class="collection-item avatar">
      {/* <i class="material-icons circle green">insert_chart</i> */}
      <span class="title">Phone</span>
      <p>0123456789 <br/>
         1098765432
      </p>
      <a href="/" class="secondary-content"><i class="material-icons">Home</i></a>
    </li>
    <li class="collection-item avatar">
      {/* <i class="material-icons circle red">play_arrow</i> */}
      <span class="title">Open Time</span>
      <p>Open 8:00 <br/>
         Close 10:00
      </p>
      <a href="/" class="secondary-content"><i class="material-icons">Home</i></a>
    </li>
  </ul>
        </div>
      </div>
    )
  }
}
