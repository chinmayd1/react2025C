
// Children + variant prompt

import React from "react"

function Propsix({varaint = "info" , children}){
    const styles = {
        info:{border:"4px solid blue",padding:"10px"},
        warning:{border:"4px solid orange",padding:"10px"},
        error:{borderLeft:"4px solid red",padding:"10px"},
    };
    return <div style={styles[varaint]}>{children}</div>;

}

export default Propsix