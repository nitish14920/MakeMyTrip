import React from 'react';
import './ExploreSearch.css'

function ExploreSearch() {
    return (
        <div className='explore-search'>
            <div>
                <div className='explore-s-1'>
                    <div><img src={'https://promos.makemytrip.com/Growth/Images/B2C/x/dt_tert_ti2.png'} alt='trip'/></div>
                    <div  style={{margin:'0 0 0 10px'}}>Trip Ideas</div>
                </div>
            </div>
            <div>
                <div className='explore-s-2'>
                    <div><img src={'https://promos.makemytrip.com/Growth/Images/B2C/x/dt_tert_tm1.png'} alt='trip'/></div>
                    <div  style={{margin:'0 0 0 10px'}}>Trip Money</div>
                </div>
            </div>
            <div>
                <div className='explore-s-3'>
                    <div><img src={'https://promos.makemytrip.com/Growth/Images/B2C/2x/dt_tert_flights.png'} alt='trip' width='30' height='30'/></div>
                    <div style={{margin:'0 0 0 10px'}}>Explore International Flights</div>
                </div>
            </div>
            <div>
                <div className='explore-s-4'>
                    <div><img src={'https://promos.makemytrip.com/Growth/Images/B2C/x/dt_tert_ng1.png'} alt='trip'/></div>
                    <div style={{margin:'0 0 0 10px'}}>Nearby Getaways Ideas</div>
                </div>
            </div>
            <div>
                <div className='explore-s-5'>
                    <div><img src={'https://promos.makemytrip.com/Growth/Images/B2C/x/dt_tert_gc1.png'} alt='trip'/></div>
                    <div style={{margin:'0 0 0 10px'}}>Gift cards</div>
                </div>
            </div>
            
        </div>
    )
}

export default ExploreSearch
