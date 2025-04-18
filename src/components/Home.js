import React from 'react'; 
import { Link } from 'react-router-dom';

// import components
import ScheduleAppointmentButton from './Buttons/ScheduleAppointmentButton';

const Home = () => {
    return (
        <>
            <section className="schedule-apt padding-inline">
                <video className="background-video" autoPlay muted loop>
                    <source src={process.env.PUBLIC_URL + "/Video/TattooBanner.mp4"} type="video/mp4"/>
                    <source src={process.env.PUBLIC_URL + "/Video/TattooBanner.webm"} type="video/webm"/>
                </video>

                <div className="paper-gradient"></div>

                <div className="schedule-apt-text">
                    <h1>
                        <span>CONHEÇA O ESTÚDIO DE</span>
                        <br/> 
                        RAFAEL ARTERO
                    </h1>

                    <p>
                        Arte na pele com personalidade. Rafael Artero é especialista em realismo, blackwork e tatuagens autorais feitas com dedicação e talento. Agende sua sessão hoje mesmo e transforme sua ideia em arte.
                    </p>
                    <p>
                        <ScheduleAppointmentButton/>
                    </p>
                </div>
            </section>

            <section className="excellent-headline-section padding-inline">
                <picture>
                    <source media="(min-width:500px)" srcSet={process.env.PUBLIC_URL + "/images/Home/excellent-headline-top-1500px.png"}/>
                    <img className="exl-section-background" src={process.env.PUBLIC_URL + "/images/Home/excellent-headline-top.png"} alt=""/>
                </picture>

                <div className="exl-background-color"></div>

                <div className="exl-content">
                    <div className="exl-btns">
                        <Link className="exl-btn1" to="/TattooArtists">
                            <picture>
                                <source media="(max-width:640px)" srcSet={process.env.PUBLIC_URL + "/images/Home/our-artists.jpg"} />
                                <img className="ServicesImg" src={process.env.PUBLIC_URL + "/images/Home/our-artists-desktop.png"} alt=""/>
                            </picture>
                            <span>SOBRE RAFAEL</span>
                        </Link>

                        <Link className="exl-btn2" to="/Piercings">
                            <picture>
                                <source media="(max-width:640px)" srcSet={process.env.PUBLIC_URL + "/images/Home/piercings.jpg"} />
                                <img className="ServicesImg" src={process.env.PUBLIC_URL + "/images/Home/piercings-desktop.png"} alt=""/>
                            </picture>
                            <span>BODY PIERCING</span>
                        </Link>

                        <Link className="exl-btn3" to="/TattooRemoval">
                            <picture>
                                <source media="(max-width:640px)" srcSet={process.env.PUBLIC_URL + "/images/Home/tattoo-removal.jpg"} />
                                <img className="ServicesImg" src={process.env.PUBLIC_URL + "/images/Home/tattoo-removal-desktop.png"} alt=""/>
                            </picture>
                            <span>REMOÇÃO DE TATUAGEM</span>
                        </Link>
                    </div>
                    <div className="exl-text">                
                        <h2>EXPERIÊNCIA, ESTILO E TÉCNICA<br /> 
                            <span className="exl-headline-span"> 
                                <img className="exl-text-left" src={process.env.PUBLIC_URL + "/Content/images/Home/exl-headline-left.png"} alt="" /> 
                                <span className="exl-headline-p">ARTERO TATTOO</span> 
                                <img className="exl-text-right" src={process.env.PUBLIC_URL + "/Content/images/Home/exl-headline-right.png"} alt="" /> 
                            </span>
                        </h2>

                        <p className="exl-paragraph">
                            Cada traço é único. Rafael Artero trabalha com atenção aos mínimos detalhes para entregar obras marcantes e exclusivas na sua pele.
                            <br /><br />Siga no Instagram: <a href="https://www.instagram.com/rafaarterotattoo" target="_blank" rel="noopener noreferrer">@rafaarterotattoo</a>
                        </p>
                    </div>
                </div>

                <div className="exl-bird"></div>
                <div className="exl-flower"></div>
            </section>

            <section className="our-work-section padding-inline">
                <div className="our-work-content">
                    <h2>TRABALHOS REALIZADOS</h2>
                    <p>Veja alguns dos trabalhos já realizados por Rafael Artero. Realismo, cobertura, preto e cinza e muito mais. Cada tatuagem com identidade própria.</p>
                    <p className="our-work-p2">Explore a galeria completa e agende sua sessão para fazer parte dessa arte viva.</p>
                    <p><Link className="blk-home-button" to="/OurWork">VER GALERIA</Link></p>
                </div>

                <div className="our-work-gallery">
                    <div className="gallery-images">
                        <img src={process.env.PUBLIC_URL + "/images/Home/gallery1.jpg"} alt=""/>
                    </div>
                    <div className="gallery-images">
                        <img src={process.env.PUBLIC_URL + "/images/Home/gallery2.jpg"} alt=""/>
                    </div>
                    <div className="gallery-images">
                        <img src={process.env.PUBLIC_URL + "/images/Home/gallery3.jpg"} alt=""/>
                    </div>
                    <div className="gallery-images">
                        <img src={process.env.PUBLIC_URL + "/images/Home/gallery4.jpg"} alt=""/>
                    </div>
                </div>
            </section>

            <section className="learn-more">
                <div className="body-jewelry padding-inline">
                    <div className="body-jewelry-div">
                        <h2>BODY JEWELRY DE QUALIDADE</h2>
                        <p>Explore nossa linha de piercings com materiais de alta qualidade e estilos únicos. Para quem valoriza a estética com segurança e autenticidade.</p>
                        <Link className="blk-home-button" to="/piercings">SAIBA MAIS</Link>
                    </div>
                </div>

                <div className="tattoo-removal padding-inline">
                    <div>
                        <h2>REMOÇÃO DE TATUAGENS</h2>
                        <p>Se arrependeu de alguma tattoo? Aqui você encontra um processo profissional e seguro para remoção de tatuagens com tecnologia avançada.</p>
                        <Link className="blk-home-button" to="/TattooRemoval">NOSSO PROCESSO</Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;