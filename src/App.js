import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './Components/Navibar';
import Footer from './Components/Footer';

import {Home} from './Home'
import {Reporttheft} from './Reporttheft'
import {Login}  from './Login';
import { RegistrationForm } from './RegistrationForm';
import { BrowserRouter as Router,Routes ,Route ,Link } from 'react-router-dom';





function App() {


   

  return (
    <>
    <Router>
    <NaviBar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/reporttheft" element={<Reporttheft/>}/>
      <Route path="/login/*" element={<Login/>}/>
      <Route path='/registrationform' element={<RegistrationForm/>}/>
    

      
      

    </Routes>
    </Router>
    <Footer/>
    </>

  );
}

export default App;
