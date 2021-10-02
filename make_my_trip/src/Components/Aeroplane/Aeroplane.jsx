import React from 'react'
import './Aeroplane.css';
// import Demo from '../Calendar/Demo'

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
                    <div style={{display:'flex',fontSize:'7px',color:'black',gap:'5px'}}>
                        <h1>International Flights |</h1>
                        <h1>Domestic Flights |</h1>
                        <h1><span style={{background:'red',padding:'5px',boxShadow: '0 1px 4px 0 rgb(0 0 0 / 20%)',
    backgroundColor: 'rgba(254, 197, 0, 0.2)'}}>Flight+Cab: Serving non Airport cities</span></h1>
                    </div>
                </div>
                <div style={{border:'1px solid black' ,width:'1100px',height:'100px',marginLeft:'80px',borderRadius:'5px',display:'flex'}}>

                    <div style={{display:'flex',flexDirection:'column',marginLeft:'10px'}}>
                        <div style={{marginLeft:'20px',fontSize:'20px',marginTop:'10px'}}>From</div>
                        <select style={{height:'40px',fontSize:'30px',width:'150px',WebkitAppearance:'none',border:'none',margin:'0 50px 0 20px'}}type="text" name="from" placeholder="">
                            <option style={{fontSize:'20px'}}>Hyderabad</option>
                            <option style={{fontSize:'20px'}}>Banglore</option>
                            <option style={{fontSize:'20px'}}>Mumbai</option>
                            <option style={{fontSize:'20px'}}>Delhi</option>
                            <option style={{fontSize:'20px'}}>Chennai</option>
                        </select>
                        
                    </div>
                    <div style={{borderLeft:'2px solid black',height:'100px'}}></div>

                    <div style={{display:'flex',flexDirection:'column',marginLeft:'10px'}}>
                        <div style={{marginLeft:'20px',fontSize:'20px',marginTop:'10px'}}>To</div>
                        <select style={{height:'40px',fontSize:'30px',width:'150px',WebkitAppearance:'none',border:'none',margin:'0 50px 0 20px'}}type="text" name="from" placeholder="">
                            <option style={{fontSize:'20px'}}>Mumbai</option>
                            <option style={{fontSize:'20px'}}>Banglore</option>
                            <option style={{fontSize:'20px'}}>Hyderabad</option>
                            <option style={{fontSize:'20px'}}>Delhi</option>
                            <option style={{fontSize:'20px'}}>Chennai</option>
                        </select>
                        
                    </div>
                    <div style={{borderLeft:'2px solid black',height:'100px'}}></div>

                    {/* <Demo></Demo> */}



                    


                    
                </div>
            </form>
            
        </div>
    )
}

export default Aeroplane
