import { Link } from 'react-router-dom';

const Piercings = () => {
    return (
            <section class="piercings-page-section">
                <img src="./Tattoo-Parlor/images/Piercings/piercings-background.jpg" alt=""/>

                <div class="peircings-page-title">
                    <h1>WAUKESHA<br/>
                        <span>
                            <img src="./Tattoo-Parlor/images/Piercings/title-left.png" alt=""/>    
                            <span>BODY PIERCING</span>
                            <img src="./Tattoo-Parlor/images/Piercings/title-right.png" alt=""/>
                        </span>
                    </h1>
                
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.Lorem 
                        ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.ut.
                    </p>

                    <Link className="blk-home-button" to="/create"><span>CONTACT US</span></Link>
                </div>

                <div class="piercing-page-price-section padding-inline">

                    <img className="piercings-price-background" src="./Tattoo-Parlor/images/Piercings/piercings-price-background.png" alt="" /> 

                    <div class="piercing-price-content">
                        <div class="price-text">
                            <div class="piercings-page-price-title">
                                <span>
                                    <img src="./Tattoo-Parlor/images/Piercings/title-left.png" alt=""/>
                                    <h2>PRICING</h2>
                                    <img src="./Tattoo-Parlor/images/Piercings/title-right.png" alt=""/>
                                </span>
                                <p>** Pricing is for a single piercing. For one piercing on each earlobe would start at $150 **</p>
                            </div>

                            <div class="piercings-page-price-box">
                                <ul class="piercing-dot-leaders">
                                    <li class="daith"> 
                                        <span>DAITH</span>
                                        <span class="dots"></span> 
                                        <span>$50</span> 
                                    </li>
                                    
                                    <li class="earlobe"> 
                                        <span>EARLOBE</span> 
                                        <span class="dots"></span>
                                        <span>$75</span> 
                                    </li>
                                        <p>Helix, conch, flat, forward helix, tragus</p>
                                    
                                    <li class="septum"> 
                                        <span>SEPTUM</span> 
                                        <span class="dots"></span>
                                        <span>$95</span> 
                                    </li>
                                    
                                    <li class="industrial"> 
                                        <span>INDUSTRIAL</span> 
                                        <span class="dots"></span>
                                        <span>$105</span> 
                                    </li>
                                    
                                    <li class="facial"> 
                                        <span>FACIAL</span> 
                                        <span class="dots"></span>
                                        <span>$85</span>
                                    </li>
                                        <p>Nose, eyebrow, bridge, lips, tounge</p>
                                    
                                    <li class="navel"> 
                                        <span>NAVEL</span> 
                                        <span class="dots"></span>
                                        <span>$85</span>
                                    </li>
                                    
                                    <li class="jewelry">
                                        <span class="jewelry-width">JEWELRY CHANGE</span>
                                        <span class="dots"></span> 
                                        <span>$5</span> 
                                    </li>
                                </ul>
                            </div>
                        </div>
                    

                        <div class="piercings-page-artist">
                            <img class="piercing-page-artists-image" src="./Tattoo-Parlor/images/Piercings/Melyssa.jpg" alt=""/>

                            <h2>
                                Melyssa Marsh <br/> 
                                <span>Piercing Artist</span>
                            </h2>
                        </div>
                    </div>
                </div>

                <div class="piercings-page-gallery">
                    <img src="./Tattoo-Parlor/images/Piercings/gallery1.jpg" alt=""/>
                    <img src="./Tattoo-Parlor/images/Piercings/gallery2.jpg" alt=""/>
                    <img src="./Tattoo-Parlor/images/Piercings/gallery3.jpg" alt=""/>
                    <img src="./Tattoo-Parlor/images/Piercings/gallery4.jpg" alt=""/>
                    <img src="./Tattoo-Parlor/images/Piercings/gallery5.jpg" alt=""/>
                    <img src="./Tattoo-Parlor/images/Piercings/gallery6.jpg" alt=""/>
                    <img src="./Tattoo-Parlor/images/Piercings/gallery7.jpg" alt=""/>
                    <img src="./Tattoo-Parlor/images/Piercings/gallery8.jpg" alt=""/>
                </div> 
        
            </section>
    );
}

export default Piercings; 