import React from 'react'
import './topMenu.css'
// eslint-disable-next-line
import { BrowserRouter as Switch, Link } from "react-router-dom";

class MenuItem extends React.Component{
    render() { 
        const Item = [];
        this.props.items.forEach((item) =>{
        if(item.name !== "") {
            Item.push(
            <Link to={item.key} key={item.key} className="menuItemContainer linkOffset"><h2>{item.name}</h2></Link>
            )
        }else{
            Item.push(<div key={item.key}></div>);
        }
        });
        return(
            Item
        );
    }
}

class Menu extends React.Component{
    render() {

        let animation = false;
        animation = this.props.animation;
        const Logo = () => <Link to="/"><div className="centerLogo"><h2 className="initials">D+E</h2></div></Link>;
        const animClass = animation ? "container-anim" : "";

        return(
            <div className={"container " + animClass}>
                <MenuItem items={this.props.items}/> 
                <Logo />
            </div>
        );
    }
}



export default Menu