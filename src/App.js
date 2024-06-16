import React from 'react'; 
import './App.css';

function App() {
  return (
    <div className="App">
        <Name/>
        <College/>
        <Department/>
        <Yearofpassout/>
        <Profession/>
    </div>
  );
}

function Name(){
  return (
    <div>
      <h1>I am Animesh Das</h1>
    </div>
  )
}

function College(){
  return (
    <div>
      <h1>I have graduated from Techno International Batanagar</h1>
    </div>
  )
}

function Department(){
  return (
    <div>
      <h1>I am a graduate in Computer Science</h1>
    </div>
  )
}

function Yearofpassout(){
  return (
    <div>
      <h1>I graduted in 2022</h1>
    </div>
  )
}

function Profession(){
  return (
    <div>
      <h1>I am a software engineer by profession</h1>
    </div>
  )
}

export default App;
