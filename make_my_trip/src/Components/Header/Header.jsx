import React from 'react';
import './Header.css';


function Header() {
    const logo = window.location.origin + '/mmtLogoWhite.png';
    const mybiz = window.location.origin + '/mybizlog.jpeg';

    return (
        <div>
            {/* https://stackoverflow.com/questions/47196800/reactjs-and-images-in-public-folder */}
            <div className='header-main'>
                <div>
                    <img className='header-img-1' src={logo} alt="yourpic" width='110' height='38' />
                </div>
                <div className='header-mybiz'>
                    <img className='header-img-2'src={mybiz} alt='mybiz' width='30' height='30'/>
                    <div>
                        <div className='header-mybiz-1'>Introducing myBiz</div>
                        <div className='header-mybiz-2'>MakeMyTrip for Business</div>
                    </div>
                </div>
                <div className='header-mytrips'>
                    <img src={mybiz} alt='mybiz' width='30' height='30' />
                    <div>
                        <div className='header-mytrips-1'>MyTrips</div>
                        <div className='header-mytrips-2'>Manage your bookings</div>
                    </div>
                </div>
                <div>
                    login
                </div>
                <div>
                    conversion
                </div>
            </div>

            

            
        </div>
    )
}

export default Header
