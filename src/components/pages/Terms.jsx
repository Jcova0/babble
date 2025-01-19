import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Terms = () => {
    return (
        <div className="terms-container">
            <Header />

            <section className="content-container">
                <div className="content">
                    <h2 className="content-title">Terms of Service</h2>
                    <p className="content-text">
                        Welcome to Babble. By using our services, you agree to the following terms and conditions:
                    </p>
                    <h3>1. Introduction</h3>
                    <p className="content-text">
                        These Terms of Service govern your use of the Babble app. Please read them carefully before using our services.
                    </p>
                    <h3>2. User Responsibilities</h3>
                    <p className="content-text">
                        You are responsible for the content you share and the interactions you have within the app.
                    </p>
                    <h3>3. Privacy</h3>
                    <p className="content-text">
                        Your privacy is important to us. Please refer to our Privacy Policy for more details.
                    </p>
                    <h3>4. Modifications</h3>
                    <p className="content-text">
                        We may update these Terms of Service from time to time. You will be notified of any changes.
                    </p>
                    <h3>5. Contact</h3>
                    <p className="content-text">
                        If you have any questions or concerns, please contact us at support@babbleapp.com.
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Terms;
