import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Create from './components/Create';
import Login from './components/Login';
import Logout from './components/Logout';
import Update from './components/Update';
import Register from './components/Register';
import Private from './components/Private';
import Category from './components/Category';
import AllCate from './components/AllCate';
import UpdateCat from './components/UpdateCat';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route element={<Private/>}>
        <Route path='/' element={<Home/>} />      
        <Route path='/all' element={<AllCate/>} />
        <Route path='/create' element={<Create/>} />
        <Route path='/update/:id' element={<Update/>} />
        <Route path='/category' element={<Category/>} />
        <Route path='/update_cat/:id' element={<UpdateCat/>} />
        </Route>
        <Route path='/login' element={<Login/>} />
        <Route path='/logout' element={<Logout/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
