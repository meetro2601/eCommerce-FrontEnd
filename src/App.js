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
import Shop from './components/shop/Shop';
import Blog from './components/blog/Blog';
import Galary from './components/galary/Galary';
import Singleblog from './components/singleblog/Singleblog';


const App = ({ simpleAction }) => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/user/login' element={<Login />}></Route>
        <Route path='/user/register' element={<Register />}></Route>
        <Route path='/compare' element={<Compare/>}></Route>
        <Route path='/wishlist' element={<Wishlist/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/blog' element={
          <div className='row'>
                <div className='col-md-9'>
              <Blog/>
              </div>
              <div className='col-md-3'>
              <Galary/>
              </div>
          </div>
          
      } />
        <Route path='/signalblog' element={
          <div className='row'>
                <div className='col-md-9'>
              <Singleblog/>
              </div>
              <div className='col-md-3'>
              <Galary/>
              </div>
          </div>
          
      } />


      </Routes>
      <Footer />
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
