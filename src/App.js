//import { useState, useEffect } from 'react';

import './App.css';
import NavBar from './NavBar';
import Home from './home';
import MyProjects from './myProjects';
import Education from './education';
import Contact from './contact';


function App() {
  let component;
  switch (window.location.pathname) {
    case '/home':
      component = <Home />
      break
    case '/myProjects':
      component = <MyProjects />
      break
    case '/education':
      component = <Education />
       break
    case '/contactForm':
      component = <Contact />
      break
    default: 
      component = <Home />
  }
  return (
    <div>
     <NavBar /> 
     {component}      
    </div>

  
  );
  }
export default App;
