import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../src/Components/Header/Header';
import Home from '../src/Pages/Home/Home';
import Aktuality from '../src/Pages/Aktuality/Aktuality';
import Akce from '../src/Pages/Akce/Akce';
import Fotogalerie from '../src/Pages/Fotogalerie/Fotogalerie';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aktuality" element={<Aktuality />} />
          <Route path="/akce" element={<Akce />} />
          <Route path="/fotogalerie" element={<Fotogalerie />} />
        </Routes>
      </div>
    </Router>
  );
}
