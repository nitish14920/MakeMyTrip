import styles from "./Payment.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faPlus,
  faAngleDown,
  faPlusCircle,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

export const PaymentSection = () => {
  return (
    <div>
      <div className={styles.header}>
        <div>
          <span className={styles.logo}></span>{" "}
        </div>
        <div>
          <p>
            Hey,{" "}
            <span style={{ color: "teal" }}>
              You are viewing this booking at the best price
            </span>
          </p>
        </div>
        <div>
          <div style={{ display: "flex" }}>
            {" "}
            <span className={styles.safe}></span> <span>SAFE & SECURE</span>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexGrow: "3",
          marginTop: "-6%",
        }}
      >
        <div
          className={styles.paymentUPI}
          style={{
            display: "flex",
            marginLeft: "18%",
            justifyContent: "space-between",
            width: "50%",
            textAlign: "left",
            marginRight: "-15%",
            borderRadius: "10px",
          }}
        >
          <div style={{ backgroundColor: "rgb(229, 238, 244)" }}>
            <div>
              <h3>Payment Options</h3>
            </div>
            <div className={styles.options}>
              <span className={styles.upiImage}></span>
              <span
                style={{
                  marginLeft: "15%",
                  color: " #008cff",
                  fontWeight: "bolder",
                  fontSize: "16px",
                }}
              >
                UPI
              </span>
              <p style={{ marginTop: "-1%", marginLeft: "15%" }}>
                Pay Directly From Your Bank Account
              </p>
            </div>
            <div className={styles.options}>
              <span className={styles.creditCard}></span>
              <span
                style={{
                  marginLeft: "15%",
                  color: " #008cff",
                  fontWeight: "bolder",
                  fontSize: "16px",
                }}
              >
                Credit/Debit/ATM
              </span>
              <p style={{ marginTop: "-1%", marginLeft: "15%" }}>
                Visa,MasterCard,Amex,Rupay And More
              </p>
            </div>
            <div className={styles.options}>
              <span className={styles.payLater}></span>
              <span
                style={{
                  marginLeft: "15%",
                  color: " #008cff",
                  fontWeight: "bolder",
                  fontSize: "16px",
                }}
              >
                PayLater
              </span>
              <p style={{ marginTop: "-1%", marginLeft: "15%" }}>
                Lazypay, Simpl, Cardless EMIs and more
              </p>
            </div>
            <div className={styles.options}>
              <span className={styles.netBanking}></span>
              <span
                style={{
                  marginLeft: "15%",
                  color: " #008cff",
                  fontWeight: "bolder",
                  fontSize: "16px",
                }}
              >
                Net Banking
              </span>
              <p style={{ marginTop: "-1%", marginLeft: "15%" }}>
                All Major Banks Available
              </p>
            </div>
            <div className={styles.options}>
              <span className={styles.tripMoney}></span>
              <span
                style={{
                  marginLeft: "15%",
                  color: " #008cff",
                  fontWeight: "bolder",
                  fontSize: "16px",
                }}
              >
                TripMoney, Gift Cards
              </span>
              <p style={{ marginTop: "-1%", marginLeft: "15%" }}>
                Google Pay, Gift cards, Mobikwik, AmazonPay
              </p>
            </div>
            <div className={styles.options}>
              <span className={styles.EMI}></span>
              <span
                style={{
                  marginLeft: "15%",
                  color: " #008cff",
                  fontWeight: "bolder",
                  fontSize: "16px",
                }}
              >
                EMI
              </span>
              <p
                style={{
                  marginTop: "-1%",
                  marginLeft: "15%",
                  color: "#f09819 !important",
                }}
              >
                No Cost EMI available
              </p>
            </div>
            <div className={styles.options}>
              <span className={styles.googlePay}></span>
              <span
                style={{
                  marginLeft: "15%",
                  color: " #008cff",
                  fontWeight: "bolder",
                  fontSize: "16px",
                }}
              >
                GooglePay
              </span>
              <p style={{ marginTop: "-1%", marginLeft: "15%" }}>GooglePay</p>
            </div>
          </div>
          <div style={{ width: "70%" }}>
            <div
              style={{
                marginTop: "10%",
                width: "95%",
                height: "180px",
                borderRadius: "10px",
                border: "1px solid rgb(224,224,224)",
              }}
            >
              <span className={styles.googlePay}></span>
              <p>Enter UPI ID</p>
              <form style={{ display: "inline-block" }}>
                <input placeholder="userName@UPI" />
                <Link to="/afterpayment">
                  {" "}
                  <input
                    className={styles.verify}
                    type="submit"
                    value="VERIFY & PAY"
                  />
                </Link>{" "}
              </form>
            </div>
            <div
              className={styles.secure}
              style={{
                marginTop: "10%",
                padding: "4%",
                borderRadius: "10px",
                marginRight: "5%",
                border: "1px solid rgb(224,224,224)",
              }}
            >
              <p className={styles.covidBox}>COVID INSURANCE</p>
              <p>
                Strengthen your safety with COVID insurance of Rs.2,00,000 for
                hospitalization (new strain covered). Validity 16 days from trip
                date. TnC Apply
              </p>
              <form
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <input
                  className={styles.view}
                  type="submit"
                  value="View All Benefits"
                />
                <input className={styles.view} type="submit" value="ADD +" />
              </form>
            </div>
          </div>
        </div>{" "}
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
                  <span>₹ 6,713</span>
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  height: "35px",
                }}
              >
                <span style={{ fontWeight: "bolder", marginLeft: "3%" }}>
                  Total Amount:
                </span>

                <span style={{ fontWeight: "bolder", marginRight: "3%" }}>
                  ₹7,422
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
