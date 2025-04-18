import { Route, Routes, Link } from 'react-router-dom';



const TattooArtists = () => {
    return (
        <>
            <div className="secondary-banner">
                <img className="tattoo-art-background" src="./Tattoo-Parlor/images/TattooArtists/background.png" alt=""/>
            </div>
            
            <section className="tattoo-artists-page">    
                <h1>
                    Waukesha
                    <span>
                        <img src="./Tattoo-Parlor/images/TattooArtists/title-left.png" alt=""/>
                        Tattoo Artists
                        <img src="./Tattoo-Parlor/images/TattooArtists/title-right.png" alt=""/>
                    </span>
                </h1>

                <div className="tattoo-art-artists">
                    <Link to="/Kyle" className="tattoo-art-item">
                        <img src="./Tattoo-Parlor/images/TattooArtists/Kyle.jpg" alt=""/>

                        <p>Kyle Baxter<span>Traditional Style</span></p>
                    </Link>

                    <Link to="/Bailey" className="tattoo-art-item">
                        <img src="./Tattoo-Parlor/images/TattooArtists/Bailey.jpg" alt=""/>

                        <p>Bailey Renee<span>Geometric, Fine line Style</span></p>
                    </Link>

                    <Link to="/Jenn" className="tattoo-art-item">
                        <img src="./Tattoo-Parlor/images/TattooArtists/Jenn.jpg" alt=""/>

                        <p>Jenn Schafer<span>Blackwork, Realism Style</span></p>
                    </Link>

                    <Link to="/Matt"  className="tattoo-art-item">
                        <img src="./Tattoo-Parlor/images/TattooArtists/Matt.jpg" alt=""/>

                        <p>Matt Krstic<span>Neo Traditional Style</span></p>
                    </Link>
                </div>

                <div className="tattoo-art-contact">
                    <picture>
                        <source media="(max-width:500px)" srcset="./Tattoo-Parlor/images/TattooArtists/contact-us-mobile-background.png"/>
                        <img className="contact-background" src="./Tattoo-Parlor/images/TattooArtists/contact-us-background.png" alt=""/>
                    </picture>

                    <div className='text padding-inline'>
                        <h2>Looking to guest spot at our shop?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.ut.</p>
                        <Link className="tattoo-art-contact-btn" to="/create">Contact Us</Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default TattooArtists; 