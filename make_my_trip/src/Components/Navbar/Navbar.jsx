import React from 'react'
import './Navbar.css';
import ExploreSearch from '../ExploreSearch/ExploreSearch';
import Routes from '../Routes/Routes';
function Navbar() {
    return (
        <div>
            <div className="wrapper">
                <div className="first-box">
                    {/* <Routes/> */}
                </div>
                <div className="second-box">

                </div>
                <div className='second-box-end-search'> 
                    <div className='second-box-end-search-name'>SEARCH</div>
                </div>
                <p className='second-box-end-search-p'> <span>&#8963;&#8963;</span>Explore More<span>&#8963;&#8963;</span></p>
                <div className='explore-more-search'><ExploreSearch />
                </div>
                
            </div>

            
        </div>
    )
}

export default Navbar
