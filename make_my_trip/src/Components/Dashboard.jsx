import "./styles.css";
import React from "react";
import "./first.css";
import "./Second.css";
import "./Third.css";
import "./fourth.css";
export default function Dashboard() {
  return (
    <div className="Dashboard">
      
      <div className="photos">
        {/* //first column */}
        <div classsName="fcolumn">
          <div className="hdiv">
            <img
              className="border"
              alt="chennai flight"
              src="http://promos.makemytrip.com/images/50x50-Other-23052019.png"
            />
            <p className="fontwght">Chennai Flights</p>
          </div>
          <p>Via - Delhi, Mumbai, Coimbatore, Madurai</p>

          <div className="hdiv">
            <img
              className="border"
              alt="Hyderabad"
              src="http://promos.makemytrip.com/images/50x50-Ooty-23052019.png"
            />
            <p className="fontwght">Hyderabad Flights</p>
          </div>
          <p>Via - Chennai, Mumbai, Bangalore, Delhi</p>
          <div className="hdiv">
            <img
              className="border"
              alt="Kolkata"
              src="https://promos.makemytrip.com/store/SingaporeDT.JPG"
            />
            <p className="fontwght">Kolkata Flights</p>
          </div>
          <p>Via - Delhi, Mumbai, Bangalore, Pune</p>
        </div>
        {/* //first column */}
        {/* //Second column */}
        <div calssName="SecondColumn">
          <div className="hdiv">
            <img
              className="border"
              src="https://promos.makemytrip.com/store/GoaDT.JPG"
              alt="Goa"
            />
            <p className="fontwght">Goa Flights</p>
            <p>Via - Delhi , Mumbai, Bangalore, Ahmedabad</p>
          </div>

          <div className="hdiv">
            <img
              className="border"
              src="https://promos.makemytrip.com/store/DelhiDT.JPG"
              alt="Delhi"
            />
            <p className="fontwght">Delhi Flights</p>
            <p>Via - Mumbai, Pune, Bangalore, Chennai</p>
          </div>

          <div className="hdiv">
            <img
              className="border"
              src="https://promos.makemytrip.com/store/BangaloreDT.JPG"
              alt="Banglore"
            />
            <p className="fontwght">Bangalore Flightss</p>
            <p>Via - Delhi, Pune, Mumbai, Kolkata</p>
          </div>
        </div>
        {/* //Third column */}
        <div className="thirdcolumn">
          <div className="hdiv">
            <img
              className="border"
              alt="Mumbai"
              src="https://promos.makemytrip.com/store/MumbaiDT.JPG"
            />
            <p className="fontwght">Mumbai Flights</p>
            <p>Via - Delhi, Bangalore, Chennai, Ahmedabad</p>
          </div>
          <div className="hdiv">
            <img
              className="border"
              alt="Pune"
              src="https://promos.makemytrip.com/store/PuneDT.JPG"
            />
            <p className="fontwght">Pune Flights</p>
            <p>Via - Delhi, Bangalore, Chennai, Ahmedabad</p>
          </div>
          <div className="hdiv">
            <img
              className="border"
              alt="Jaipur"
              src="https://promos.makemytrip.com/store/JaipurDT.JPG"
            />
            <p className="fontwght">Jaipur Flights</p>
            <p>Via - Mumbai, Delhi, Pune, Bangalore</p>
          </div>
        </div>
        {/* //Third column */}
        {/* end of photos */}
      </div>
      <div className="travel">
        <div>
          <h1>Travel Blog</h1>
        </div>
        <div className="block">
          <div className="subblock">
            <img
              className="subblockcss"
              src="https://seoimgak.mmtcdn.com/blog/sites/default/files/hero2_28charter_1.jpg?6Aw5c27vU4CZHFxUGqPGmRfFhJZWkXek"
              alt="planeimage"
            />
            <h6>#FlyLikeAStar with MakeMyTrip’s New Charter Flight Service!</h6>
          </div>
          <div className="subblock">
            <img
              className="subblockcss"
              src="https://seoimgak.mmtcdn.com/blog/sites/default/files/hero_562.jpg?hncoThn_5OqPcZRrgDR6YqsA9qQTM8TH"
              alt="t3"
            />
            <h6>6 Things to Do on a Business Trip!</h6>
          </div>
          <div className="subblock">
            <img
              className="subblockcss"
              src="https://seoimgak.mmtcdn.com/blog/sites/default/files/book-an-international-flights_0.jpg?ZXnoPWso01qBtd7QnC7zWWUQ6DEulQjg"
              alt="t1"
            />
            <h6>Your One-Stop Resource For Country-Wise Travel Guidelines!</h6>
          </div>

          <div className="subblock">
            <img
              className="subblockcss"
              src="https://seoimgak.mmtcdn.com/blog/sites/default/files/heroq.jpg?RV9Bjige7_b1rqOt.01OrFbUgqTlRwtG"
              alt="t2"
            />
            <h6>
              Protect Yourself with MakeMyTrip’s Special COVID-19 Insurance
              Policy!
            </h6>
          </div>
        </div>
      </div>

      <div className="First">
        <div>
          <h6>PRODUCT OFFERING</h6>

          <p>
            {" "}
            Flights
            <br />
            International Flights
            <br />
            Charter Flights
            <br />
            Hotels
            <br />
            International Hotels
            <br />
            Homestays and Villas
            <br />
            Activities
            <br />
            Holidays In India
            <br />
            International Holidays
            <br />
            Book Hotels From UAE
            <br />
            myBiz for SME Travel
            <br />
            Book Online Cabs
            <br />
            Book Bus Tickets
            <br />
            Book Train Tickets
            <br />
            Vande Bharat Mission Flights
            <br />
            Air Bubble Flights
            <br />
            Cheap Tickets to India
            <br />
            Book Flights From US
            <br />
            Book Flights From UAE
            <br />
            Trip Planner
            <br />
            Gift Cards
            <br />
            Travel Blog
            <br />
            PNR Status
          </p>
        </div>
        {/* makemytrip div */}
        <div>
          <h6>MAKEMYTRIP</h6>
          <p>
            About Us
            <br />
            Investor Relations
            <br />
            Careers
            <br />
            Corporate Travel
            <br />
            MMT Foundation
            <br />
            CSR Policy
            <br />
            myPartner - Travel Agent Portal
            <br />
            Foreign Exchange
            <br />
            List your hotel
            <br />
            Partners- Redbus
            <br />
            Partners- Goibibo
          </p>
        </div>
        {/* about the site div */}
        <div>
          <h6>ABOUT THE SITE</h6>
          <p>
            Contact Us
            <br /> Payment Security
            <br /> Privacy Policy
            <br /> User Agreement
            <br /> Terms of Service
            <br />
            More Offices
            <br />
            Make A Payment
            <br /> Work From Home
          </p>
        </div>
      </div>
      <div className="Second">
        <h6 className="text">QUICK LINKS</h6>
        <p>
          Flights Discount Coupons, Domestic Airlines, Indigo Airlines, Air
          Asia, SpiceJet, GoAir, Air India, Air India Express, Vistara, New
          Delhi Mumbai Flights
          <br />, Pune Delhi Flights, Delhi Chennai Flights, Delhi Guwahati
          Flights, Mumbai Varanasi Flights, Guwahati Delhi Flights, Goa Delhi
          Flights, Delhi Goa Flights, Delhi Chennai Flights
        </p>
      </div>
      <div className="Second">
        <h6 className="text">IMPORTANT LINKS</h6>
        <p>
          Cheap Flights, Flight Status, Chennai Mumbai flights, Mumbai Hyderabad
          flights, Hyderabad Bangalore flights, Pune Bangalore flights, Mumbai
          Jaipur flights, Mumbai Chandigarh flights, Bangalore Kolkata flights
          <br />, Hyderabad Visakhapatnam flights, Chandigarh Bangalore flights,
          Jaipur Mumbai flights, Mumbai Shirdi Flights, Delhi to Tirupati
          Flight, Indore to Mumbai Flight, Kolkata to Rupsi Flight, Rupsi to
          Guwahati Flight,
          <br /> Pasighat to Guwahati Flight, Delhi to Khajuraho flight, Cochin
          to Agatti Island Flight
        </p>
      </div>
      <div className="Third">
        <div>
          <h5>Q - How do I make a flight booking on MakeMyTrip?</h5>
          <p>
            A: You can book a flight on MakeMyTrip in five easy steps: Head over
            to the MakeMyTrip flight booking page, Enter your departure and
            arrival destinations, Select your air travel dates, Choose from our
            wide range of flights based on your airfare preferences, Click on
            ‘Book Now’ and your air flight booking is done. Alternatively, you
            can also use the MakeMyTrip app for your flight ticket booking.
            Download the MakeMyTrip app, Put in the details i.e. date of
            journey, departure and arrival destinations, travel class of your
            choice, Select on your best comfortable option and click on 'Book
            Now'.
          </p>
        </div>
        <div>
          <h5>Q - Can I avail domestic flight offers on MakeMyTrip?</h5>
          <p>
            A: Of course, you can. While making domestic flight bookings, you
            can avail any special offer that is active at that time. In
            accordance with the offer selected, a listing of eligible flights
            would show up on your screen. You can then apply the price filter
            and click on the downwards arrow, following which budget-friendly
            flights would start showing up in ascending order from the top
            (lowest price on top).
          </p>
        </div>
        <div>
          <h5>Q - How can I avail budget air tickets on MakeMyTrip?</h5>
          <p>
            A: It’s super-easy to avail budget airfare while booking your flight
            tickets on MakeMyTrip. Just select the ‘Price’ filter once the
            available flight options are displayed and adjust according to your
            convenience. On the MakeMyTrip app, you can select the downward
            arrow, which will show the lowest airfare at the top and continue
            downward in ascending order.
          </p>
        </div>
        <div>
          <h5>
            Q - Why could I not avail the flight booking offers at the time of
            checkout?
          </h5>
          <p>
            A: MakeMyTrip makes use of a world-class real-time reservation
            database to list airfare and availability. As dynamic changes in
            airfare take place, or the available flight tickets sell out, the
            database reflects the changes in real-time. Hence, we suggest, you
            double-check online flight booking prices when purchasing flight
            tickets, as the airfare might have been dynamically updated since
            you first selected the air travel dates or planned your itinerary.
          </p>
        </div>
        <div className="fourth">
          <div className="left">icons</div>
          <div calssName="Right">
            <h4>
              2021 MAKEMYTRIP PVT. LTD.
              <br />
              Country India USA UAE
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
