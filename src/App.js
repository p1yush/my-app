import React from 'react';
import './App.css';
import Header from "./Header";
import Section from "./Section";
import skilladd from './skilladd';
import Skills from "./Skills";



function App() {
  return (
    <>
    <Header />
    <Section />
    <div className = "skills">
    <h1>Skills</h1>
    {skilladd.map((add) => (
      <Skills 
        key = {add.id}
        name = {add.name}
      />
      ))}
      </div>
    </>
  );
}

export default App;
