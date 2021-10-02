import { FilterSection, FlightBody, FlightMainDiv, FlightsAvailable } from "./FlightStyles";
import { FlightDetails } from "./FlightDetails";
import { Filters } from "./PopularFilters";
import { SearchFlight } from "./SearchFlight";


export function Flight(){

    const filterBoxData = [
        {t:"6 AM",p:"7524",img:"https://imgak.mmtcdn.com/flights/assets/media/dt/listing/left-filters/morning_inactive.png?v=1"},
        {t:"6AM-12PM",p:"7524",img:"https://imgak.mmtcdn.com/flights/assets/media/dt/listing/left-filters/noon_inactive.png?v=1"},
        {t:"2 PM",p:"7524",img:"https://imgak.mmtcdn.com/flights/assets/media/dt/listing/left-filters/evening_inactive.png?v=1"},
        {t:"8 PM",p:"7524",img:"https://imgak.mmtcdn.com/flights/assets/media/dt/listing/left-filters/night_inactive.png?v=1"}
    ]
    return (
        <FlightMainDiv >
            <SearchFlight></SearchFlight>
            <FlightBody>
                <FilterSection>
                    <Filters status={true} title="Popular Filters" data ={["Refundable Fare","Indigo","Non Stop","Vistara"]}></Filters>
                    <Filters status={true} title="Stops From New Delhi" data ={["1 Stop","Non Stop"]}></Filters>
                    <Filters status={false} title="Departure From New Delhi" data ={filterBoxData}></Filters>
                    <Filters status={true} title="AirLines" data ={["Air India","Air Asia","Go First","IndiGo","Spicejet","Vistara"]}></Filters>
                    
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