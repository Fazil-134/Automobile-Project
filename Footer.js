import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2>Godspeed Automobiles</h2>
                    <p>Your one-stop destination for quality car parts and accessories.</p>
                </div>
                <div className="footer-section contact">
                    <h2>Contact Us</h2>
                    <p>Email: support@godspeed.com</p>
                    <p>Phone: +91 8590385729</p>
                </div>
                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/latest-products">Products</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Godspeed Automobiles. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
