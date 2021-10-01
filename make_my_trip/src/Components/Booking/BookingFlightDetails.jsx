import styled from "styled-components"
const BFD = styled.div`

display: flex;
flex-direction:column;
text-align: left;
width: 120px;
& > h2,h3,h5,p{
    margin: 0px;  
}
& > p{
    font-size: 13px;
}

`
export function BookingFlightDetails({data}){

    return(
        <BFD>
            <h2>{data.time}</h2>
            <h3>{data.date}</h3>
            <h5>{data.place}</h5>
            <p>{data.airportName}</p>
            <p>{data.terminal}</p>
        </BFD>
    )
}