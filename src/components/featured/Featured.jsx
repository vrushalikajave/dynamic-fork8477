//import React from 'react'
import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
    <div className="featuredItem">
        <img src="https://www.mantruckandbus.com/fileadmin/media/bilder/02_19/219_01_eintaginparis_header_2545x1254.jpg" alt="" className="featuredImg" />
        <div className="featuredTitles">
            <h1>Manchester</h1>
            <h2>123 properties</h2>
        </div>
    </div>
    {/* <div className="featuredItem">
        <img src="https://www.lemontreehotels.com/CMSWebParts/LTWebParts/citysearchgallery.ashx?Gid=956" className="featuredImg"/>
        <div className="featuredTitles">
            <h1>Leeds</h1>
            <h2>123 properties</h2>
        </div>
    </div> */}
    <div className="featuredItem">
        <img src="https://www.lemontreehotels.com/CMSWebParts/LTWebParts/citysearchgallery.ashx?Gid=956" alt="" className="featuredImg" />
        <div className="featuredTitles">
            <h1>Dublin</h1>
            <h2>123 properties</h2>
        </div>
    </div>
    </div>
  )
}

export default Featured
