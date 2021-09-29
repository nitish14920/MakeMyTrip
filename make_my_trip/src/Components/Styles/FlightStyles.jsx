import styled from 'styled-components'

export const FlightMainDiv = styled.div`
height: 150vh;
width: 100%;
background-color: #e5eef4;
font-family: 'Lato',sans-serif;
`
export const InputDIv = styled.div`
height: 5vh;
background-color: #1e2c39;
border-radius: 4px;
width: 160px;
margin-right: 5px;
height: 46px;
& span{
    display: block;
    padding: 4px 9px 0;
    color: #008cff;
    font-weight: 700;
    font-size: 12px;
    line-height: 12px;
    margin-bottom: 5px;
}
& input{
    border: 0;
    outline: 0;
    background: none;
    min-width: 140px;
    cursor: pointer;
    padding: 4px 9px;
    text-transform: capitalize;
}

`
export const SearchBox = styled.div`
display: flex;
flex-wrap: wrap;
background-color: #041422;
justify-content: center;
padding: 11px 0;
height: 200px;
& i{
    color:#008cff;
    margin-top: 15px;
    margin-right: 5px;
    font-weight: 600;  
}
& > button{
    width: 150px;
    height: 46px;
    border-radius: 50px;
    background-color: #2d86f8;
    margin-left: 20px;
}
`

export const FlightBody = styled.div`

/* background-color: #e5eef4;
width: 100vw;
height: 100vh;
font-family: 'Lato',sans-serif; */
`
export const FilterSection = styled.div`
width:300px ;
padding: 12px 15px;
position: absolute;
top: 15%;
left:8%;
background-color:white;
& .popularSection > div{
    display: flex;
    margin-bottom: 5px;
    font-size: 14px;
    
    font-weight: 400;
    color: rgba(0,0,0,.85);
}
& .checkBox{
        cursor: pointer;
        width: 20px;
        height: 20px;
        border: 1px solid #838383;
        border-radius: 3px;
        margin-right: 8px;
    }
& .checkBox > i{
    display: none;
    margin-left: 3px;
    margin-top: 2px;
    
}

`
export const FlightsAvailable = styled.div`
width:730px ;
padding: 12px 15px;
position: absolute;
top: 15%;
right:8%;
&> h2{
    color: white;
}
& .add ,.dateWindow{
    height: 50px;
    background-color: white;
    margin-bottom: 10px;
}
& .dateWindow{
    height: 70px;
}
`