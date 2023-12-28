import React from 'react'
import LogoImg from "../asset/amazon_logo.png";
import "./AmazonCloneStyles.css";

const AmazonClone1 = () => {
  return (
    <div>
        <div  style={{height:"60px",  backgroundColor: "rgb(14, 13, 13)",
    color: "white",}} className='navbar'>
       <div>
        <img  className=' logo' style={{height:"50px",width:"100%"}}
           src= {LogoImg} alt="LogoImg" /> 
      </div>
      <div  style={{color:"white "}}className='nav-address'>
        <p>address</p>
      </div>
      </div>
       
      

   
    </div>
  )
}

export default AmazonClone1