import React, { useState } from 'react';
import Button from '../Button';
import Header from '../Header';
import Footer from '../Footer';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords don't match!");
            return;
        }

        console.log('Signed up with:', { email, password });
    };

    return (
        <div className="auth-container">
            <Header />

            <section className="auth-form">
                <div className="form-container">
                    <h2 className="form-title">Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-actions">
                            <Button label="Sign Up" type="submit" className="btn-primary" />
                        </div>
                    </form>

                    <div className="auth-switch">
                        <p>Already have an account? <a href="/login">Log In</a></p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Signup;
