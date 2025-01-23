import React, { useState } from 'react';
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        console.log({ email, password, rememberMe });
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h2>Login to Godspeed Automobiles</h2>
                <form onSubmit={handleLogin}>
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
                    <div className="form-field remember-me">
                        <label>
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={() => setRememberMe(!rememberMe)}
                            />
                            Remember Me
                        </label>
                        <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
                <div className="redirect-signup">
                    <p>Don't have an account? <a href="/signup">Sign Up</a></p>
                </div>
            </div>
        </div>
    );
}

export default Login;
