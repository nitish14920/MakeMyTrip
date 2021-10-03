import { ReviewMainDiv } from "./ReviewStyles"
import { Link } from "react-router-dom"
import { BookingFlightDetails } from "./BookingFlightDetails"
export function Review(){

    const FlightDetails =[ {
        time:"21:03",
        date:"Fri, 1 Oct 21",
        place:"New Delhi",
        airportName:"Indira Gandhi International Airport",
        terminal:"Terminal 2"
    },
    {
        time:"02:05",
        date:"Sat, 2 Oct 21",
        place:"Bengaluru",
        airportName:"Bengaluru International Airport",
        terminal:"Terminal 1"
    }]
    return (

        <ReviewMainDiv>
            
            <div className="itinerary">
                <h2>Itinerary</h2>
                
                <div className="raw1">
                    <div className="raw1-depart">
                        <h3>DEPART</h3>
                        <span>Fri 1 Oct</span>
                    </div>
                    <div className="raw1-div2">
                        <h3>DEL-BLR</h3>
                        <p>Non stop|2 hrs 35 mins|Economy</p>
                    </div>
                    <div className="cancellaion">
                        <h4>Cancellation Fees Apply</h4>
                    </div>
                    <h4>Fare Rules</h4>
                </div>
                <div className="raw2">
                    <img src="https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/G8.png?v=7" alt="img" />
                    <div className="raw2-div1">
                        <h4>Go First</h4>
                        <span>G8-119</span>
                    </div>
                    <BookingFlightDetails data={FlightDetails[0]}/>
                    <div className="raw2-div2">2 hrs 35 mins</div>
                    <BookingFlightDetails data={FlightDetails[1]}/>
                    <div className="raw2-div1" style={{marginRight:"50px"}}>
                        <h4>Fare Type</h4>
                        <span>GoFirst</span>
                    </div>
                </div>
                <div className="raw3">
                    <div>
                        <div className="raw2-div1">
                            <h5>BAGGAGE:</h5>
                            <span>ADULT</span>
                        </div>
                        <div className="raw2-div1">
                            <h5>CHECK IN</h5>
                            <span>15 Kgs(1 piece only)</span>
                        </div>
                        <div className="raw2-div1">
                            <h5>CABIN</h5>
                            <span>7 Kgs(1 piece only)</span>
                        </div>

                    </div>
                    
                    <div className="add-extra">
                        <img src="../../../baggage.png" alt="img" />
                        
                        <span>
                            <h3>Add Extra check-in baggage</h3>
                            <p>Add Extra check-in baggage to this at a discounted price</p>
                        </span>
                        <button>+Add</button>
                    </div>
                    
                </div>
                
            </div>
            <div className="donation">
                <div>
                    <input type="checkbox" name="" id="" />
                    <h2>Donate 10 for COVID-19 Relief and Other Charity Initiatives</h2>
                    <a href="">Terms & Conditions</a>
                </div>
                <div>
                    <div>
                        <img src="https://imgak.mmtcdn.com/flights/assets/media/dt/review/charity_covid.png" alt="img" />
                        <div>
                            <p>Support COVID-19 relief work and safty initiatives.</p>
                            <a href="">Know More</a>
                        </div>
                        
                    </div>
                    <div>
                        <img src="https://imgak.mmtcdn.com/flights/assets/media/dt/review/charity_1.png?v=1" alt="img" />
                        <div>
                            <p>Support COVID-19 relief work and safty initiatives.</p>
                            <a href="">Know More</a>
                        </div>
                        
                    </div>
                    <div>
                        <img src="https://imgak.mmtcdn.com/flights/assets/media/dt/review/charity_2.png?v=1" alt="img" />
                        <div>
                            <p>Support COVID-19 relief work and safty initiatives.</p>
                            <a href="">Know More</a>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="fare">
                <div>
                    <h3>Base Fare</h3>
                    <p>Adult(s)(1X 6623)</p>
                    <h3 className="basefareprice">&#x20b9;7422</h3>
                </div>
                <div>
                    <h3>Fee & Surcharge</h3>
                    <h3>&#x20b9; 7422</h3>
                </div>
                <div>
                    <h2>Total Amount</h2> 
                    <h2>&#x20b9; 7422</h2>    
                </div>
            </div>
            <div className="cancellation">
                <h5>Cancellation & Date change charges</h5>
                <div>
                    <div>
                        <h6>Cancellation Fees Apply</h6>
                        <p>A penalty of upto 3800 will be charged by the airline & by MMT based on how close to the departure date you cancel.</p>
                    </div>
                    <span> &#x20b9; 3622</span>
                </div>
                <a href="">VIEW POLICY</a>
            </div>

           <Link to="/booking"><div className="continue">Continue</div></Link> 
        </ReviewMainDiv>
    )
}