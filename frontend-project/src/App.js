import React from 'react';
import './App.css';
import {Route,BrowserRouter as Router,Routes} from 'react-router-dom';
import { Header } from './common/Header';
import Home from './pages/Home';
import { Feautres } from './pages/Feautres';
import { Footer } from './common/Footer';

export default function App(){
  return(
    <>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/feature' element={<Feautres />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}
