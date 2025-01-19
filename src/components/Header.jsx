import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for routing

const Header = ({ loggedIn }) => {
    return (
        <header className="header">
            <div className="logo">

                <Link 
                    to={loggedIn ? "/home" : "/"} 
                    className="text-3xl font-bold text-[#2d1b6e] hover:text-[#9b59b6]"
                >
                    BABBLE
                </Link>
            </div>
        </header>
    );
};

export default Header;
