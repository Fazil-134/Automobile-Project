import React, { useState, useEffect } from 'react';
import './Home.css';

function Home() {
    const images = ['/images/bg1.jpeg', '/images/bg2.jpeg', '/images/bg3.png', '/images/bg4.jpg'];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); 
        }, 2000); 

        return () => clearInterval(interval); 
    }, [images.length]);

    return (
        <div className="home-page" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
            <div className="home-content">
                <h1>Welcome to Godspeed Automobiles</h1>
                <p>Your trusted source for high-quality automobile parts and accessories.</p>
                <button className="explore-button">Explore Products</button>
            </div>
        </div>
    );
}

export default Home;
