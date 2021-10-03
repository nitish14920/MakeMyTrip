import styles from "./PopupConfirm.module.css"
import { Link } from "react-router-dom"



export const ConfirmPayment=()=>{
    return (
<div className={styles.popup}>
<div className={styles.popupSection}>
  <h1>Booking Confirmation </h1>
  <p>
   Please Ensure your Booking Payment details. To Raise any Complaint regarding Booking or our service please clck on Raise button
  </p>
  <div className={styles.confirm}>
    <h2 style={{ marginLeft: "-2%" }}>ADULT 1</h2>
    <div style={{ display: "grid", gridTemplateColumns: "50%  30%" }}>
      <div style={{ color: "gray" }}>First & Middle Name</div>
      <div style={{ fontWeight: "bolder" }}>Hema</div>
      <div style={{ color: "gray" }}>Last Name</div>{" "}
      <div style={{ fontWeight: "bolder" }}>Shyamala</div>
      <div style={{ color: "gray" }}>Gender</div>{" "}
      <div style={{ fontWeight: "bolder" }}>FEMALE</div>
      <div style={{ color: "gray" }}>Total Cost</div>{" "}
      <div style={{ fontWeight: "bolder" }}>₹7422</div>
    </div>
  </div>
  <div
    style={{
      display: "flex",
      marginTop: "10%",
justifyContent:"space-between",
      margin: "auto",
     
    
    }}
  >
     <Link to="/g">
      {" "}
      <button className={styles.confirmBtn}>RAISE</button>
    </Link>
    <Link to="/">
      {" "}
      <button className={styles.confirmBtn}>HOME</button>
    </Link>
  </div>
</div>
</div>
)}