import React, { useEffect, useState } from 'react'

function Clock() {
    const [clockstate, setClockState]= useState();
    useEffect(() => {
      setInterval (() => {
        const date= new Date();
        setClockState(date.toLocaleTimeString())
      },1000);
    }, []);
    
  return (
    <div style={{fontSize:"100px", margin:"200px 500px", textAlign:"center", borderRadius:"50%", border:"2px Solid red",width:"300px", height:"300px", display:"flex"
,backgroundColor:"yellow", padding:"80px"}}>{clockstate}</div>
  )
}

export default Clock