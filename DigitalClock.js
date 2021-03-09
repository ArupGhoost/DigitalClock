import React, { useState } from 'react'
import './DigitalClock.css'


function DigitalClock() {
     
     let time = new Date().toLocaleTimeString();
     const[cTime, setcTime] = useState(time)
    
    const upDateTime = () =>{
        time = new Date().toLocaleTimeString();
        setcTime(time)
    }
      
    setInterval(upDateTime,1000);

    let date = new Date().toLocaleDateString();
    

    
    

    return (
        <>
        <div>
            <div className='clock'>
            <h1 style={{ fontSize:'20vh'}}>{cTime}</h1>
            
            </div>
            <div className='date'>
               <h1 style={{fontSize:'10vh'}}>{date}</h1>
            </div>
            <h1>Happy Coding</h1>
        </div>
        </>
    )
}

export default DigitalClock
