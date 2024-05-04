import React from 'react'
import img5 from '../img5.jfif'
import img2 from '../img2.jfif'
import img3 from '../img3.jfif'
import '../Components/Nav.css'
export default function About() {
  return (
    <div>
      <div className='ab'>ABOUT US</div>
      <div class="row col-lg-12">
        <div class="col-sm-3 mb-3 mb-sm-0 cardDiv">
          <div class="card">
            <img className='myImage' src={img2} alt='busImage'/>
            <div class="card-body">
              <h5 class="card-title">NAVEEN KUMAR</h5>
         
              <a href="#" class="btn btn-primary">More...</a>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card">
          <img className='myImage' src={img5} alt='busImage'/>
            <div class="card-body">
              <h5 class="card-title">PRAKASH </h5>
              <a href="#" class="btn btn-primary">More...</a>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card">
          <img className='myImage' src={img3} alt='busImage'/>
            <div class="card-body">
              <h5 class="card-title"> DHIVAKAR </h5>
              <a href="#" class="btn btn-primary">More...</a>
            </div>
          </div>
        </div>        
      </div> 
    </div>
  )
}
