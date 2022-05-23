import React from 'react';
import { connect } from 'react-redux';
import { simpleAction } from './actions/simpleAction'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss'
import './Helper.scss'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/login/Login';
import Register from './components/login/Register';
import Home from './pages/Home';

    
const App = ({simpleAction})=> {

    return (
      <BrowserRouter>
        <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/user/login' element={<Login/>}></Route>
        <Route path='/user/register' element={<Register/>}></Route>
      </Routes>
       <Footer/>
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
