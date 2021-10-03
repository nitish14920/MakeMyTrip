import React from 'react'
import {Link} from 'react-router-dom'
import './NavbarSearchItems.css'

const logo = window.location.origin + '/mmtLogoWhite.png';

const links =[
    {
        to:'/',
        imgLink:  window.location.origin + '/aeroplane111.png',
        title:'Flights'
    },
    {
        to: '/hotels',
        imgLink:  window.location.origin + '/hotels111.png',
        title:'hotels'
    },
    {
        to: '/homestays',
        imgLink:  window.location.origin + '/villas111.png',
        title: 'Villas&Apts'
    },
    {
        to: '/holidays-india',
        imgLink:  window.location.origin + '/holidaypackages111.png',
        title:'Holiday Packages'
    },
    {
        to: '/railways',
        imgLink:  window.location.origin + '/train111.png',
        title:'Trains'
    },
    {
        to: '/bus-tickets',
        imgLink:  window.location.origin + '/bus111.png',
        title:'Buses'
    },
    {
        to: '/cabs',
        imgLink:  window.location.origin + '/cabs111.png',
        title:'Cabs'
    },
    {
        to: '/visa',
        imgLink:  window.location.origin + '/visa111.png',
        title:'Visa'
    },
]

function NavbarSearchItems() {
    return (
        <div className='Navbar-search-items-icon'>
            {
                links.map(({to,imgLink,title})=>{
                    return <div style={{marginTop:'15px',justifyContent:'center'}}>
                        
                        <Link to={to}>
                            <img src={imgLink}  alt='noimage' width='40' height='40'/>
                            {/* <div style={{backgroundColor: '#FFFFFF' ,textDecoration:'none'}}>{title}</div> */}
                        </Link>
                        <div style={{backgroundColor: '#FFFFFF' ,textDecoration:'none'}}>{title}</div>
                        </div>
                        
                })
            }

            
        </div>
    )
}

export default NavbarSearchItems
