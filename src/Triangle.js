import React from 'react'
import "./Triangle.css"

class Triangle extends React.Component{
    render() {
        let fullUrl = window.location.href;
        let url = decodeURIComponent(fullUrl).replace(/_/g, " ").split("/")[3];
        url = url.split("?fbclid")[0];
        url = url.split("&fbclid")[0];
        url = url.replace("?", "");
        console.log(url);
        return(
                <div id="test" className="envelopeContainer envelopeContainer-anim">
                    <div className="envelope envelope-anim"><span>{url.length > 0 ? "Till: " + url : ""}</span></div>
                    <div className="triangle triangle-anim"></div>
                    <div className="rectangle rectangle-anim"></div>
                </div>
        );
    }
    

}



export default Triangle