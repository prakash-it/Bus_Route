import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import image1 from '../img1.jpg'
import '../index.css'

export default function Home() {
  return (
    <div>
      <div className="card cardDesign">
        <img src={image1} className="card-img-top" alt="this is image 1"/>
          <div className="card-body">
            <h5 className="card-title">TownBus</h5>
            <p className="card-text">"The greatest discoveries have come from people who have looked at a standard situation and seen it differently.” “I soon realized that no journey carries one far unless, as it extends into the world around us, it goes an equal distance into the world within.”</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
      </div>
    </div>
  )
}

