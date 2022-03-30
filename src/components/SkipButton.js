import React from 'react'
import "./SkipButton.css"
import $ from 'jquery'

class SkipButton extends React.Component{
    render() {
        const content = this.props.content;
        const list = this.props.argument;

        function skipAnim(){
            list.forEach(name => {
                $("." + name).removeClass(name);
            });
            $(".skipBtn").remove();
        }
        return(
            <button className="skipBtn" onClick={skipAnim}>{content}</button>
        );
    }
}

export default SkipButton;