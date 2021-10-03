import { IndFlight } from "./IndividualFlightStyles";
import {Link} from 'react-router-dom'
export function IndividualFlight(){
   

    return(
        <IndFlight>
            <img src="data:image/png;base64,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" alt="img" />
            <h5 className="lineHeight">AirAsia</h5>
            <div>
                <h3>04:55</h3>
                <p>New Delhi</p>
            </div>
            <div>
                <h3>06 h 35 m</h3>
                <p>non stop</p>
            </div>
            <div>
                <h3>11:30</h3>
                <p>Bengaluru</p>
            </div>
            <h3 className="lineHeight">7422</h3>
            <Link to="/review"><button>Book Now</button></Link>
        </IndFlight>
    )
}
