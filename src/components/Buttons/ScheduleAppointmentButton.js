import { Link } from "react-router-dom";

 
// Styles for schedule apt button are found in _shared-styles.scss


function ScheduleAppointmentButton() {
  return (
    <Link className="schedule-apt-button" to="/create">
      <img
        className="apt-button-left"
        src={process.env.PUBLIC_URL + "/images/Home/schedule-apt-left-btn.png"}
        border="0"
        alt=""
      />
      SCHEDULE APPOINTMENT
      <img
        className="apt-button-right"
        src={process.env.PUBLIC_URL + "/images/Home/schedule-apt-right-btn.png"}
        border="0"
        alt=""
      />
    </Link>
  );
}

export default ScheduleAppointmentButton;
