import React from 'react';
import Headers from './components/Headers';
import "./styles/style.css";
import MainRouter from './MainRouter';
import { BrowserRouter } from 'react-router-dom';

const  App = ()  => {
  return (
      <BrowserRouter>
       <Headers/>
      <MainRouter/>
      </BrowserRouter>    
       
  );
}

export default App;
