import { Link } from 'react-router-dom';

// import components
import ScheduleAppointmentButton from './Buttons/ScheduleAppointmentButton';

const TattooRemoval = () => {
    return (
        <section className="removal-page-section">
            <img className="removal-background" src="./Tattoo-Parlor/images/TattooRemoval/header-background.jpg" alt=""/>


            <div className="removal-main-content">
                <div className="rem-apt-text padding-inline">
                    <h1>TATTOO REGRET? <br/>
                        <span>START A CLEAN SLATE WITH LASER TATTOO REMOVAL IN WAUKESHA, WISCONSIN</span>
                    </h1>
                    
                    <p>
                        etur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut.Lorem ipsum dolor sit amet, consectetur 
                        adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                        veniam, quis nostrud exercitation ullamco laboris nisi ut.ut.<br/><br/>

                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.Lorem ipsum 
                        dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.ut.
                    </p>

                    <ScheduleAppointmentButton/>
                </div>

                <img className="removal-pic" src="./Tattoo-Parlor/images/TattooRemoval/removal-pic.jpg" alt=""/>

                <div className="mobile-removal">
                    <img className="removal-before" src="./Tattoo-Parlor/images/TattooRemoval/before-removal-pic.jpg" alt=""/>
                    <img className="removal-after" src="./Tattoo-Parlor/images/TattooRemoval/after-removal-pic.jpg" alt=""/>
                </div>
            </div>

            <div className="removal-section2">

                <img className="paper-background" src="./Tattoo-Parlor/images/TattooRemoval/section2-background.png" alt="" />

                <div className="rem-section2-text padding-inline">
                    <h2>OUR TECHNOLOGY</h2>
        
                    <p>
                        tetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                        veniam, quis nostrud exercitation ullamco laboris nisi ut.Lorem ipsum dolor sit amet, consectetur adipisicing 
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut.ut.<br/><br/>
        
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.Lorem ipsum dolor sit 
                        amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.ut.olor sit amet, consectetur adipisicing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut.ut.olor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut.ut.
                    </p>
                </div>

                <img className="laser" src="./Tattoo-Parlor/images/TattooRemoval/laser.png" alt=""/>
            </div>

            <div className="removal-section3">
                <h2>SET UP A FREE CONSULTATION</h2>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut.ut.
                </p>

                <Link className="orange-outline-btn" to="/create">CONTACT US</Link>
            </div>
        </section>
    );
}

export default TattooRemoval; 