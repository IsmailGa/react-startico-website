import React from 'react'
import {Routes, Route } from 'react-router-dom';
import { Home } from './components/pages/Home';
import {Navbar} from './components/Navbar';
import { Footer } from './components/Footer';
import { About } from './components/pages/About';

function App(){


    return(
      <>
        <Navbar/>
        
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
        </Routes>

        <Footer/>
    </>  
    )
    
}



export default App;
