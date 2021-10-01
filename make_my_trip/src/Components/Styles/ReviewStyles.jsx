
import styled from "styled-components";

export const ReviewMainDiv = styled.div`

background-color: #e5eef4;
height: 100vh;

& .head{
    background-color:#0a223d ;
    color: white;
    height: 60px;
    line-height: 55px;
    padding-left:50px;
}
& .itinerary{
    & > :first-child{
        margin-left: 50px;
    }
    & > :nth-child(2){
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
}
& .raw1,.raw2,.raw3{
    display: flex;
    width: 65vw;
    justify-content: space-between;
    background-color: white;
    
    margin-left: 50px;
    & > h4{
        color: #2e2e2e;
        margin-right: 10px;
    }
    & .raw1-depart{
        display: flex;
        flex-direction: column;
        background-color: #2e2e2e;
        color: white;
        height: 40px;
        width: 80px;
        margin-top: 10px;
        padding: 2px;
        text-align: center;
        & h3{
            margin: 0px;
            font-weight: 400;
        }
        & span{
            font-size: 15px;
            line-height: 12px;
        }
    }
    & .raw1-div2{
        margin-right: 200px;
        margin-top: 10px;
        color: #2e2e2e;
        & h3,p{
            margin: 0px;
            font-weight: 400;
        }
    }
    & .cancellaion{
        background-color: #caf2e6;
        height: 20px;
        border-radius: 5px;
        margin-top: 20px;
        padding: 5px;
        font-size: 13px;
        color: #08a19c;
        & h4{
            margin: 0px;
        }
    }
    
    
}
& .raw2{
    border-top: 1px  solid #929191;
    border-bottom: 1px  solid #929191;
    padding: 15px;
    width: 62.8vw;
    & .raw2-div1{
        height: 40px;
        margin-top:25px;
        & > h4{
            margin: 0px;
        }
    }
    & .raw2-div2{
        border-bottom: 1px solid gray ;
        height: 30px;
        width: 120px;
        text-align: center;
        margin-top: 40px;
    }
    & > img{
        height:40px;
        margin-top: 30px;
    }
}
& .raw3{
    height: 25vh;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    & > :first-child{
        display: flex;
        justify-content: flex-start;
        & >div{
        margin-right: 40px;
        margin: 20px;
        }
        & span{
        font-size: 13px;
        }
        & h5{
        margin: 5px;
        margin-left: 0px;
        
        }
    }
    
    & .add-extra{
        display: flex;
        height: 80px;
        width: 62.5vw;
        border: 1px solid gray;
        border-radius: 10px;
        position: absolute;
        left: 65px;
        top:62vh;
        & img{
            height: 35px;
            width: 30px;
            background-color: #d9ebff;
            margin-left: 50px;
            margin-right: 20px;
            margin-top: 20px;
            border-radius: 3px;
        }
        & > span > h3,p{
            margin: 0px;
            
        }
        & > span{
            margin-top: 10px;
            margin-left: 10px;
        }
        & >span >h3{
            color: red;
        }
        & > button{
            position: relative;
            left: 130px;
            top: 20px;
            height: 35px;
            width: 90px;
            border-radius: 20px;
            background-color:white ;
            border: none;
            color: #26a0ff;
            border: 1px solid #26a0ff;
        }
        & button:hover{
            background-color: #26a0ff;
            color: white;
        }
    }
}
`