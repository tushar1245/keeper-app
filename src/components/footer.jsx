import React from "react";


export default function Footer(){
    
    const currYear = new Date().getFullYear();
    console.log(currYear);
    return <footer> 
        <p> copyright © {currYear}</p>
    </footer>
    
    
}