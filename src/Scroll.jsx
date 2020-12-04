import React from 'react'
import "./index.css"
import sample from"./sample.jpg"
function Scroll(){
    return(
        <>
        <div className="picture-card">
		 <img src={sample} alt="Coding is great" height="100px" width="100px" />
		  <div className="text-box">
		   <p className="p-5">Mobiles</p>
		  </div>
		</div>
        </>
    )
}
export default Scroll;