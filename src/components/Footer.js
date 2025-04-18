import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="padding-inline">

            <div className="footer-container">
                <div className="logo-container">
                    <Link className="footer-logo-link" to="/Tattoo-Parlor">
                        <img className="footer-logo" src={process.env.PUBLIC_URL + "/images/Footer/footer-logo.png"} alt=""/>
                    </Link>

                    <div className="contact-info">
                        <Link className="address" to="#">1430 E Moreland Blvd, Waukesha, WI</Link>
                        <Link className="js-phoneswap footer-phone" to="/create">262.574.9400</Link>
                        <h4 className="copyright">©<span id="dynamic-year"></span>Developed by Dominic DiModugno</h4> 
                    </div>
                </div>

                <div className="about-container">

                    {/* Mobile View < 1100px || Mobile styles are set to display: none at 1100px */}

                    <div className="mobile-artists">
                        <Link className="footer-large-text" to="/TattooArtists">TATTOO ARTISTS</Link>
                        <Link className="footer-small-text" to="/Kyle">Kyle Baxter</Link>
                        <Link className="footer-small-text" to="/Bailey">Bailey Renee</Link>
                        <Link className="footer-small-text" to="/Jenn">Jenn Schafer</Link>
                        <Link className="footer-small-text" to="/Matt">Matt Krstic</Link>
                        <Link className="footer-large-text" to="/piercings">PIERCINGS</Link>
                        <Link className="footer-large-text" to="/TattooRemoval">TATTOO REMOVAL</Link>
                    </div>

                    <div className="mobile-info">
                        <Link className="footer-large-text" to="/About">ABOUT</Link>
                        <Link className="footer-small-text" to="/FAQ">Aftercare FAQ'S</Link>
                        <Link className="footer-small-text" to="/Our-Work">Our Shop</Link>
                        <Link className="footer-small-text" to="/Tattoo-Parlor">Client Forms</Link>
                        <Link className="footer-large-text" to="/OurWork">OUR WORK</Link>
                        <Link className="footer-large-text" to="/contact">CONTACT US</Link>
                    </div>

                    {/* <!-- Desktop View > 1100px || Desktop styles are set to display: none below 1100px--> */}

                    <div class="desktop-artists">
                        <Link class="footer-large-text" to="/TattooArtists">TATTOO ARTISTS</Link>
                        <Link className="footer-small-text" to="/Kyle">Kyle Baxter</Link>
                        <Link className="footer-small-text" to="/Bailey">Bailey Renee</Link>
                        <Link className="footer-small-text" to="/Jenn">Jenn Schafer</Link>
                        <Link className="footer-small-text" to="/Matt">Matt Krstic</Link>
                    </div>

                    <div class="desktop-about">
                        <Link class="footer-large-text" to="/about">ABOUT</Link>
                        <Link class="footer-small-text" to="/FAQ">Aftercare FAQ'S</Link>
                        <Link class="footer-small-text" to="/OurWork">Our Shop</Link>
                        <Link class="footer-small-text" to="/Tattoo-Parlor">Client Forms</Link>
                    </div>

                    <div class="desktop-other">
                        <Link class="footer-large-text" to="/piercings">PIERCINGS</Link>
                        <Link class="footer-large-text" to="/TattooRemoval">TATTOO REMOVAL</Link>
                        <Link class="footer-large-text" to="/OurWork">OUR WORK</Link>
                        <Link class="footer-large-text" to="/create">CONTACT US</Link>
                    </div>
                </div>
            </div>
            <div class="social-media-links">
                <Link to=""><img className="facebook" alt="" src={process.env.PUBLIC_URL + "/images/Footer/facebook.png"}/></Link>
                <Link to=""><img className="insta" alt="" src={process.env.PUBLIC_URL + "/images/Footer/instagram.png"}/></Link>
                <Link to=""><img className="twitter" alt="" src={process.env.PUBLIC_URL + "/images/Footer/twitter.png"}/></Link>
                <Link to=""><img className="tiktok" alt="" src={process.env.PUBLIC_URL + "/images/Footer/tiktok.png"}/></Link>
            </div>
        </footer>

    );
}

export default Footer;