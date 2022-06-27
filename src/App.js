import React from 'react';

import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './Header';
import Sidebar  from './Sidebar';
import Mail from './Mail';
import EmailList from './EmailList';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';


  

 
function App() {
  return (
    <Router>
     <div className="app">
     <Header></Header>
     
     <div className='app_body'>
     <Sidebar />
     <Routes>
   <Route path="Mail/" element={<Mail />} />
   <Route path="/" element={<EmailList />} />
 </Routes>

  
     
     
   

     </div>
     </div>
    </Router>
  );
}

export default App;
