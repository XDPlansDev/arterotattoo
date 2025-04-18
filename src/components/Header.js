import { Outlet, Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <header className="padding-inline">
            <Link to="/create" className="js-phoneswap js-tel"><img className="phone" src={process.env.PUBLIC_URL + "/images/Home/phone-icon.png"} alt=""/></Link>
            <Link to="/Tattoo-Parlor"><img className="logo" src={process.env.PUBLIC_URL + "/images/Nav/logo.png"} alt=""/></Link>
            <input type="checkbox" id="hamburger"/> 

                <nav>
                    <ul className="nav">
                        <li className="has-dropdown">
                            <Link className="parent-link" to="/TattooArtists">
                                TATTOO ARTISTS
                                <img className="desktop-chevron" src={process.env.PUBLIC_URL + "/images/Home/chevron-down.png"} alt=""/>
                            </Link>

                            {/* Mobile Plus Sign */}
                            <input id="artists" type="checkbox" className="mobile-toggle" />
                            <label className="plus-sign" for="artists"></label>

                            <ul className="dropdown-content">
                                <li><Link to="/Kyle">Kyle Baxter</Link></li>
                                <li><Link to="/Bailey">Bailey Renee</Link></li>
                                <li><Link to="/Jenn">Jenn Schafer</Link></li>
                                <li><Link to="/Matt">Matt Kristic</Link></li>
                                <li><Link to="/Melyssa">Melyssa Marsh</Link></li>
                            </ul>
                        </li>

                        <li className="list-items"><Link to="/piercings">PIERCINGS</Link></li>
                        <li className="list-items"><Link to="/TattooRemoval">TATTOO REMOVAL</Link></li>
                        <li><div className="menu-space"></div></li>
                        <li className="list-items"><Link to="/OurWork">OUR WORK</Link></li>

                        <li className="has-dropdown">
                            <Link className="parent-link" to="/about">
                                ABOUT SHOP
                                <img className="desktop-chevron" src={process.env.PUBLIC_URL + "/images/Home/chevron-down.png"} alt=""/>
                            </Link>

                            {/*Mobile Plus Sign*/}
                            <input id="about" type="checkbox" class="mobile-toggle" /> 
                            <label for="about" className="plus-sign"></label>

                            <ul className="dropdown-content about-dropdown">
                                <li><Link className="dropdown-items" to="/FAQ">Aftercare FAQ's</Link></li>
                                <li><Link className="dropdown-items" to="/OurWork">Our Shop</Link></li>
                                <li>
                                    <Link className="dropdown-items" to="/Tattoo-Parlor">
                                    {/* TODO: Add SVG for consent form in header */}
                                    Client Forms
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="list-items">
                            <Link className="mobile-contact-us" to="/create">CONTACT US</Link>

                            <div className="contact-container">
                                <Link className="js-tel js-phoneswap" to="/create">
                                    <div className="phone-number">
                                        <div className="desktop-phone">
                                            <img className="desktop-phone" src={process.env.PUBLIC_URL + "/images/Home/phone-icon.png"} alt=""/>
                                            <p className="phone-number">262.574.9400</p>
                                        </div>
                                    </div>
                                </Link>

                                <Link className="contact-us" to="/create">CONTACT US</Link>
                            </div>
                        </li>
                    </ul>
                </nav>

                <label className="hamburger" for="hamburger">
                    <span className="top-bun"></span>
                    <span className="patty"></span>
                    <span className="bottom-bun"></span>
                </label>

            </header>
            <Outlet/>
            </>
    );
}

export default Header; 