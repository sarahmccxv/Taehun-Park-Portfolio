import React, { useState, useEffect } from 'react';
import { Link, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import profilePic from './images/profile_pic.jpg';
import './Navbar.css'

export default function Navbar () {
    const [activeLink, setActiveLink] = useState('Hero');

    useEffect(() => {
        Events.scrollEvent.register('begin', function () {}); 
        Events.scrollEvent.register('end', function () {});
    
        scrollSpy.update();
    
        return () => {
          Events.scrollEvent.remove('begin');
          Events.scrollEvent.remove('end');
        };
    }, []);

    const handleSetActive = (to) => {
        setActiveLink(to);
    };

    return (
        <div className='nav-panel'>

            <img src={profilePic} alt='' />
            <h1>TAEHUN PARK</h1>

            <ul className='nav-list'>
                <Link to='Hero' spy={true} smooth={true} offset={0} duration={400} onSetActive={handleSetActive}>
                    <li>HOME</li>
                </Link>


                <Link to='Photography' spy={true} smooth={true} offset={0} duration={400} onSetActive={handleSetActive}>
                    <li>PHOTOGRAPHY</li>
                </Link>

                <Link to='Modelling' spy={true} smooth={true} offset={0} duration={400} onSetActive={handleSetActive}>
                    <li>MODELLING</li>
                </Link>

                <Link to='Contact' spy={true} smooth={true} offset={0} duration={400} onSetActive={handleSetActive}>
                    <li>ABOUT ME</li>
                </Link>
            </ul>
        </div>);
}
