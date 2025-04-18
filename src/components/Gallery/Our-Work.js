import { Link } from 'react-router-dom';

//import components
import ScheduleAppointmentButton from '../Buttons/ScheduleAppointmentButton';

const OurWork = () => {
    return (
        <>
            <div className="secondary-banner">	
                <img className="about-background" src="./Tattoo-Parlor/images/Gallery/background.jpg" alt=""/>
            </div>

            <section className="gallery-page">
                <div className="filter-section">

                </div>

                <div className="gallery">
                    <img src="./Tattoo-Parlor/images/Gallery/gallery1.jpg" alt=""/> 
                    <img src="./Tattoo-Parlor/images/Gallery/gallery2.jpg" alt=""/> 
                    <img src="./Tattoo-Parlor/images/Gallery/gallery3.jpg" alt=""/> 
                    <img src="./Tattoo-Parlor/images/Gallery/gallery4.jpg" alt=""/> 
                    <img src="./Tattoo-Parlor/images/Gallery/gallery5.jpg" alt=""/> 
                    <img src="./Tattoo-Parlor/images/Gallery/gallery6.jpg" alt=""/> 
                    <img src="./Tattoo-Parlor/images/Gallery/gallery7.jpg" alt=""/> 
                    <img src="./Tattoo-Parlor/images/Gallery/gallery8.jpg" alt=""/> 
                </div>

                <div className="contact-section">
                    <div className="text padding-inline">
                        <h2>Looking to Book?</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.Lorem ipsum
                            dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.ut.
                        </p>
                        <ScheduleAppointmentButton/>
                    </div>
                </div>
            </section>        
        </>
    );
}

export default OurWork; 