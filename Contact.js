import React, { useState } from 'react';
import './Contact.css';  

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', number: '', message: '' });

    const handleInputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Your message has been submitted!');
    };

    return (
        <section className="contact" id="contact">
            <h2 className="section_title">Contact Us</h2>
            <div className="section_container">
                <div className="contact_container">
                    <div className="contact_form">
                        <form onSubmit={handleSubmit}>
                            <div className="field">
                                <label htmlFor="name">Full Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    placeholder="Your Name" 
                                    value={form.name} 
                                    onChange={handleInputChange} 
                                    required 
                                />
                            </div>
                            <div className="field">
                                <label htmlFor="email">Your Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    placeholder="Your Email" 
                                    value={form.email} 
                                    onChange={handleInputChange} 
                                    required 
                                />
                            </div>
                            <div className="field">
                                <label htmlFor="number">Your Number</label>
                                <input 
                                    type="number" 
                                    id="number" 
                                    name="number" 
                                    placeholder="Your Contact Number" 
                                    value={form.number} 
                                    onChange={handleInputChange} 
                                    required 
                                />
                            </div>
                            <div className="field">
                                <label htmlFor="message">Your Message</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    placeholder="Your Message" 
                                    value={form.message} 
                                    onChange={handleInputChange} 
                                    required 
                                />
                            </div>

                            <button className="button" type="submit">Submit</button>
                        </form>
                    </div>

                    <div className="contact_text">
                        <div className="contact_items">
                            <i className="bx bx-current-location"></i>
                            <div className="contact_details">
                                <h3>Our Location</h3>
                                <p>Anna Nagar, Chennai</p>
                            </div>
                        </div>
                        <div className="contact_items">
                            <i className="bx bxs-envelope"></i>
                            <div className="contact_details">
                                <h3>General Enquiries</h3>
                                <p>contact@godspeedautomobile.com</p>
                            </div>
                        </div>
                        <div className="contact_items">
                            <i className="bx bxs-phone-call"></i>
                            <div className="contact_details">
                                <h3>Call Us</h3>
                                <p>+91 8590385729</p>
                            </div>
                        </div>
                        <div className="contact_items">
                            <i className="bx bxs-time-five"></i>
                            <div className="contact_details">
                                <h3>Our Timing</h3>
                                <p>Mon-Sun: 09:00 AM - 11:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
