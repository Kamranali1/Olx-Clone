import React, { Component } from 'react';
import './App.css';
import './Props.css'
 import Header from "./comps/Header"
 import HomePage from "./comps/Home"; 
import Footer from "./comps/Footer"
import {BrowserRouter, Route, Link} from "react-router-dom"
function App(){
     return(
          <BrowserRouter>
          <Header/>
          <Route path="/" component={HomePage}></Route>
          <Footer/>
          </BrowserRouter>
         );
     
}

export default App;
