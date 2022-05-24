import React from 'react';


import Image from '../image/Education.jpg';


const Education = () =>{
      
    return(
        <div>
        <div id="container">
        
        <div id="bg-container">
           <img src={Image} alt="" />
        </div>
        <div id="content-container">
            <h1 style={{fontSize:"30px"}}>Buckle Up!</h1>
            <p style={{fontSize:"20px"}}> Let's learn and earn 200 points begin in 3..2..1..</p>
        </div>
         </div>
        <div className="container">
                <div className="heading" >
                      <h1>Start Your Journey with us</h1>
                </div>
                <div className="row">
                    <div className="card"  style={{height:"100px"}}>
                          
                          <div className="card-body" style={{textAlign:"center"}}>
                            <h3 style={{fontSize:"20px"}}>
                              Module-1
                            </h3>
                                                   </div>
                    </div>
                    <div className="card"  style={{height:"100px"}}>
                         
                          <div className="card-body" style={{textAlign:"center"}}>
                          <h3 style={{fontSize:"20px"}}>
                              Module-2
                            </h3>
                            {/*<Link to='/module-2' style={{fontSize:"20px",marginTop:"10px"}}> <p>Know Fundamentals of Programming</p> </Link> */}
                          </div>
                    </div>
                    <div className="card"  style={{height:"100px"}}>
                          
                          <div className="card-body" style={{textAlign:"center"}}>
                          <h3 style={{fontSize:"20px"}}>
                              Module-3
                            </h3>
                          </div>
                    </div>
                    <div className="card"  style={{height:"100px"}}>
                          
                          <div className="card-body" style={{textAlign:"center"}}>
                          <h3 style={{fontSize:"20px"}}>
                              Module-4
                            </h3>
                          </div>
                    </div>
                </div>
				<div className="centre-btn">
				   <button className="button">ClICK HERE TO EARN COINS</button>  
				   </div>
             </div>
        </div>
    )
}



export default Education;
