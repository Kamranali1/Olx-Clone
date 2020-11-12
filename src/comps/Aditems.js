import React, { useState } from 'react';


function Aditem(props) {

    if ("placeholder" in props) {
        return (
            <div className="Ad-items ">
                <div className="poster anim placeholder" ></div>
                <div className="title  anim placeholder" ></div>
                <div className="tagline  anim placeholder" ></div>
                <div className="ftr anim  flex">
                    <div className="location anim placeholder" />
                    <div className="stamp anim placeholder" />
                </div>
            </div>
        );
    }



    return (
        <div className="Ad-items">

        </div>
    );
}

export default Aditem;
