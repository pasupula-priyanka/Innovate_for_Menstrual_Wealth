import React from "react";
import Image from '../image/Buy.jpg'
const Buy = () => {
return (
	<div>
        <div id="bg-container">
            <img src={Image} alt="" />
         </div>
         <div className="container">
                <div className="heading" >
                      <h1>Start Your Journey with us</h1>
                </div>
                <p className="paragraph" style={{fontSize:"15px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non malesuada ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non malesuada ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non malesuada ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non malesuada ante.
                 Duis ac urna quis augue congue aliquet ac et tortor. In tortor felis, porttitor vel interdum non, elementum non ex. Quisque porttitor dapibus porta. Donec vel sodales tellus. Nam ut ullamcorper ligula. Suspendisse eget nunc tempor, venenatis arcu sed, interdum sapien. Curabitur tellus risus, tincidunt eget aliquet a, pulvinar a nisi. Quisque ac tincidunt urna. Fusce diam nibh, bibendum sed urna in, condimentum tincidunt risus. Duis imperdiet lacinia erat sit amet pellentesque. Vivamus laoreet sapien metus, ac ultrices dui porta vel. Duis ac neque porttitor, elementum augue in, pretium dolor. Duis eu auctor eros.
			  </p>
                <div className="row">
                    <div className="card"  style={{height:"200px"}}>
                          
                          <div className="card-body" style={{textAlign:"center"}}>
                            <h3 style={{fontSize:"20px"}}>
                              Sparkle Products
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non malesuada ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non malesuada ante</p>
                            <div className="centre-btn">
				   <button className="button">Use the Product</button>  
				   </div>
                            </div>
                    </div>
                    <div className="card"  style={{height:"200px"}}>
                         
                          <div className="card-body" style={{textAlign:"center"}}>
                          <h3 style={{fontSize:"20px"}}>
                              Nua Body Products
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non malesuada ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non malesuada ante</p>
                            <div className="centre-btn">
				   <button className="button">Use the product</button>  
				   </div>
                            {/*<Link to='/module-2' style={{fontSize:"20px",marginTop:"10px"}}> <p>Know Fundamentals of Programming</p> </Link> */}
                          </div>
                    </div>
                    <div className="card"  style={{height:"200px"}}>
                          
                          <div className="card-body" style={{textAlign:"center"}}>
                          <h3 style={{fontSize:"20px"}}>
                              But Nirvana Products
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non malesuada ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non malesuada ante</p>
                            <div className="centre-btn">
				   <button className="button">Use the product</button>  
				   </div>
                          </div>
                    </div>
                    <div className="card"  style={{height:"200px"}}>
                          
                          <div className="card-body" style={{textAlign:"center"}}>
                          <h3 style={{fontSize:"20px"}}>
                              Spio Products
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non malesuada ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non malesuada ante</p>
                            <div className="centre-btn">
				   <button className="button">Use the product</button>  
				   </div>
                          </div>
                    </div>
                </div>
				
             </div>
         </div>
);
};

export default Buy;
