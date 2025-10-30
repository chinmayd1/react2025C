import React from "react";

function Greetings(props){
    console.log(props)
    // objects
    return (
        <div>
            <h2>Hello{props.name}</h2>
            <p>Welcome to {props.course} tranings</p>
            <p>Language:{props.language}</p>
        </div>
    )

}
export default Greetings