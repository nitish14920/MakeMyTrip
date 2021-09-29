import { IndividualFlight } from "./IndividualFlight"

export function FlightDetails(){
    const data = [1,2,3,4,5,6]

    return(
        <div>
            {
                data.map((e)=><IndividualFlight></IndividualFlight>)
            }
        </div>
    )
}