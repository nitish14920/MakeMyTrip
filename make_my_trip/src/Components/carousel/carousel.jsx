import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./carouselItem";
import "./Carousel.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
];

function CarouselApplication() {
  return (
    <>
      
      <div className="CarouselApp">
        <Carousel breakPoints={breakPoints} >
          
        <Item>
            
            <div style={{display:'flex'}}>

              <img className='carousel-1-img'src={'https://promos.makemytrip.com/notification/xhdpi/Vande-Flight-10072020.png'} alt='img' ></img>
            
            <div className='carousel-story'style={{fontSize:'13px'}}>Students Special Helpline: Call 01244628747 for international booking assistance & special student fares</div>
            </div>
            </Item>
            <Item>
            
            <div style={{display:'flex',padding: '5px'}}>

              <img className='carousel-1-img'src={'https://promos.makemytrip.com/Growth/Images/B2C/2x/ic_flight_covid_info_dt.png'} alt='img' ></img>
            
            <div className='carousel-story' style={{fontSize:'15px',marginTop:'23px'}}>Flight booking impacted due to lockdown?</div>
            </div>
            </Item>
            <Item>
            
            <div style={{display:'flex'}}>

              <img className='carousel-1-img'src={'https://promos.makemytrip.com/notification/xhdpi/Vande-Flight-10072020.png'} alt='img' ></img>
            
            <div className='carousel-story'>Booking an International Flight? <br /><span style={{color:'blue'}}>see schedules and country guidelines</span></div>
            </div>
            </Item>
            <Item>
            
            <div style={{display:'flex'}}>

              <img className='carousel-1-img c-img-4'src={'https://promos.makemytrip.com/notification/xhdpi/Flight-update_a21052020.png'} alt='img' ></img>
            
              <div className='carousel-story'>Many international destinations are open for indians now </div>
            </div>
            </Item>
            <Item>
            
            <div style={{display:'flex'}}>

              <img className='carousel-1-img'src={'https://promos.makemytrip.com/notification/xhdpi/Flight-update_a21052020.png'} alt='img' ></img>
            
              <div className='carousel-story'>Booking an International Flight? <br /><span style={{color:'blue'}}>see schedules and country guidelines</span></div>
            </div>
            </Item>
            <Item>
            
            <div style={{display:'flex'}}>

              <img className='carousel-1-img'src={'https://promos.makemytrip.com/notification/xhdpi/Flight-update_a21052020.png'} alt='img' ></img>
            
            <div className='carousel-story' >Going abroad for education employment or olympics? <br /><span style={{color:'blue'}}>Check Gol guidelines</span></div>
            </div>
            </Item>
           
          
        </Carousel>
      </div>
    </>
  );
}

export default CarouselApplication;
