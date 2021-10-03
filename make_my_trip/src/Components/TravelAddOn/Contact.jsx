import React from "react";
import styles from "./Contact.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faAngleDown,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";

export const ContactForm = () => {
  return (
    <>
      <div className={styles.flightSummary} style={{ display: "flex", flexGrow: "3" }}>
        <div>
          <div>
            <h2>Flight Summary</h2>
          </div>
          <div className={styles.TripDiv}>
            <div>
              <h3>New Delhi-Bangalore</h3>
              <p style={{ marginTop: "-8%", color: "black" }}>
                Departure Fri, 1 Oct
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3 style={{ marginLeft: "-5%", color: "blue" }}>
                Flight Details
              </h3>{" "}
              <i style={{ marginTop: "20%", marginLeft: "1%" }}>
                <FontAwesomeIcon icon={faAngleDown} />
              </i>
            </div>
          </div>
          <div>
            <h2>Traveller Details</h2>
          </div>
          <div className={styles.LoginDiv}>
            <p className={styles.LoginP}>
              <img
                src="https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/rt_t8.png"
                className={styles.LoginImg}
                alt="login_icon"
              />
              <span style={{ marginTop: "2%" }}>
                Log in to view your{" "}
                <b style={{ fontWeight: "bolder" }}>
                  saved traveller list, unlock amazing deals
                </b>{" "}
                &amp; much more!
              </span>
            </p>
            <p className={styles.LoginBtn}>
              Login Now{" "}
              <i>
                <FontAwesomeIcon icon={faArrowRight} />
              </i>
            </p>
          </div>
        </div>
        <div style={{ flexGrow: "1" }}>
          <h2>Fare Summary</h2>
          <div>
            <div className={styles.FareSection} style={{ zIndex: "1" }}>
              <div className={styles.FareSummary}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p>
                    {" "}
                    <span>
                      <i>
                        {" "}
                        <FontAwesomeIcon icon={faPlusCircle} />
                      </i>
                    </span>
                    <span>Base Fare</span>
                  </p>
                  <span>₹ 4,713</span>
                </div>
              </div>
              <div className={styles.FareSummary}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p>
                    <span>
                      <i>
                        {" "}
                        <FontAwesomeIcon icon={faPlusCircle} />
                      </i>
                    </span>
                    <span>Fee &amp; Surcharges</span>
                  </p>
                  <span class="font16">₹ 783</span>
                </div>
              </div>
              <div className={styles.FareSummary}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p>
                    <span>
                      <i>
                        {" "}
                        <FontAwesomeIcon icon={faPlusCircle} />
                      </i>
                    </span>
                    <span>Other Services</span>
                  </p>
                  <span class="font16">₹ 10</span>
                </div>
              </div>
              <div style={{display:"flex", justifyContent:"space-between", height:"35px"}}>
               
                      <span style={{fontWeight:"bolder" , marginLeft:"3%"}}>Total Amount:</span>
                    
          
                  
                      <span style={{fontWeight:"bolder" , marginRight:"3%"}}>₹ 5,506</span>
                  
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
