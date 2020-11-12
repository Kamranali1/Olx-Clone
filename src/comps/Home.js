import React, { useEffect, useState } from "react"
import Aditem from "./Aditems"

function HomePage() {
    const [list, setlist] = useState([]);
    const [loading, setloading] = useState(true);


    useEffect(() => {
        if (loading) {
            let _list = [];
            for (let i = 0; i < 20; i++) {
                _list.push(<Aditem placeholder={true} />);
            }
            setlist(_list)
        }
    }, list)



    return (
        <React.Fragment>
            <div className="home-page " >
                <div className="ad-list flex">
                    {list}
                </div>
                <button className="load-more anim fontr s20 c333 b"> Load More </button>
            </div>
            <div className="app-ribbon flex  aic">
                <div className="img">
                    <img className="bl" src="//statics.olx.com.pk/external/base/img/phone-app.png" />
                </div>
                <div className="meta">
                    <h2 className="title fontb s30 color"> Try the Olx App  </h2>
                    <h2 className="slogan fontb s18 color"> Buy, sell and find just about anything using the app on your mobile  </h2>
                </div>
                <div className="links">
                    <h2 className="title fontb s20 color"> Get your App Today   </h2>
                    <div className="flex as">
                        <a href="#" className="noul bl"><img src="//statics.olx.com.pk/external/base/img/appstore_2x.png" /></a>
                        <a href="#" className="noul bl"><img src="//statics.olx.com.pk/external/base/img/playstore_2x.png" /></a>
                    </div>
                </div>
            </div>

        </React.Fragment>



    )
}
export default HomePage;