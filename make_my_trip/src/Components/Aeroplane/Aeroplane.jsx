import React from 'react'
import './Aeroplane.css'

function Aeroplane() {
    return (
        <div style={{border:'1px solid black'}}>
            <form onSubmit={e=>{e.preventDefault()}}>
            <div className='aeroplane-trip-types'>
                    <div style={{color:'black',fontSize:'10px'}}>
                        <label> <input type='radio' name='oneway' placeholder=''/>ONEWAY</label>
                        <label> <input type='radio' name='oneway' placeholder=''/>ROUNDTRIP</label>
                        <label> <input type='radio' name='oneway' placeholder=''/>MULTICITY</label>
                    </div>
                    <div style={{display:'flex',fontSize:'7px',color:'black'}}>
                        <h1>International Flights|</h1>
                        <h1>Domestic Flights|</h1>
                        <h1><span style={{background:'red',padding:'5px',boxShadow: '0 1px 4px 0 rgb(0 0 0 / 20%)',
    backgroundColor: 'rgba(254, 197, 0, 0.2)'}}>Flight+Cab: Serving non Airport cities</span></h1>
                    </div>
                </div>
                <div>
                    <label>From</label>
                    <input type='text' placeholder=''/>   
                </div>
            </form>
            
        </div>
    )
}

export default Aeroplane
