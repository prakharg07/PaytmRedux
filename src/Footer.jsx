import React from 'react'
import "./index.css"
import sample from"./sample.jpg"
const stylecss={
    marginLeft: '50px'
}
function Footer(){
    return(
    <>
        <div className="c-5">
		<span style={stylecss}><img src={sample}height="50px" width="50px" /></span>
		<span style={stylecss}><img src={sample} height="50px" width="50px" /></span>
		<span style={stylecss}><img src={sample} height="50px" width="50px" /></span>
	</div>
	<div className="box-8">
	<div class='s2'>
		<p>Copyright &copy; 2019 Paytm All right reserveed</p>
	</div>
	<br />
	<div className='s2'>
		<p>About Us| Privacy policy |Terms and Conditions</p>
	</div>
	<br />
	<div className='s2'>
		<p>Greivance policy |Blog</p>
	</div>
    </div>
    </>
    )
}
export default Footer;