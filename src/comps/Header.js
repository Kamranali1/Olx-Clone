import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

    const nav=[
        {id:1, label: "Mobile Phones"},
        {id:2, label: "Cars"},
        {id:3, label: "Motorcyles"},
        {id:4, label: "Houses"},
        {id:5, label: "Tv-Video-Audio"},
        {id:6, label: "Tablets"},
        {id:7, label: "Lands and Plots"}
    ]
    return (
        <React.Fragment>
        < div className="header fixed flex aic" >
            <div className="logo" >
                <img src={require("../Ui/olx-logo.png")}alt="pic" />
            </div >
            <div className="location rel flex aic" >
                <div className="fas fa-search ico s24" />
                <input className="label s15 font" placeholder="Your location" value="Pakistan" />
                <button className="fas fa-chevron-down arrow s24" />
            </div>
            <div className="search flex aic" >
                <input type="text" placeholder="Find cars,Mobile Phones and More..." className="query font s15" />
                <button className="fas fa-search go s24 cfff " />
            </div>
            <div className="actions flex aic" >
                <Link to="/account/signin" className=" color fontb s16 noulh noul" > SignIn </Link>
                <button className="sell flex color aic " >
                    <div className="fas fa-plus ico s24" />
                    <h2 className="s18 fontb " > Sell </h2> </button>
            </div>
           </div >
           <div className="hnav fixed flex aic color">
               <button className="view-cates flex aic">
                <h2 className="s18 font  " > All Categories </h2>
               <button className="fas fa-chevron-down arrow s24" />
               </button>
               {
                   nav.map(item =>{
                       return(
                       <Link to={"/browser/"+ item.id} key={item.id} className="bl noul noulh color font s15">{item.label}</Link>
                       )
                   })
               }

           

          </div>
          <div className="hclr"/>
           </React.Fragment>
    );
}

export default Header;