import { InputDIv, SearchBox } from "../Styles/FlightStyles";


export function SearchFlight(){

    return (
        <SearchBox>
           <InputDIv style={{width:"100px"}}>
                <span>TRIP TYPE</span>
                <div>One Way</div>
           </InputDIv> 
           
           <InputDIv>
                <span>From</span>
                <input type="text" name="" />
           </InputDIv>
           <i class="fas fa-exchange-alt"></i>
           <InputDIv>
                <span>To</span>
                <input type="text" name="" />
           </InputDIv>
           <InputDIv>
                <span>DEPART</span>
                <input type="text" name="" />
           </InputDIv>
           <InputDIv>
                <span>RETURN</span>
                <input type="text" name="" />
           </InputDIv>
           <InputDIv>
                <span>PASSENGERS & CLASS</span>
                <input type="text" name="" />
           </InputDIv>
           <button>SEARCH</button>
        </SearchBox>
    )
}