import React from 'react';
import ReactDOM from 'react-dom/client';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home'
import English from './components/tests/english/irregularVerbs/English'
import Deutsch from './components/tests/deutsch/unregelmassigeVerben/Deutsch'
import Quiz1 from './components/tests/english/quiz1/Quiz1'


import './App.css'
import Navbar from './components/navbar/Navbar'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/english-Irregular-Verbs" element={<English/>} />
        <Route path="/deutsch-Unregelmassige-Verben" element={<Deutsch/>} />
        <Route path="/quiz1" element={<Quiz1/>} />
      </Routes>
    </div>
  );
}

export default App;
