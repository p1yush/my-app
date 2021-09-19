import React from 'react';
import './App.css';
import Header from "./Header";
import Section from "./Section";
import skilladd from './skilladd';
import Skills from "./Skills";
import Contact from "./Contacts";



function App() {
  return (
    <>
    <Header />
    <Section />
    <div className = "skills">
    <h1>Skills</h1>
    <div className = "skills-display">
    {skilladd.map((add) => (
      <Skills 
        key = {add.id}
        name = {add.name}
        colors = {add.colors} 
      />
      ))}
      </div>
      </div>
      <Contact />
    </>
  );
}

export default App;
