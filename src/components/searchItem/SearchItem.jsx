//import React from 'react'
import "./searchItem.css"

const SearchItem = ({name, location,img,price , rating}) => {
    return (
 
      <div className="searchItem">
          <img src={img} alt="" className="siImg" />
  
          <div className="siDesc">
              <h1 className="siTitle"> { name}</h1>
              <span className="siDistance">{ location}</span>
              <span className="sitaxiOp">Free airport taxi</span>
              <span className="siSubtitle"> Studio apartment with Air Conditioning</span>
              <span className="siFeatures"> Entire studio .1 bathroom .21m 1 full bed</span>
              <span className="siCancelOp"> Free Cancellation</span>
              <span className="siCancelOpSubtitle"> You can cancel later , so lock in this greate price today!</span>
          </div>
  
          <div className="siDetails">
              <div className="siRating">
                  <span>Excellent</span>
                  <button>{rating}</button>
              </div>
  
              <div className="siDetailTexts">
                  <span className="siPrice">${price}</span>
                  <span className="siTaxOp">Includes taxes and fees</span>
                      <button className="siCheckButton"> See availability</button>
              </div>
          </div>
  
      </div>
  
    )
  }
  
  export default SearchItem
