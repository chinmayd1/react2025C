import React from "react";
// Destructing
function Proptwo({title,subtitle}){
    return(
        <div>
            <h3>{title}</h3>
            {subtitle && <p>{subtitle}</p> }
        </div>
    )
}
export default Proptwo

