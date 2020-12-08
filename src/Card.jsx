import React from 'react'
import "./index.css"
import sample from"./sample.jpg"
import {Link} from "react-router-dom"
function Card(){
    return(
        <>
        <div className="pos-5">
		        <Link to='/mobile'><img src={sample} alt="user-panel" height="60px" width="60px" /></Link>
		        <Link to='/electricity'><img src={sample} alt="user-panel" height="60px" width="60px" /></Link>
		        <Link to='/recharge'><img src={sample} alt="user-panel" height="60px" width="60px" /></Link>
		     </div>
		     <div className="pos-6">
		    <p><span className="s-5">Mobile Prepaid</span></p>
	        <p><span className="s-6">Electricity</span></p>
	        <p><span className="s-7">Cricket</span></p>
		     </div>
        </>
    )
}
export default Card;