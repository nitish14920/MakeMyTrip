import { InputDIv, SearchBox } from "./FlightStyles";


export function SearchFlight(){

    return (
        <SearchBox>
           <InputDIv className="selection" style={{width:"100px"}}>
                <span>TRIP TYPE</span>
                <select className="selectInput">
                     <option value="Round Trip">Round Trip</option>
                     <option value="One Way">One Way</option>
                     <option value="Multi Trip">Multi Trip</option>
                </select>
           </InputDIv> 
           
           <InputDIv >
                <span>From</span>
                <input className="searchInput" type="text" name="" />
           </InputDIv>
           <i class="fas fa-exchange-alt"></i>
           <InputDIv>
                <span>To</span>
                <input className="searchInput" type="text" name="" />
           </InputDIv>
           <InputDIv>
                <span>DEPART</span>
                <input className="searchInput" type="text" name="" />
           </InputDIv>
           <InputDIv>
                <span>RETURN</span>
                <input className="searchInput" type="text" name="" />
           </InputDIv>
           <InputDIv>
                <span>PASSENGERS & CLASS</span>
                <input className="searchInput" type="text" name="" />
           </InputDIv>
           <button>SEARCH</button>
        </SearchBox>
    )
}