import React from 'react'
import "./index.css"
import sample from"./sample.jpg"
import search from "./search.png"
function Header(){
    return(
        <>
        <div className="container">
    <div className='box-1'>
		<div className="pos-1">
		     <img src={sample} alt="user" height="50px" width="50px" />
		     <span className="s-1">Login To Paytm!</span>
	    </div>
	    <div className="pos-2">
	    	<img src={search} alt="user" height="45px" width="45px" />
	    </div>
    </div>
</div>
        </>
    )
}
export default Header;