import axios from 'axios';
import React, { useState } from 'react'
import "./Fest.css"
const API_URL = "https://dinah-elias.herokuapp.com/insert/";

function Fest({children}){
    return(
      <div className="infoContainer">
        <img className="imgDiv" src={require("../img/bg2.jpg")} alt="Voxna kyrka"></img>
        <div className="textWrapper">
          <h1>OSA formulär</h1>
          <i className="noStyle">Här anger du om du planerar att komma på vigseln och festen eller inte. <br />
          Sista anmälningsdatum den 20/6.
          <br />Notera att du behöver ange varje person i ditt sällskap för sig.</i>
          <OSAForm />
        </div>
        { children }
      </div>
    );
    
}

function OSAForm() {
  const [info, setInfo] = useState("");
  const [name, setName] = useState("");
  const [allergies, setAllergies] = useState("");
  const [loading, setLoading] = useState(false);

  const submitAccept = () => {
    if (name === "") {
      setInfo("Du måste ange ditt namn för att kunna anmäla dig!");
      return;
    }
    setLoading(true);
    // send post to backend using axios
    axios.post(API_URL, { name, allergies, "arrives": true }).then(res => {
      setName("");
      setAllergies("");
      setInfo(<p className="noStyle green">Tack för din anmälan!</p>);
      setLoading(false);
    }).catch(err => { alert("Hoppsan, det gick inte att skicka in dina uppgifter. Försök igen!"); console.log(err); setLoading(false); });
  }

  const submitDecline = () => {
    if (name === "") {
      setInfo("Du måste ange ditt namn för att kunna anmäla dig!");
      return;
    }
    setLoading(true);
    // send post to backend using axios
    axios.post(API_URL, { name, allergies, "arrives": false }).then(res => {
      setName("");
      setAllergies("");
      setInfo(<p className="noStyle green">Tack för din anmälan!</p>);
      setLoading(false);
    }).catch(err => { alert("Hoppsan, det gick inte att skicka in dina uppgifter. Försök igen!"); console.log(err); setLoading(false); });
  }

  return (
    <table style={{padding: "10px 0 40px 0"}}>
      { loading ? <p className="noStyle">Skickar in din anmälan...</p> : 
        (
          <tbody>
            <tr>
              <td>
              <b>Namn: </b>&nbsp;
                <input 
                  type="text"
                  name="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </td>
              <td>
              <b>Ev. allergier / specialkost: </b>&nbsp;
                <input 
                  type="text"
                  name="allergies"
                  value={allergies}
                  onChange={(event) => setAllergies(event.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <button onClick={submitAccept} className="green-btn">Kommer</button>
              </td>
              <td>
                <button onClick={submitDecline} className="red-btn">Kommer inte</button>
              </td>
            </tr>
            { info ? <tr><td colSpan="2"  style={{color: "rgba(255, 0, 0, 0.9)"}}>{info}</td></tr> : null }
          </tbody>
        ) 
      }
    </table>
  )
}


export default Fest