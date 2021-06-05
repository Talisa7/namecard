import React from 'react'
import { useState } from 'react'


function Footer() {
    const [count, setCount] = useState(0);
    
    return (
        <>
            <div className="footer">
               <button className="footer1"> <a href='https://www.linkedin.com/in/talisa-foster-72b01771/'target="blank" alt="linkedin profile"> <i className="fab fa-linkedin icon-3x" id="social"></i> </a></button>
                
               <span className="likes">{count}</span>

              <button className="footer2" onClick={() => setCount(count + 1)}> <i className="fas fa-heart icon-3x" id="heart"></i></button>

             </div>
        
        
        
        
        </>
        
    )
}

export default Footer
