import React from 'react';
import {Routes, Route } from 'react-router-dom';
import './App.css';
import Section from "./components/Section";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";


function App() {
  return (
    <>
    <Routes>
      <Route exact path="/" element={ <Section />}/>
      <Route exact path="/about" element={ <About />}/>
      <Route exact path="/skill" element={ <Skill />}/>
      <Route exact path="/work" element={ <Work />}/>
    </Routes>
    </>
  );
}

export default App;
