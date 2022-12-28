import React from 'react'
import "../sass/homepage.scss"
import Logo from '../images/footer.png'
import Instagram from '../images/icons8-instagram-48.png'
import Facebook from '../images/icons8-facebook-48.png'
import Twitter from '../images/icons8-twitter-squared-48.png'

const Footer = () => {
    return (
        <footer>
            <div className="footer-flex">
                <div className="footer-logo">
                    <img className="footer-logo-img" src={Logo} alt="Logo"/>
                </div>
                <div className="footer-follow">
                    <div className="footer-follow-text">
                        <h2>Follow us on</h2>
                    </div>
                    <div className="footer-follow-logos">
                        <img className="social-logo" src={Instagram} alt="instgram"/>
                        <img className="social-logo" src={Facebook} alt="facebook"/>
                        <img className="social-logo" src={Twitter} alt="twitter"/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
