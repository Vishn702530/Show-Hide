import React, { useState } from 'react'

function Content() {
  const[visible,isVisible]=useState("")
  return (
    <div className='main'>
      
      <div className='box' style={{width:"240px",height:"190px",backgroundColor:"yellow",marginLeft:"42%",marginTop:"7%",borderRadius:"10%",textAlign:"center"}}>
       
       <h1>{visible}</h1>
       <div className='cont' style={{paddingTop:"20%",paddingLeft:"6%"}}>
        <button className='btn btn-success m-2'  onClick={()=>isVisible("HELLO")}>SHOW</button>
        <button className='btn btn-danger m-2' onClick={()=>isVisible("")}>HIDE</button>
        </div>
      </div>
    </div>
  )
}

export default Content