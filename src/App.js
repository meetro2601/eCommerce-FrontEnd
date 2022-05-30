import React from 'react';
import { connect } from 'react-redux';
import { simpleAction } from './actions/simpleAction'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/scss/index.scss'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/login/Login';
import Register from './components/login/Register';
import Compare from './components/compare/Compare';
import Wishlist from './components/wishlist/Wishlist';

import Home from './pages/Home';
import MobileMenu from './components/Header/MobileMenu';


const App = ({ simpleAction }) => {
  return (
    <BrowserRouter>
      <Header />
      <MobileMenu></MobileMenu>
      <main className='main'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/user/login' element={<Login />}></Route>
        <Route path='/user/register' element={<Register />}></Route>
        <Route path='/compare' element={<Compare/>}></Route>
        <Route path='/wishlist' element={<Wishlist/>}></Route>

      </Routes>
      </main>
      <Footer />
      <a id="scroll-top" className="scroll-top show" href="#top" title="Top" role="button"> <i className="w-icon-angle-up"></i> <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70">
            <circle id="progress-indicator" fill="transparent" stroke="#000000" strokeMiterlimit="10" cx="35" cy="35" r="34" style={{strokeDasharray: "188.921, 400"}}></circle>
        </svg> </a>
    </BrowserRouter>
  );
}

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
