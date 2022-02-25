import React, { Component } from "react";
import Navbar from './Components/Navbar' 
import Main from './Components/Main' 
import Templates from "./Components/Template";

export default class Roots extends Component {
    render() {
        return <div className="main-root">
            <Navbar/>
            <Main/> 
            <Templates/>

        </div>
    }
}