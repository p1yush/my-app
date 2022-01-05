import React from 'react';
import {Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Section from "./components/Section";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import { AnimatePresence } from 'framer-motion';


function App() {
  const location = useLocation();
  return (
    <>
    <AnimatePresence exitBeforeEnter>
    <Routes location={location} key={location.pathname}>
      <Route exact path="/" element={ <Section />}/>
      <Route exact path="/about" element={ <About />}/>
      <Route exact path="/skill" element={ <Skill />}/>
      <Route exact path="/work" element={ <Work />}/>
    </Routes>
    </AnimatePresence>
    </>
  );
}

export default App;
