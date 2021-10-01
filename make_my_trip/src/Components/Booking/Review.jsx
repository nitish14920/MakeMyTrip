import { ReviewMainDiv } from "../Styles/ReviewStyles"
import { BookingFlightDetails } from "./BookingFlightDetails"
export function Review(){

    const FlightDetails = {
        time:"21:03",
        date:"Fri, 1 Oct 21",
        place:"New Delhi",
        airportName:"Indira Gandhi International Airport",
        terminal:"Terminal 2"
    }
    return (

        <ReviewMainDiv>
            <div className="head">
                <h2>Review your booking</h2>
            </div>
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
                    <BookingFlightDetails data={FlightDetails}/>
                    <div className="raw2-div2">2 hrs 35 mins</div>
                    <BookingFlightDetails data={FlightDetails}/>
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
        </ReviewMainDiv>
    )
}