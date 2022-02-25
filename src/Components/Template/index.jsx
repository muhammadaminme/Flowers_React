import React, { Component } from "react";
import './style.css';


export default class Templates extends Component{
    render(){
        return <div className="Main2">
            <div className="side">
            <div className="sidebar">
                <div className="words">
                <h4 className="h4">Categories:</h4>
                <ul>
                    <li>House Plants </li>
                    <li>Potter Plnats</li>
                    <li>Seeds</li>
                    <li>Small Plants</li>
                    <li>Big Plants</li>
                    <li>Suculents</li>
                    <li>Trerarruims</li>
                    <li>Gardening</li>                  
                    <li>Accessories.</li>
                </ul>
            
                <h4 className="h4">Price Range:</h4>  
                <div className="contents">
                    <input type="range"/>
                    <p>Price: <span id="dollor">$39 - $1250</span></p>
                    <button className="sidebutton">Filter</button>
                </div>
                <h4 className="h4" >Size:</h4>
                    <ul>
                    <li>Small</li>
                    <li>Medium</li>
                    <li>Large</li>
                    </ul>
                </div>
                <div className="numbers">
                    <ul>
                    <li className="smth">.</li>
                    <li>(33)</li>
                    <li>(12)</li>
                    <li>(13)</li> 
                    <li>(15)</li> 
                    <li>(21)</li> 
                    <li>(23)</li> 
                    <li>(43)</li> 
                    <li>(37)</li> 
                    <li>(19)</li> 
                    </ul>

                <div className="numbers2">
                    <ul>
                    <li>(12)</li>
                    <li>(43)</li>
                    <li>(37)</li>
                    </ul>
                </div>
                </div>


                
            </div>
            <div className="below">
                    <div className="Super_sale">Sles</div>
                    <div className="text">Text</div>
                    <div className="pic">pic</div>
            </div>
            </div>

            <div className="templates">
            <div className="item1 item">
                <div>All Plants</div>
                <div>New Arrivals</div>
                <div>Sales</div>
            </div>
            <div className="item2 item"></div>
            <div className="item3 item">
                <div>Sorting By:</div>
                <select>
                    <option>Default sorting</option>
                    <option>Special sorting</option>
                    <option>Econom sorting</option>
                    <option>Minimal sorting</option>
                </select>
            </div>
            <div className="item4 item">
                <div className="picture"></div>
                <div className="name">Barberton Daisy</div>
                <div className="price">$119.00</div>
                
            </div>
            <div className="item5 item">
                <div className="picture"></div>
                <div className="name">Barberton Daisy</div>
                <div className="price">$119.00</div>
            </div>
            <div className="item6 item">
                <div className="picture"></div>
                <div className="name">Barberton Daisy</div>
                <div className="price">$119.00</div>
            </div>
            <div className="item7 item">
                <div className="picture"></div>
                <div className="name">Barberton Daisy</div>
                <div className="price">$119.00</div>
            </div>
                <div className="item8 item"><div className="picture"></div>
                <div className="name">Barberton Daisy</div>
                <div className="price">$119.00</div></div>
            <div className="item9 item">
                <div className="picture"></div>
                <div className="name">Barberton Daisy</div>
                <div className="price">$119.00</div>
            </div>

            <div className="item10 item">
                <div className="picture"></div>
                <div className="name">Barberton Daisy</div>
                <div className="price">$119.00</div>
            </div>

            <div className="item11 item">
                <div className="picture"></div>
                <div className="name">Barberton Daisy</div>
                <div className="price">$119.00</div>
            </div>

            <div className="item12 item">
                <div className="picture"></div>
                <div className="name">Barberton Daisy</div>
                <div className="price">$119.00</div>
            </div>
            </div>
            
            
            


        </div>
    }
}
