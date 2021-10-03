import React from "react";
import "./Aeroplane.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import DateCalender from "../Aeroplane/DateCalender";

function Aeroplane() {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="aeroplane-trip-types">
          <div style={{ color: "black", fontSize: "10px" }}>
            <label>
              {" "}
              <input type="radio" name="oneway" placeholder="" />
              ONEWAY
            </label>
            <label>
              {" "}
              <input type="radio" name="oneway" placeholder="" />
              ROUNDTRIP
            </label>
            <label>
              {" "}
              <input type="radio" name="oneway" placeholder="" />
              MULTICITY
            </label>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "7px",
              color: "black",
              gap: "5px",
            }}
          >
            <h1>International Flights |</h1>
            <h1>Domestic Flights |</h1>
            <h1>
              <span
                style={{
                  background: "red",
                  padding: "5px",
                  boxShadow: "0 1px 4px 0 rgb(0 0 0 / 20%)",
                  backgroundColor: "rgba(254, 197, 0, 0.2)",
                }}
              >
                Flight+Cab: Serving non Airport cities
              </span>
            </h1>
          </div>
        </div>
        <div
          style={{
            border: "1px solid black",
            width: "1140px",
            height: "100px",
            marginLeft: "80px",
            borderRadius: "5px",
            display: "flex",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "10px",
            }}
          >
            <div
              style={{
                marginLeft: "20px",
                fontSize: "20px",
                marginTop: "10px",
              }}
            >
              From
            </div>
            <select
              style={{
                height: "40px",
                fontSize: "30px",
                width: "200px",
                WebkitAppearance: "none",
                border: "none",
                margin: "0 50px 0 20px",
              }}
              type="text"
              name="from"
              placeholder=""
            >
              <option style={{ fontSize: "20px" }}>Hyderabad</option>
              <option style={{ fontSize: "20px" }}>Bangalore</option>
              <option style={{ fontSize: "20px" }}>Mumbai</option>
              <option style={{ fontSize: "20px" }}>Delhi</option>
              <option style={{ fontSize: "20px" }}>Chennai</option>
            </select>
          </div>
          <div style={{ borderLeft: "2px solid black", height: "100px" }}></div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "10px",
            }}
          >
            <div
              style={{
                marginLeft: "20px",
                fontSize: "20px",
                marginTop: "10px",
              }}
            >
              To
            </div>
            <select
              style={{
                height: "40px",
                fontSize: "30px",
                width: "200px",
                WebkitAppearance: "none",
                border: "none",
                margin: "0 50px 0 20px",
              }}
              type="text"
              name="from"
              placeholder=""
            >
              <option style={{ fontSize: "20px" }}>Mumbai</option>
              <option style={{ fontSize: "20px" }}>Bangalore</option>
              <option style={{ fontSize: "20px" }}>Hyderabad</option>
              <option style={{ fontSize: "20px" }}>Delhi</option>
              <option style={{ fontSize: "20px" }}>Chennai</option>
            </select>
          </div>
          <div style={{ borderLeft: "2px solid black", height: "100px" }}></div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "10px",
              paddingRight: "10px",
            }}
          >
            <div
              style={{
                marginLeft: "20px",
                fontSize: "20px",
                marginTop: "10px",
              }}
            >
              Departure
            </div>
            <DateCalender />
          </div>
          <div style={{ borderLeft: "2px solid black", height: "100px" }}></div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "10px",
            }}
          >
            <div
              style={{
                marginLeft: "20px",
                fontSize: "20px",
                marginTop: "10px",
              }}
            >
              Return
            </div>
            <DateCalender />
          </div>
          <div
            style={{
              borderLeft: "2px solid black",
              height: "100px",
              marginLeft: "7px",
            }}
          ></div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "10px",
            }}
          >
            <div
              style={{
                marginLeft: "20px",
                fontSize: "20px",
                marginTop: "10px",
              }}
            >
              Travellers
            </div>
            <div style={{ display: "flex" }}>
              <select
                style={{
                  height: "40px",
                  fontSize: "30px",
                  width: "50px",
                  WebkitAppearance: "none",
                  border: "none",
                  margin: "0 0px 0 20px",
                }}
                type="text"
                name="from"
                placeholder=""
              >
                <option style={{ fontSize: "20px" }}>1</option>
                <option style={{ fontSize: "20px" }}>2</option>
                <option style={{ fontSize: "20px" }}>3</option>
                <option style={{ fontSize: "20px" }}>4</option>
                <option style={{ fontSize: "20px" }}>5</option>
                <option style={{ fontSize: "20px" }}>6</option>
              </select>
              <div style={{ fontSize: "23px", margin: "5px 0 0 -25px " }}>
                Travellers
              </div>
            </div>
          </div>
        </div>
      </form>
      <div style={{ display: "flex" }}>
        <div
          style={{
            color: "black",
            fontSize: "10px",
            margin: " 15px 0 0 80px",
            display: "flex",
            background: "#F2F2F2",
            width: "30%",
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          <div style={{ display: "flex" }}>
            {" "}
            <input type="radio" name="oneway" placeholder="" />
            <div>
              Regular <br />
              Fares
            </div>
          </div>
          <div style={{ display: "flex" }}>
            {" "}
            <input type="radio" name="oneway" placeholder="" />
            <div>
              Armed Forces <br />
              Fares
            </div>
          </div>
          <div style={{ display: "flex" }}>
            {" "}
            <input type="radio" name="oneway" placeholder="" />
            <div>
              Student <br />
              Fares
            </div>
          </div>
          <div style={{ display: "flex" }}>
            {" "}
            <input type="radio" name="oneway" placeholder="" />
            <div>
              Senior Citizen <br />
              Fares
            </div>
          </div>
          <div style={{ display: "flex" }}>
            {" "}
            <input type="radio" name="oneway" placeholder="" />
            <div>
              Double Seat <br />
              Fares
            </div>
          </div>
        </div>

        <div style={{ display: "flex", margin: "15px 0 0 360px" }}>
          <div style={{ fontSize: "11px", marginTop: "5px" }}>
            Recent Searches :{" "}
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                fontSize: "11px",
                background: "#F2F2F2",
                width: "120px",
                height: "30px",
                marginLeft: "8px",
                borderRadius: "5px",
                padding: "3px",
              }}
            >
              Hyderabad - Mumbai <br />
              19 nov 2021
            </div>
            <div
              style={{
                fontSize: "11px",
                background: "#F2F2F2",
                width: "120px",
                height: "30px",
                marginLeft: "10px",
                borderRadius: "5px",
                padding: "3px",
              }}
            >
              Hyderabad - Mumbai <br /> 14 sept 2021{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aeroplane;
