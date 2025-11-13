import React from "react";
// Spread and rest operator
{/* <Propfour label="Email"  type="email" placeholder="you@example.com" required/>
<Propfour label="Password" type = "password" minLength="6"/> */}


function Propfour({label,...inputProps}){
    console.log(inputProps)
    console.log(inputProps)
    return (
        <label style={{display:"block",marginBottom:"10px"}}>
            {label}
            <input {...inputProps}></input>
        </label>
    );

}

export default Propfour