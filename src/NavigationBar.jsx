// eslint-disable-next-line no-unused-vars
import React from "react";

const NavigationBar = () => {
  return (
      <div style={{zIndex:30, width:"100%" ,background:' rgba(0, 0, 0, 0.8)', padding:"20px 0", height:"60px"}}>
         <nav className="navbar" style={{
          display:'flex',
          justifyContent:'space-between',
          margin:'0 10px 20px 10px'


         }}>
              <h3 style={{
                color: 'white',
                marginBottom: '20px'
              }}>Borl2Earn</h3>
            
           
            <button
             style={
              {
                marginBottom:'40px'
              }
             }  
            >Sign up</button>
        </nav>
      </div>
  );
};

export default NavigationBar;
