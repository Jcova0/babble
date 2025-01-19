import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Privacy = () => {
    return (
        <div className="privacy-container">
            <Header />

            <section className="content-container">
                <div className="content">
                    <h2 className="content-title">Privacy Policy</h2>
                    <p className="content-text">
                        At Babble, we value your privacy. This policy explains how we collect, use, and protect your data:
                    </p>
                    <h3>1. Information We Collect</h3>
                    <p className="content-text">
                        We collect personal information such as your name, email, and password when you create an account. We may also collect usage data such as logins and interactions within the app.
                    </p>
                    <h3>2. How We Use Your Information</h3>
                    <p className="content-text">
                        Your information is used to provide and improve our services, personalize your experience, and communicate with you.
                    </p>
                    <h3>3. Data Security</h3>
                    <p className="content-text">
                        We implement industry-standard security measures to protect your personal information.
                    </p>
                    <h3>4. Third-Party Services</h3>
                    <p className="content-text">
                        We may use third-party services to help provide certain features, but we do not share your personal information with them unless necessary.
                    </p>
                    <h3>5. Your Rights</h3>
                    <p className="content-text">
                        You have the right to access, update, or delete your personal data at any time. Please contact us if you have any concerns.
                    </p>
                    <h3>6. Changes to This Policy</h3>
                    <p className="content-text">
                        We may update this Privacy Policy from time to time. You will be notified of any changes.
                    </p>
                    <h3>7. Contact</h3>
                    <p className="content-text">
                        If you have any questions or concerns, please contact us at support@babbleapp.com.
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Privacy;
