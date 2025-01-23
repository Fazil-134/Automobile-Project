import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <h1 className="logo">Godspeed Autoworks</h1>
                <nav className="navbar">
                    <ul className="nav-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/latest-products">Latest Products</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/signup">Sign Up</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
