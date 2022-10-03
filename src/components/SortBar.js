import React from "react";

function SortBar({ handleSort }) {
    const styleButtons = {
        color: "white",
        background: "black",
        width: "20vw",
        height: "5vh",
        margin: "5px",
        borderRadius : "5px"
    }
    
    return (
        <nav style={{textAlign: "center"}}>
            <h1> Sort Bots</h1>
            <button style={styleButtons} name="health" onClick={(e) => handleSort(e)}>Health</button>
            <button style={styleButtons} name="damage" onClick={(e) => handleSort(e)}>Damage</button>
            <button style={styleButtons} name="armor" onClick={(e) => handleSort(e)}>Armor</button>
        </nav>
    )
}

export default SortBar