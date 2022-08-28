//import React from 'react'
import "./list.css"
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import { useLocation }  from "react-router-dom"
import { useState } from "react"
import { format } from "date-fns";
import { DateRange } from "react-date-range"
import SearchItem from "../../components/searchItem/SearchItem"
import data from "./Hotel.json"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"

const List = () => {
  const location= useLocation();
  console.log(location);
    const[ destination, setDestination] = useState(location.state.destination)
   const[ date, setDate] = useState(location.state.date)
   const[ options, setOptions] = useState(location.state.options)
   const[ openDate, setOpenDate] = useState(false)
  return (
    <div>
    <Navbar/>
    <Header type="list"/>
    <div className="listContainer">
      <div className="listWrapper">
        <div className="listSearch">
          <h1 className="lsTitle">Search</h1>
          <div className="lsItem">
            <label htmlFor="">Destination</label>
            <input type="text"  placeholder={destination}/>
          </div>

          <div className="lsItem">
            <label htmlFor="">Check-in Date</label>
          <span onClick={()=> setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")} `}</span>
          {openDate && <DateRange onChange={item=>  setDate([item.selection])} minDate={new Date()} ranges={date}/>}
          </div>
          

          <div className="lsItem">
            <label htmlFor="">Options</label>
            <div className="lsOptions">


            <div className="lsOptionItem">
              <span className="lsOptionText"> Min Price <small>per night</small></span>
              <input type="number" className="isOptionInput" />
            </div>

            <div className="lsOptionItem">
              <span className="lsOptionText"> Max Price <small>per night</small></span>
              <input type="number" className="isOptionInput" />
            </div>

            <div className="lsOptionItem">
              <span className="lsOptionText" > Adult </span>
              <input type="number" min={1} className="isOptionInput" placeholder={options.adult} />
            </div>

            <div className="lsOptionItem">
              <span className="lsOptionText" > Children </span>
              <input type="number"  min={0} className="isOptionInput" placeholder={options.children} />
            </div>

            <div className="lsOptionItem">
              <span className="lsOptionText" > Room </span>
              <input type="number"  min={1} className="isOptionInput" placeholder={options.room}/>
            </div>

            </div>
          </div>
          <button>Search </button>
        </div>
        <div className="listResult">
          {data.map((e)=>{
            return(
              <>
               <SearchItem name={e.name}  location={e.location} img={e.img}  price={e.price}   rating={e.rating}/>
              
              </>
            )
           
            })}
     
      
        </div>
      </div>
    </div>
        <MailList/>
        <Footer/>
    </div>
    
  )
}

export default List
