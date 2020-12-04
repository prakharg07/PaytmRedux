import React from 'react'
import "./index.css"
import sample from"./sample.jpg"
function Support(){
    return(
      <>
      <div className='box-7'>
		<div className='p-6'>
		<img src={sample} height="50px" width="50px" />
	    </div>
	    <div className='p-7'>
	    	<p className="p-8">24/7 Help and Support</p> <br /> <span class='s1'>Get support on anyting on Paytm</span>
	    </div>
	</div>
	<hr />
      </>
    )
}
export default Support;