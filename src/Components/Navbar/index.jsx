import React, { Component } from "react";
import './style.css'
import logo from '../../assets/imgs/logo.png'
import {ReactComponent as Search} from '../../assets/icons/search.svg'
import {ReactComponent as Wallet} from '../../assets/icons/Wallet.svg'
 
export default class Navbar extends Component {
    render() {
        return <div class ="container">
            <div className ="wrapper con1">
                <img src={logo} alt="" className="logo" />
                 GREENSHOP
            </div>
            <div className ="wrapper con2">
                <div>Home</div>
                <div>Shop</div>
                <div>Plant Care</div>
                <div>Blogs</div>
            </div>
            <div className ="wrapper con3">
                <Search className="icon"/>
                <Wallet className="icon-wallet"/>
                <button className="btn">Login</button>
            </div>
        </div>
    }
}