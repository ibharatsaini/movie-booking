import React from 'react'
import "./banner.css"
import BannerBackGound from "../../images/banner.jpg"
function Banner() {
  return (
    <div className='banner-sect' >
            <div className='sect banner' style={{background:`url(${BannerBackGound})`}}>
                    <div style={{zIndex:"3"}}>
                          <h1>
                            <span style={{color:"#31d7a9"}}>BOOK TICKETS</span><br></br> For Movie</h1>
                            </div>
            </div>
    </div>
  )
}

export default Banner