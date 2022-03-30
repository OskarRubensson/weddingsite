import React from 'react';
import './App.css';
import Triangle from './Triangle.js'
import Frontpage from './Frontpage.js'
import SkipButton from './components/SkipButton.js'
import Info from './partials/Info.js'
import Fest from './partials/Fest.js'
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./components/topMenu.js"
import $ from 'jquery'

const arg = ['rectangle-anim', 'envelope-anim', 'triangle-anim', 'envelopeContainer-anim', 'container-anim', 'pageAnim'];
const ITEMS = [
  {
    name:'OSA', 
    key: 'osa',
  }, 
  {
    name:'Info', 
    key: 'info', 
  }
];


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/osa" component={OSA} />

        <Route path="/info" component={Information} />

        {/* Måste stå sist för att namnen ska fungera på första sidan */}
        <Route path={["/", "/home"]} component={Hem}/>

      </Switch>
    </Router>
  );
}

function OSA(){
  return(
    <div className="pb">
      <Menu items={ITEMS}/>
      <Fest>
        <InstaLink />
      </Fest>
    </div>
  );
}

function Information(){
  return(
    <div className="pb">
      <Menu items={ITEMS}/>
      <Info>
        <InstaLink />
      </Info>
      
    </div>
  );
}

const InstaLink = ( { className }) => { return (<div className={`instaBtn black ${className}`}><h4><a href="https://www.instagram.com/explore/tags/karsberg2022"><i className="fab fa-instagram fa-2x"></i>#karsberg2022</a></h4></div>) }

function Hem(){
  return(
    <section>
      <div className="pageWrapper">
        <Menu items={ITEMS} animation={false}/>
        <Frontpage> 
          {/* <Triangle /> */}
          <InstaLink className="white" />
        </Frontpage>
      </div>
      {/* <SkipButton content="Hoppa över" argument={arg}/> */}
    </section>
  );
}

function removeEnvelope(){
  setTimeout(() => {$("#test").remove()}, 7500);
}

$(document).ready(function() {
  //removeEnvelope();
});

export default App;
