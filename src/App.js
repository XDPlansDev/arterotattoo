import React, { Component } from "react";
 
// use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// import stylesheets
import "./App.scss";

// import all the components we need in our app
import Admin from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import NoPage from './components/NoPage';
import TattooArtists from './components/TattooArtists';
import Footer from './components/Footer';
import Kyle from './components/Artists/Kyle';
import Bailey from './components/Artists/Bailey';
import Jenn from './components/Artists/Jenn';
import Matt from './components/Artists/Matt';
import Melyssa from './components/Artists/Melyssa';
import FAQ from './components/FAQ'; 
import OurWork from './components/Gallery/Our-Work'
import TattooRemoval from './components/TattooRemoval'; 
import Piercings from "./components/Piercings";

const App = () => {
 return (
   <div>
     <Header /> 
     <Routes>
      <Route path="/Tattoo-Parlor" element={<Home />} /> 
      <Route path="admin" element={<Admin/>} />
      <Route path="/edit/:id" element={<Edit/>} />
      <Route path="/create" element={<Create/>} />
      <Route path="/about" element={<About/>} /> 
      <Route path="*" element={<NoPage/>} /> 
      <Route path="/tattooartists" element={<TattooArtists/>} /> 
      <Route path="/Kyle" element={<Kyle/>} /> 
      <Route path="/Bailey" element={<Bailey/>} /> 
      <Route path="/Jenn" element={<Jenn/>} /> 
      <Route path="/Matt" element={<Matt/>} /> 
      <Route path="/Melyssa" element={<Melyssa/>} /> 
      <Route path="/FAQ" element={<FAQ/>} /> 
      <Route path="/OurWork" element={<OurWork/>} /> 
      <Route path="/TattooRemoval" element={<TattooRemoval/>} />
      <Route path="/Piercings" element={<Piercings/>} />
     </Routes>
     <Footer />
   </div>
 );
};
 
export default App;
