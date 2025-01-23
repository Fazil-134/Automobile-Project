import React, { useState } from 'react';
import './SignUp.css';

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [acceptTerms, setAcceptTerms] = useState(false);

    const handleSignUp = (e) => {
        e.preventDefault();
        console.log({ name, email, password, confirmPassword, acceptTerms });
    };

    return (
        <div className="signup-page">
            <div className="signup-container">
                <h2>Create Your Godspeed Automobiles Account</h2>
                <form onSubmit={handleSignUp}>
                    <div className="form-field">
                        <label>Full Name</label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-field">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-field">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-field">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-field terms">
                        <label>
                            <input
                                type="checkbox"
                                checked={acceptTerms}
                                onChange={() => setAcceptTerms(!acceptTerms)}
                                required
                            />
                            I accept the <a href="/terms">Terms & Conditions</a>
                        </label>
                    </div>
                    <button type="submit" className="signup-button">Sign Up</button>
                </form>
                <div className="redirect-login">
                    <p>Already have an account? <a href="/login">Login</a></p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
