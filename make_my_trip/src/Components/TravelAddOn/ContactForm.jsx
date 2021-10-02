import styles from "./ContactForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
export const Form = () => {
  return (
    <div className={styles.FormDiv}>
      <div
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "auto auto",
          textAlign: "left",
        }}
      >
        <h2 style={{ marginLeft: "-5%" }}>ADULT</h2>
        <p style={{ marginLeft: "75%", color: "aquamarine" }}>1/1 Selected</p>
      </div>
      <div>
        <div className={styles.shading}>
          <div
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "10% 70% 20%",
              textAlign: "left",
            }}
          >
            <input type="checkbox"></input>{" "}
            <span
              style={{
                fontWeight: "900",
                fontSize: "larger",
                marginTop: "-1%",
                marginLeft: "-5%",
              }}
            >
              ADULT 1
            </span>
            <span className={styles.incomplete}>INCOMPLETE</span>
          </div>
          <p style={{ fontSize: "smaller", fontWeight: "bold" }}>
            IMPORTANT: Enter your name as it is mentioned on your passport or
            any governement approved ID
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <form style={{ display: "inline-block" }}>
              <input placeholder="First & Middle Name" />

              <input placeholder="Last Name" />
            </form>
            <div className={styles.radioLabel}>
              <label tabIndex="0">
                <input type="radio" value="MALE" />
                <button className={styles.labelText}>MALE</button>
              </label>
              <label tabIndex="1">
                <input type="radio" value="FEMALE" />
                <button className={styles.labelText}>FEMALE</button>
              </label>
            </div>
          </div>
        </div>
        <button className={styles.addAdult}>
          <i>
            <FontAwesomeIcon icon={faPlus} />
          </i>
          ADD ADULT
        </button>
      </div>
    </div>
  );
};
