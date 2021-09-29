import { FilterSection, FlightBody, FlightMainDiv, FlightsAvailable } from "../Styles/FlightStyles";
import { FlightDetails } from "./FlightDetails";
import { PopularFilters } from "./PopularFilters";
import { SearchFlight } from "./SearchFlight";


export function Flight(){

    return (
        <FlightMainDiv >
            <SearchFlight></SearchFlight>
            <FlightBody>
                <FilterSection>
                    <PopularFilters></PopularFilters>
                </FilterSection>
                <FlightsAvailable>
                    <h2>Flights from New Delhi to Bengaluru</h2>
                    <div className="add"></div>
                    <div className="dateWindow">
                        <div className="dates"></div>
                        <div className="sortedBy"></div>
                    </div>
                    <FlightDetails/>
                </FlightsAvailable>
            </FlightBody>
        </FlightMainDiv>
    )
}