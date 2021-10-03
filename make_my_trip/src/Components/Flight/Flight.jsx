import { FilterSection, FlightBody, FlightMainDiv, FlightsAvailable } from "./FlightStyles";
import { FlightDetails } from "./FlightDetails";
import { Filters } from "./PopularFilters";
import { SearchFlight } from "./SearchFlight";
import { useEffect,useState } from "react";
import axios from "axios"

export function Flight(){
    const [flights, setFlights] = useState([])
    const [initial, setInitial] = useState([])
    const [airports,setAirport] = useState([])
    
    const vistaraFilter = (e)=>{
        const vistara = initial.filter(word => word.title == "Vistara");

        setFlights(vistara)
    }
    const gofirstFilter = ()=>{
        const gofirst = initial.filter(word => word.title == "Go First");
        setFlights(gofirst)
    }
    useEffect(()=>{
        axios.get("http://localhost:3002/flights").then((res)=>{
        console.log(res.data)
        setFlights(res.data)
        setInitial(res.data)
    })
    axios.get("http://localhost:3002/airports").then((res)=>{
        console.log(res.data)
        setAirport(res.data)
        
    })
    },[])

    

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
                    <div className="vista" onClick={vistaraFilter} ></div>
                    <div className="gofir" onClick={gofirstFilter} style={{width:"20px",height:"17px",backgroundColor:"white",position:"relative",top:"80px",left:"1px",}}></div>
                    <Filters status={true} title="Popular Filters" data ={["Go First","Indigo","Non Stop","Vistara"]}></Filters>
                    <Filters status={true} title="Stops From New Delhi" data ={["1 Stop","Non Stop"]}></Filters>
                    <Filters status={false} title="Departure From New Delhi" data ={filterBoxData}></Filters>
                    <Filters status={true} title="AirLines" data ={["Air India","Air Asia","Go First","IndiGo","Spicejet","Vistara"]}></Filters>
                    
                </FilterSection>
                <FlightsAvailable>
                    <h2>Flights from New Delhi to Bengaluru</h2>
                    
                    <FlightDetails flights ={flights} airports ={ airports}/>
                </FlightsAvailable>
            </FlightBody>
        </FlightMainDiv>
    )
}