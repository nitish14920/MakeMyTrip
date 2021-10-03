import { Link } from "react-router-dom"
import { IndividualFlight } from "./IndividualFlight"
import { IndFlight } from "./IndividualFlightStyles"
export function FlightDetails({flights,airports}){
    
    return(
        <div>
            {
                flights.map((e)=>{
                return <IndFlight>
                    <img src={e.url} />
                    <h5 className="lineHeight">{e.title}</h5>
                    <div>
                        <h3>{e.time1}</h3>
                        <p>New Delhi</p>
                    </div>
                    <div>
                        <h3>04 h 35 m</h3>
                        <p>non stop</p>
                    </div>
                    <div>
                        <h3>{e.time2}</h3>
                        <p>Bengaluru</p>
                    </div>
                    <h3 className="lineHeight">&#x20b9;{e.price}</h3>
                    <Link to="/review"><button>Book Now</button></Link>
                </IndFlight>})
            }
        </div>
    )
}