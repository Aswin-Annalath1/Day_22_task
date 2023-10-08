import React from "react";

const FirstCode=({p,num,user,storage,req1,req2,req3,req4,req5,req6})=>{
    
    return(
        <React.Fragment>
            <div className="border">
                <p className="top">{p}</p>
                <h1>${num}/month</h1>
                <hr></hr>
                <h6>{user}</h6>
                <h6>{storage}</h6>
                <h6>{req1}</h6>
                <h6>{req2}</h6>
                <h6>{req3}</h6>
                <h6>{req4}</h6>
                <h6>{req5}</h6>
                <h6>{req6}</h6>
                <button className="box">BUTTON</button>
            </div>
        </React.Fragment>
    )
}
export default FirstCode;