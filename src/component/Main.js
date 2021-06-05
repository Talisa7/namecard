import React from 'react'

function Main({handleName,handleSkills}) {
    return (
        <>
            <div className="main">
                 <button className="name" onClick={handleName}>Name</button>

                 <button className="skills" onClick={handleSkills}>Skills</button>
            </div>  
        
        
        
        
        
        </>

    )
}

export default Main
