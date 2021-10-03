import React from 'react';
import './Header.css';
import Login from '../Login/Login';
import { relativeTimeRounding } from 'moment';

function Header() {
    const logo = window.location.origin + '/mmtLogoWhite.png';
    const mybiz = window.location.origin + '/mybiz12345.png';
    const travellug = window.location.origin + '/travellug123.png';

    return (
        <div>
            {/* https://stackoverflow.com/questions/47196800/reactjs-and-images-in-public-folder */}
            <div className='header-main'>
                <div>
                    <img className='header-img-1' src={logo} alt="yourpic" width='110' height='38' />
                </div>
                <div className='header-mybiz'style={{marginRight:'-70px'}}>
                    <img className='header-img-2'src={mybiz} alt='mybiz' width='30' height='30' style={{paddingRight:'5px'}}/>
                    <div>
                        <div className='header-mybiz-1'>Introducing myBiz</div>
                        <div className='header-mybiz-2'>MakeMyTrip for Business</div>
                    </div>
                </div>
                <div className='header-mytrips' style={{marginLeft:'50px'}}>
                    <img src={travellug} alt='mybiz' width='30' height='30'style={{paddingRight:'5px'}}/>
                    <div>
                        <div className='header-mytrips-1'>MyTrips</div>
                        <div className='header-mytrips-2'>Manage your bookings</div>
                    </div>
                </div>
                
                <div style={{marginRight:'-70px', marginTop:"-6%"}} >
                    <Login />
                </div>
                <div >
                    <img src={window.location.origin + '/conversion.png'} alt="none" width='160px'/>
                </div>
            </div>

            {/* <div style={{color:'blue',position:"relative",top:'-290px',left:'350px'}}>
                    <Login />
                    </div> */}



            

            
        </div>
    )
}

export default Header
