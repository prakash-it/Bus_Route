import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import image1 from '../img1.jpg'
import image2 from '../img2.jpg'
import image3 from '../img3.webp'
import '../index.css'

export default function Home() {
  return (
    <div>
      {/*=================================== first row ===================================== */}
      <div class="row col-lg-12">
        <div class="col-sm-3 mb-3 mb-sm-0 cardDiv">
          <div class="card">
            <img className='myImage' src={image1} alt='busImage'/>
            <div class="card-body">
              <h5 class="card-title">Point to Point Bus</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card">
          <img className='myImage' src={image2} alt='busImage'/>
            <div class="card-body">
              <h5 class="card-title">Town Buses</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card">
          <img className='myImage' src={image3} alt='busImage'/>
            <div class="card-body">
              <h5 class="card-title">SETC Buses</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>        
      </div>
      {/*=================================== Second row ===================================== */}
      <div class="row col-lg-12">
        <div class="col-sm-3 mb-3 mb-sm-0 cardDiv">
          <div class="card">
            <img className='myImage' src={image1} alt='busImage'/>
            <div class="card-body">
              <h5 class="card-title">Point to Point Bus</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card">
          <img className='myImage' src={image2} alt='busImage'/>
            <div class="card-body">
              <h5 class="card-title">Town Buses</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card">
          <img className='myImage' src={image3} alt='busImage'/>
            <div class="card-body">
              <h5 class="card-title">SETC Buses</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>        
      </div>
    </div>
  )
}

