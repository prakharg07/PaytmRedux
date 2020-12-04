import React from 'react';
import {showMore} from './Action'
import {connect } from 'react-redux'
import Reducer from './Reducer'
import sample from"./sample.jpg"
function Panel(props){
    return(
        <>
		         
        <div class="b-2">
         {props.title.map((todo)=>(<>
            <div class="b-3">
            <img src={sample} alt="user-panel" height="60px" width="60px" />
            <p class="b-4">{todo.title}</p>
             </div>
             </>
         ))}
         </div>
         <div className="pos-5">
		        <img src={sample} alt="user-panel" height="60px" width="60px" />
		        <img src={sample} alt="user-panel" height="60px" width="60px" />
               <span class="b-7"> <button onClick={props.showMore}>Click</button></span>
		     </div>
        < div className="pos-6">
		    <p><span className="s-5">Mobile Prepaid</span></p>
	        <p><span className="s-11">Electricity</span></p>
	       <span class="b-7"><p><span className="s-7">Show More</span></p></span>
		     </div> 
        
        </>
    )
}
const mapStateToProps = state =>{
    return {
      title:state.data,
      imgsrc:state.data
    }
}
const mapDispatchToProps=dispatch =>{
   return{
       showMore:() =>dispatch(showMore())
   }
}
export default connect(
	mapStateToProps,mapDispatchToProps
	)(Panel);