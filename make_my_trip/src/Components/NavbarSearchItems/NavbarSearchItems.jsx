import React from 'react'
import {Link} from 'react-router-dom'
import './NavbarSearchItems.css'

const logo = window.location.origin + '/mmtLogoWhite.png';

const links =[
    {
        to:'/',
        imgLink:  window.location.origin + '/aeroplane.png',
        title:'Flights'
    },
    {
        to: '/hotels',
        imgLink:  window.location.origin + '/hotels.png',
        title:'hotels'
    },
    {
        to: '/homestays',
        imgLink:  window.location.origin + '/villas.png',
        title: 'Villas&Apts'
    },
    {
        to: '/holidays-india',
        imgLink:  window.location.origin + '/holidaypackages.png',
        title:'Holiday Packages'
    },
    {
        to: '/railways',
        imgLink:  window.location.origin + '/train.png',
        title:'Trains'
    },
    {
        to: '/bus-tickets',
        imgLink:  window.location.origin + '/bus.png',
        title:'Buses'
    },
    {
        to: '/cabs',
        imgLink:  window.location.origin + '/cabs.png',
        title:'Cabs'
    },
    {
        to: '/visa',
        imgLink:  window.location.origin + '/visa.png',
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
                            <div style={{backgroundColor: '#FFFFFF' ,textDecoration:'none'}}>{title}</div>
                        </Link>
                        </div>
                })
            }

            
        </div>
    )
}

export default NavbarSearchItems
