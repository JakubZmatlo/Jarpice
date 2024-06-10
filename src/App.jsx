import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../src/Components/Header/Header';
import Footer from '../src/Components/Footer/Footer';
import Home from '../src/Pages/Home/Home';
import Historie from '../src/Pages/Historie/Historie' 
import Aktuality from '../src/Pages/Aktuality/Aktuality'
import Akce from '../src/Pages/Akce/Akce'
import Fotogalerie from '../src/Pages/Fotogalerie/Fotogalerie'
import '../src/App.css';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element = {<Home/>} />
                <Route path="/historie" element = {<Historie/>} />
                <Route path="/aktuality" element = {<Aktuality/>} />
                <Route path="/akce" element = {<Akce/>} />
                <Route path="/fotogalerie" element = {<Fotogalerie/>} />
            </Routes>
        </Router>
    );
}

