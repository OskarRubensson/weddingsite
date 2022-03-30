import React from 'react'
import "./Frontpage.css"

function FrontPage ({children}){
    return(
        <div className="frontPage">
            <div className="text-center">
                <h1 className="header">Varmt välkommen</h1>
                <h1 className="header">till Dinah och Elias bröllop</h1>
                <h1 className="header">20/8</h1>
            </div>
            {children}
        </div>
    );
}


export default FrontPage