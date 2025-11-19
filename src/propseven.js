import React from "react";


function Propseven({onChange}){

    const [count,setCount] = React.useState(0)

    function increment(){
        const next = count + 1; // this will increase the next value
        setCount(next); // this is reload the component so load the UI 
        onChange(next); // this is call the function passes as prope
    }

    return <button onClick={increment}>Count:{count}</button>

}