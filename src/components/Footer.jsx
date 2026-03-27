import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-about">
                        <div className="logo footer-logo">
                            <span className="logo-sparkle">✨</span>
                            <span className="text-gradient">Get Intern Mania</span>
                        </div>
                        <p className="footer-desc">
                            Empowering students with industry-level skills, practical internships, and verified certifications to build a successful career.
                        </p>
                    </div>

                    <div className="footer-links-col">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#internships">Internships</a></li>
                            <li><a href="#certificates">Certificates</a></li>
                        </ul>
                    </div>

                    <div className="footer-links-col">
                        <h4 className="footer-heading">Support</h4>
                        <ul className="footer-links">
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4 className="footer-heading">Contact Us</h4>
                        <p className="contact-info">📧 support@getinternmania.com</p>
                        <p className="contact-info">📞 +91 98765 43210</p>
                        <div className="social-links">
                            <a href="#" className="social-icon">IN</a>
                            <a href="#" className="social-icon">GH</a>
                            <a href="#" className="social-icon">TW</a>
                        </div>
                    </div>
                </div>

                <div className="footer-cta">
                    <p className="footer-cta-text">Want your personalized internship offer letter?</p>
                    <a 
                        href="https://wa.me/919325490236?text=Hi%20Intern%20Mania,%20I%20want%20to%20get%20an%20internship%20offer%20letter"
                        className="btn btn-primary glow-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        📄 Get Your Offer Letter
                    </a>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Get Intern Mania. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
