import react from 'react';
import {BrowserRouter, Routes ,Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Rover from './pages/Rover';
import Team from './pages/Team';
import Sponsors from './pages/Sponsors';
import Blogs from './pages/Blogs';

export default class RoutesPage extends react.Component{
    render(){
        return (
            <BrowserRouter>
            <Navbar />
            <div>
                <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/rover" element={<Rover/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/MeetTheTeam" element={<Team/>} />
                <Route path="/sponsors" element={<Sponsors/>} />
                <Route path="/blog" element={<Blogs/>} />
                </Routes>
            </div>
            </BrowserRouter>
        );
    }
}