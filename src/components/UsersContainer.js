import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'
import sample from "./sample.jpg"
function UsersContainer ({userData,fetchUsers}) {
  
  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <>
		         
        <div class="b-2">
         {userData.users.map(user=>(<>
            <div class="b-3">
            <img src={sample} alt="user-panel" height="60px" width="60px" />
            <p class="b-4">{user.name}</p>
             </div>
             </>
         ))}
         </div>
         <div className="pos-5">
		        <img src={sample} alt="user-panel" height="60px" width="60px" />
		        <img src={sample} alt="user-panel" height="60px" width="60px" />
               <span class="b-7"> <button onClick={fetchUsers}>Click</button></span>
		     </div>
        < div className="pos-6">
		    <p><span className="s-5">Mobile Prepaid</span></p>
	        <p><span className="s-11">Electricity</span></p>
	       <span class="b-7"><p><span className="s-7">Show More</span></p></span>
		     </div> 
        
        </>
    )
}

const mapStateToProps = state => {
  return {
    userData: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer)
