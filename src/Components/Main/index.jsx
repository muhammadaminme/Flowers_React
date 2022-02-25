import React, { Component } from "react";
import './style.css';
// import img1 from '../../assets/imgs/m4.png'

export default class Main extends Component {
    render() {
        return <div className="main">
            <div className="left">
                <div className="welcome">WELCOME TO GREENSHOP</div>

                <div className="offer"> LET'S MAKE A BETTER <span className="planet">PLANET</span></div>

                <div className="description">We are an online plant shop offering a wide range of cheap and 
                trendy plants to create an unique Urban Jungle. Order your favorite  plants</div>
                <button className="rightButton" > Shop Now</button>

            </div>



            <div className="right">
                <div  className = "smallimg"></div>
                <div className = "bigimg"></div>
                {/* <img src={img1} alt="" className = "smallimg"/>
                <img src={img1} alt="" className = "bigimg"/> */}
            </div>
        </div>
    }
}