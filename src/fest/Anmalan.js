import React from 'react'
import './Anmalan.css'
import $ from 'jquery'
import * as mysql from 'mysql'

class Anmalan extends React.Component{
    render() { 
        return (          
        <div className="infoContainer">
        <img className="imgDiv" src={require("../img/bg.jpg")} alt="Voxna kyrka"></img>
          <div className="formContainer">
              <h1>Anmäl dig här nedan!</h1>
              <h3>Endast för er som är inbjuden till bröllopsfesten!</h3>
              <Form/>
          </div>
        </div>
        );
    }
}

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [{firstName: "", lastName: ""}]
        };
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      
      addClick(){
        this.setState(prevState => ({ 
            users: [...prevState.users, { firstName: "", lastName: "" }]
        }))
      }
      
      createUI(){
         return this.state.users.map((el, i) => (
           <div key={i} className="personContainer">
              <input className="inputField" placeholder="Förnamn" name="firstName" value={el.firstName ||''} onChange={this.handleChange.bind(this, i)} /><br />
              <input className="inputField" placeholder="Efternamn" name="lastName" value={el.lastName ||''} onChange={this.handleChange.bind(this, i)} /><br />
              <input className="secondBtn" type='button' value='Ta bort person' onClick={this.removeClick.bind(this, i)}/>
           </div>          
         ))
      }
      
      handleChange(i, e) {
         const { name, value } = e.target;
         let users = [...this.state.users];
         users[i] = {...users[i], [name]: value};
         this.setState({ users });
      }
      
      removeClick(i){
         let users = [...this.state.users];
         users.splice(i, 1);
         this.setState({ users });
      }
      
      handleSubmit(event) {
        event.preventDefault();
        this.sendppl(0);
      }

      sendppl(i){
        $.post("/php/index.php", {firstName: this.state.users[i]['firstName'], lastName: this.state.users[i]['lastName']}, function() {
          console.log(window.location);
        });
      }
    
      render() {
        return (
          <form className="formWrapper" onSubmit={this.handleSubmit}>
              {this.createUI()}        
              <input style={{float: "left"}} className="firstBtn blackBtn" type='button' value='Lägg till person' onClick={this.addClick.bind(this)}/>
              <input style={{float: "right"}} className="firstBtn greenBtn" type="submit" value="Anmäl" />
          </form>
        );
      }
}

 
export default Anmalan;