import React from 'react'
import "./index.css"
import sample from"./sample.jpg"
import {showMore} from './Action'
import {connect } from 'react-redux'
function Card(props){
    return(
        <>
        <div className="pos-5">
		        <img src={sample} alt="user-panel" height="60px" width="60px" />
		        <img src={sample} alt="user-panel" height="60px" width="60px" />
		        <img src={sample} alt="user-panel" height="60px" width="60px" />
		     </div>
		     <div className="pos-6">
		    <p><span className="s-5">Mobile Prepaid</span></p>
	        <p><span className="s-6">Electricity</span></p>
	        <p><span className="s-7">Cricket</span></p>
		     </div>
        </>
    )
}
const mapStateToProps = state=>{
	
}
const mapDispatchToProps =dispatch=>{
	return{
		showMore: () =>dispatch(showMore())
	}
}
export default connect(
	mapStateToProps,mapDispatchToProps
	)(Card);