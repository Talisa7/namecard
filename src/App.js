import Header from './component/Header';
import './App.css';
import Main from './component/Main';
import Footer from './component/Footer';
import Background from './images/pink.jpg';
import { useState } from 'react';

function App() {
  const [skills, setSkills] = useState("My name is Talisa")

  const handleName =()=>{
    setSkills("My name is Talisa")
  }

  const handleSkills=()=>{
    setSkills("I am a Front-end Developer")
  };
  return (

    <>
      <div className="container">
        <div>
        <Header tech={skills} />
        <Main handleName={handleName} handleSkills={handleSkills}/>
        <Footer/>
        </div>
        

      </div>
    
    
    
    
    
    
    </>
    


  );
}

export default App;
