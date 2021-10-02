import styles from "./BookingDetails.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const BookingDetails = () => {
  return (
    <div>
      <h2 style={{ marginLeft: "19%" }}>Booking details will be sent to</h2>
      <div className={styles.bookingDiv}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            {" "}
            <p>Country Code</p>
            <input placeholder="India(91)" />
          </div>
          <div>
            {" "}
            <p>Mobile No</p>
            <input placeholder="Mobile No" />
          </div>{" "}
          <div>
            {" "}
            <p>Email</p>
            <input placeholder="Email" />
          </div>
        </div>
      </div>
      <h2 style={{ marginLeft: "19%" }}>
        GST number for business travel(Optional)
      </h2>
      <div className={`${styles.bookingDiv} ${styles.flexing}`}>
        <input
          type="checkbox"
          style={{ fontSize: "larger", marginTop: "2%" }}
        />
        <p>
          To claim credit of GST charged by airlines/MMT, please enter you
          company's GST number
        </p>{" "}
      </div>
      <div className={styles.bookingDiv}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex" }}>
            <img
              style={{ width: "30px", height: "30px", marginTop: "8%" }}
              src="https://imgak.mmtcdn.com/flights/assets/media/mobile/common/2X/covidInsurance.png"
            />
            <h2 style={{ marginLeft: "0%" }}> Rs 2 lacs Covid Insurance</h2>
          </div>
          <div>
            <img
              style={{ width: "50px", height: "50px", marginTop: "10%" }}
              src="https://imgak.mmtcdn.com/flights/assets/media/mobile/common/2X/adityaBirlaIcon.png"
            />
          </div>
        </div>
        <div
          className={styles.covid}
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <div>
            {" "}
            <p>
              {" "}
              Strengthen your safety with COVID insurance of Rs.2,00,000 for
              hospitalization (new strain covered). Validity 16 days from trip
              date. TnC Apply{" "}
              <span style={{ color: "#008cff" }}>View All benefits</span>
            </p>
          </div>
          <div>
            <h5>$99</h5>
            <p style={{ fontSize: "smaller" }}>(18% GST included</p>
          </div>{" "}
          <div>
            <button className={styles.covidButton}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              ADD
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2 style={{ marginLeft: "19%" }}>Acknowledgement</h2>
      </div>
      <div className={styles.bookingDiv}>
        <p style={{fontSize:"14px", fontWeight:"400"}}>By clicking on the Continue button below to proceed with the booking. I confirm that I have read and I accept the<span style={{color:"#008cff"}}> Fare Rules</span>, the <span style={{color:"#008cff"}}>Privacy Policy</span>, the <span style={{color:"#008cff"}}>User Agreement</span> and <span style={{color:"#008cff"}}>Terms of Service</span> of MakeMyTrip</p>
 <Link to="/afterbooking">    <button className={styles.continue}>CONTINUE</button></Link> </div>
 
    </div>
  );
};
