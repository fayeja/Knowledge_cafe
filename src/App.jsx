import { useState } from 'react'
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Blog from './components/Blog/Blog';
import { ToastContainer } from 'react-toastify';
  
const App = () => {

  const [count, setCount] = useState(0)
  
  return (
    <div className='App'>
      <Header></Header>
      <Blog></Blog>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;