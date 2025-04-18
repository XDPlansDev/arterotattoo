import React from "react"; 
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section className="about-page-section">
		<div className="secondary-banner">	
			<img className="about-background" src="./Tattoo-Parlor/images/About/background.jpg" alt=""/>
		</div>

		<div className="about-page-content">
        <div class="about-page-text padding-inline">
            <h1>TATTOO STUDIO <br /><span>LOCATED IN WAUKESHA WISCONSIN</span></h1>
            <p>
                tetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.ut. <br /><br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.Lorem ipsum dolor sit 
                amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut.ut.
            </p>
            
            <Link class="schedule-apt-button" to="/create"> 
                <img src="./Tattoo-Parlor/images/About/schedule-apt-left-btn.png" border="0" alt="" /> 
                SCHEDULE APPOINTMENT 
                <img src="./Tattoo-Parlor/images/About/schedule-apt-right-btn.png" border="0" alt="" /> 
			</Link>
        </div>
			<div> 
				<img className="tattoo-room-jpg" src="./Tattoo-Parlor/images/About/tattoo-room.jpg" alt=""/>
			</div>
		</div>

		<div className="about-award-banner padding-inline">
			<div className="about-award-col1">
				<div>
					<img src="./Tattoo-Parlor/images/About/award1.png" alt=""/>
				</div>

				<div>
					<img src="./Tattoo-Parlor/images/About/award2.png" alt=""/>
				</div>

				<div>
					<img src="./Tattoo-Parlor/images/About/award3.png" alt=""/>
				</div>
			</div>

			<div className="about-award-col2">
				<div>
					<img src="./Tattoo-Parlor/images/About/award4.png" alt=""/>
				</div>

				<div>
					<img src="./Tattoo-Parlor/images/About/award5.png" alt=""/>
				</div>

				<div>
					<img src="./Tattoo-Parlor/images/About/award6.png" alt=""/>
				</div>
			</div>
		</div>
	</section>
    );
}

export default About; 