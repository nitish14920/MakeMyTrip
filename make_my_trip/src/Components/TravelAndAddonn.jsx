import React from "react";
import styles from "./TravelAndAddonn.module.css";

export const TravelAndAddOnn = () => {
  return (
    <div className={styles.totalHeader}>
      {" "}
      <div className={styles.header}>
        <div className={styles.headerMini}>
          <div >
            <h4 className={styles.title}>Traveller &amp; Addons</h4>
          </div>
          <ul className={styles.review}>
            <li className={styles.list}> 
              <span className={`${styles.number} `} >1</span>
              <span className={styles.name}>Flight Selected</span>
            </li>
            <li className={styles.listActive}>
              <span className={`${styles.number} `}>2</span>
              <span className={styles.name}>Review</span>
            </li>
            <li className={styles.listActive}>
              <span className={`${styles.number} `}>3</span>
              <span style={{color:"white"}} className={styles.name} >Traveller Details</span>
            </li>
            <li className={styles.listActive}>
              <span className={`${styles.number} `}>4</span>
              <span className={styles.name}>Make Payment</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
