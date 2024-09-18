import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-wavy-bg">
                    <div class="footer-quotes">
                        <div className="quote-item">
                            <h2>Paramedic Prep-Pro</h2>
                            <p>"The new Learning wave..."</p>
                        </div>
                        <div className="quote-item">
                            <h2>Dynamic</h2>
                            <p>"A young and hip transformation to Learning"</p>
                        </div>
                        <div className="quote-item">
                            <h2>Mentor</h2>
                            <p>"A Journey of a Thousand miles begins with one step..."</p>
                        </div>
                        </div>
                    </div>
                    <div className="footer-links-bg">
                        <div className="footer-links">
                        <div className="footer-column">
                            <h3>About</h3>
                            <ul>
                            <li><a href="/about">About</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/">Resources</a></li>
                            <li><a href="/">Reviews</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h3>Legal</h3>
                            <ul>
                            <li><a href="/">Site Terms</a></li>
                            <li><a href="/">Privacy</a></li>
                            <li><a href="/">Terms & Conditions</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h3>Other stuff</h3>
                            <ul>
                            <li><a href="/">Blog</a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
            </footer>

        </>
    )
}

export default Footer;