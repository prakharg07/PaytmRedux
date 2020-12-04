import React from 'react'
import "./index.css"
import sample from"./sample.jpg"
function Nav(){
    return(
    <>
     <div className="box-2">
	     <div className="pos-3">
	        <img src={sample} alt="user-panel" height="50px" width="50px" />
	        <img src={sample} alt="user-panel" height="50px" width="50px" />
	        <img src={sample} alt="user-panel" height="50px" width="50px" />
	     </div>
	     <div class="pos-4">
	        <p><span class="s-2">Pay</span></p>
	        <p><span class="s-3">Add Money</span></p>
	        <p><span class="s-4">PassBook</span></p>
	     </div>
     </div>
    </>
    )
}
export default Nav;