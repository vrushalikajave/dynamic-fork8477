//import React from 'react'

import { FaBed, FaPlane , FaHotel, FaCar , FaTaxi , FaCalendarDay , FaBaby } from "react-icons/fa"
import "./header.css"
import { DateRange } from 'react-date-range';
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({type}) => {
  const[ destination, setDestination] =useState("")
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  
  const [openOptions, setOpenOptions] = useState(false)
  const [options, setOptions] = useState({
    adult:1,
    children:0,
    room:1
  })

const handleOption=( name, operation)=>{
setOptions(prev=>{return{
  ...prev,[name]:operation ==="i"?options[name] +1 : options[name] -1
}})
}
const navigate= useNavigate()

const handleSearch=()=>{
  navigate("/hotels", {state:{destination , date, options}});
}
  return (
    <div className="header">
      <div className={ type==="list"? "headerContainer listMode" :"headerContainer"}>
        <div className="headerList">

            <div className="headerListItem active">
              <FaBed/>
              <span>Stays</span>
              </div>

              <div className="headerListItem">
              <FaPlane/>
              <span>Flights</span>
              </div>

              <div className="headerListItem">
              <FaHotel/>
              <span>Flights + Hotel</span>
              </div>

              <div className="headerListItem">
              <FaCar/>
              <span>Car rentals</span>
              </div>

              <div className="headerListItem">
              <FaBed/>
              <span>Attractions</span>
              </div>

              <div className="headerListItem">
              <FaTaxi/>
              <span>Airport taxi</span>
              </div>
        </div>
          { type !== "list" && 
          <> <h1 className="headerTitle">Find your next stay</h1>
          <p className="headerDesc"> Search deals on hotels, homes, and much more...</p>

          <div className="headerSearch">

            <div className="headerSearchItem">
              <FaBed className="headerIcon"/>
              <input className="headerSearchInput" type="text" placeholder="Where are you going?" onChange={e =>setDestination(e.target.value) } />
            </div>

            <div className="headerSearchItem">
              <FaCalendarDay className="headerIcon"/>
              <span onClick={() => setOpenDate(!openDate)} className="headerSearchText"> {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")} `}</span>
           { openDate && <DateRange
                  editableDateInputs={true}
                  onChange={item => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                  minDate={new Date()}
                  
                />}

            </div>

            <div className="headerSearchItem">
              <FaBaby className="headerIcon"/>
              <span onClick={()=> setOpenOptions(!openOptions) } className="headerSearchText"> {`${options.adult} Adult . ${options.children}  Children .  ${options.room} Room`}</span>
              
              { openOptions && <div className="options">
                <div className="optionItem">
                  <span className="optionText">Adult</span>
                  <div className="optionCounter">
                  <button className="optionCounterButton" disabled={ options.adult<1} onClick={() => handleOption("adult","d" )}>-</button>
                  <span className="optionCounterNumber">{options.adult}</span>
                  <button className="optionCounterButton" onClick={() => handleOption("adult","i" )}>+</button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Children</span>
                  <div className="optionCounter">
                  <button className="optionCounterButton" disabled={ options.children<1}  onClick={() => handleOption("children","d" )}>-</button>
                  <span className="optionCounterNumber">{ options.children}</span>
                  <button className="optionCounterButton" onClick={() => handleOption("children","i" )}>+</button>
                  </div>
                </div>

                <div className="optionItem">
                  <span className="optionText">Room</span>
                  <div className="optionCounter">
                  <button className="optionCounterButton" disabled={ options.room<1}  onClick={() => handleOption("room","d" )}>-</button>
                  <span className="optionCounterNumber">{ options.room}</span>
                  <button className="optionCounterButton" onClick={() => handleOption("room","i" )}>+</button>
                  </div>
                </div>


              </div> }
            </div>


            <div className="headerSearchItem">
              <button className="headerBtn" onClick={ handleSearch}> Search</button>
            </div>
      </div> </>}
    </div>
  </div>
  )
}

export default Header
