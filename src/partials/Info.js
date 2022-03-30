import React from 'react'
import "./Info.css"
import voxnakyrka from '../img/voxnakyrka1.jpg';
import jossebo from '../img/jossebo.jpg';

function Info({ children }) {
    return(
        <div className="infoContainer">
            <img className="imgDiv" src={voxnakyrka} alt="Voxna kyrka"></img>
            <div className="textWrapper">
                <h2>Vigsel</h2>
                <h3>13.00 - Voxna kyrka</h3>
                <span className="noStyle">
                    Vår vigsel börjar kl 13.00 i Voxna kyrka med Jacob Axelsson som vigselförrättare.<br />
                    Ni får parkera längs vägen eller där ni lyckas hitta en plats. 
                    Kyrkans parkeringsplatser gäller endast för medverkande och handikapparkering. 
                </span>
                <br/>
                <h3>Adress: <span className="noStyle">Nybrovägen 7, 828 93, Voxnabruk</span></h3>

                <br />

                <h2>Middag och fest i Jössebo</h2>
                <img className="imgDiv noEdges" src={jossebo} alt="Voxna kyrka"></img>
                <span className="noStyle">
                    Runt 17.00 planeras brudparet anlända till Jössebo Vildmarkscamp. 
                    Där blir det middag med festligheter, och ja, det finns ett dansgolv.

                    <br/>
                    Från Voxna kyrka till Jössebo tar det knappt 40 minuter med bil. 
                    Samåk gärna, eller ta följe med någon som hittar i trakten. Det finns gott om parkeringsplatser.
                </span>   
                <h3>Adress: <span className="noStyle">Ryggesbo 830, 82 891, Edsbyn</span></h3> 

                <br />

                <h2>Bra att veta</h2>
                <h3>Mat och dryck</h3>
                <span className="noStyle">
                    Det bli snittar, huvudrätt, traditionsenlig bröllopstårta och lite gofika. 
                    Vi bjuder på ett glas till maten, och vill man ha mer så finns det att köpa i baren. 
                    Till de alkoholfria alternativen gäller fri påfyllning.
                </span>
                <h3>Klädsel: Kavaj</h3> 
                <span className="noStyle">
                    Kavaj innebär för herrar att man ska bära kostym. Val av färg både på kavajen och skjortan gör du själv. 
                    För damer innebär det klänning, kjol, byxdress eller dräkt.<br/>
                    Men vi har inga måsten, ha på er något ni trivs i.
                </span>
                <h3>Önskelista</h3>
                <span className="noStyle">
                    Om ni vill ge några presenter så får ni absolut göra det, men vi har ingen önskelista. 
                    Vi önskar oss endast bidrag till vår bröllopsresa, och till framtiden.
                </span>
                <h3>Barn</h3>
                <span className="noStyle">
                    Barn är underbara, men denna dag väljer vi att fira i vuxet sällskap. 
                    Med undantag för ammande spädbarn, brudgummens syskonbarn och brudens kusiner.
                </span>

                <br /> <br />

                <h2>Tal och Spex</h2>
                <span className="noStyle">
                    Om någon vill hålla tal eller spexa får ni gärna anmäla det nedan. 
                    Vi ser inte anmälan utan informationen skickas direkt till vårat värdpar.
                    <br /> <br />
                    Maila in anmälan eller frågor till <a href="mailto:karsbostenberg@gmail.com">karsbostenberg@gmail.com</a>
                    <br /> <br />
                    Om ni har komplicerade frågor, ring någon av våra värdar: <br />
                    Axel: 076-275 15 46 <br />
                    Nathalie: 073-827 60 04 <br />
                </span>
            </div>
            { children }
        </div>
    );
}


export default Info;