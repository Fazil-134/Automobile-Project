import React from 'react';
import './LatestProducts.css'; 

const products = [
    { id: 1, name: 'Car Brake Pad', price: '₹2,499', image: '/images/product1.jpg' },
    { id: 2, name: 'Engine Oil', price: '₹899', image: '/images/product2.jpg' },
    { id: 3, name: 'Air Filter', price: '₹549', image: '/images/product3.jpg' },
    { id: 4, name: 'Car Battery', price: '₹4,999', image: '/images/product4.png' },
    { id: 5, name: 'Spark Plug', price: '₹299', image: '/images/product5.png' },
    { id: 6, name: 'Windshield Wiper', price: '₹499', image: '/images/product6.jpg' },
    { id: 7, name: 'Car Tyre', price: '₹5,999', image: '/images/product7.jpg' },
    { id: 8, name: 'LED Headlight', price: '₹1,999', image: '/images/product8.png' },
    { id: 9, name: 'Suspension Kit', price: '₹12,499', image: '/images/product9.jpg' },
    { id: 10, name: 'Car Mat', price: '₹999', image: '/images/product10.jpg' },
    { id: 11, name: 'Alloy Wheel', price: '₹8,499', image: '/images/product11.jpg' },
    { id: 12, name: 'Car Cover', price: '₹2,199', image: '/images/product12.jpg' },
    { id: 13, name: 'Steering Wheel Cover', price: '₹899', image: '/images/product13.jpg' },
    { id: 14, name: 'Car Seat Cover', price: '₹4,799', image: '/images/product14.jpg' },
    { id: 15, name: 'Car Air Freshener', price: '₹299', image: '/images/product15.jpg' },
];

const LatestProducts = () => {
    return (
        <div className="latest-products">
            <h2>Products from Godspeed</h2>
            <div className="product-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p className="price">{product.price}</p>
                        <button className="buy-button">Buy Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LatestProducts;
