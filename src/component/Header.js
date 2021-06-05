import mypicture from '../images/IMG-8332.JPG'



import React from 'react'

function Header({tech}) {
    return (    
    <> 
    <div className="header">
        <div className="image">   
        <img src={mypicture} alt="profile" />
        </div>
        <p> Hello! {tech} </p>
    </div>


    </>
    )
}

export default Header
