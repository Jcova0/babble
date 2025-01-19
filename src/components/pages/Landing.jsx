import React from 'react';
import Button from '../Button';
import Header from '../Header';
import Footer from '../Footer';

const Landing = () => {
    return (
        <div className="landing-container">
            <Header />

            <section className="hero">
                <div className="hero-content text-center">
                    <h1 className="hero-title text-4xl sm:text-5xl font-bold leading-tight">Welcome to Babble</h1>
                    <p className="hero-subtitle mt-4 text-lg sm:text-xl text-gray-700">Where meaningful connections happen.</p>
                    <div className="cta-buttons mt-6 flex justify-center gap-4">
                        <Button label="Log In" to="/login" className="btn-primary w-full sm:w-auto" />
                        <Button label="Sign Up" to="/signup" className="btn-secondary w-full sm:w-auto" />
                    </div>
                </div>
            </section>

            <section className="features bg-white py-12 sm:py-16">
                <div className="features-header text-center mb-12">
                    <h2 className="text-3xl font-bold text-[#6a0dad]">Why Babble?</h2>
                    <p className="mt-2 text-lg text-gray-700">Babble helps you connect with like-minded people easily and safely.</p>
                </div>
                <div className="features-list flex flex-wrap justify-center gap-6">
                    <div className="feature-item bg-gray-100 p-6 rounded-lg shadow-lg max-w-xs">
                        <h3 className="text-xl font-semibold text-[#6a0dad]">Find Your Match</h3>
                        <p className="text-gray-700 mt-2">Whether it's friends, dates, or a new network—find people nearby.</p>
                    </div>
                    <div className="feature-item bg-gray-100 p-6 rounded-lg shadow-lg max-w-xs">
                        <h3 className="text-xl font-semibold text-[#6a0dad]">Smart Messaging</h3>
                        <p className="text-gray-700 mt-2">Babble’s intuitive chat makes communication effortless and fun.</p>
                    </div>
                    <div className="feature-item bg-gray-100 p-6 rounded-lg shadow-lg max-w-xs">
                        <h3 className="text-xl font-semibold text-[#6a0dad]">Verified Profiles</h3>
                        <p className="text-gray-700 mt-2">We care about your safety. Profile verification ensures authenticity.</p>
                    </div>
                </div>
            </section>
            
            <Footer />
        </div>
    );
}

export default Landing;
