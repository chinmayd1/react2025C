import React from "react";


let FunctionClick =()=>{
    function clickHandler(){
        alert("handled was click .....")
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick