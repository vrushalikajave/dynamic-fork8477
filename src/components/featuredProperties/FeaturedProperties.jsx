//import React from 'react'
import "./featuredProperties.css"

const FeaturedProperties = () => {
  return (
    <div className="fp">
        <div className="fpItem">
            <img src="https://img.traveltriangle.com/blog/wp-content/uploads/2018/02/FotoJet-1sjdg83764shgfd.jpg" alt="" className="fpImg" />
            <span className="fpName">Luxury Resort In Goa</span>
            <span className="fpCity">Morjim</span>
            <span className="fpPrice"> Starting form $120</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
      </div>

      <div className="fpItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXXYNsEanb1mUedfgDZrPw_7riHthP-3J0C4HgAg-EBIjtWlPV" alt="" className="fpImg" />
            <span className="fpName">Luxury Resort In Goa</span>
            <span className="fpCity">Morjim</span>
            <span className="fpPrice"> Starting form $120</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
      </div>

      <div className="fpItem">
            <img src="https://m.lemontreehotels.com/getattachment/64ae8c4e-e628-446e-a00b-06444ca4b809/Facade.aspx" alt="" className="fpImg" />
            <span className="fpName">Luxury Resort In Goa</span>
            <span className="fpCity">Morjim</span>
            <span className="fpPrice"> Starting form $120</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
      </div>
    </div>
  )
}

export default FeaturedProperties
