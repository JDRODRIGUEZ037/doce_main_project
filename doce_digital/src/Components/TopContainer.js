import React from 'react'
import { FaSearch, FaBell, FaChevronDown } from "react-icons/fa";
import perfilphoto from '../img/perfilphoto.png'

function TopContainer() {
  return (
    <div className='topcontainer'>
        <div className="inputBox">
            <input type="text" placeholder='Search'/>
            <i>
                <FaSearch />
            </i>
        </div>

        <div className="profileContainer">
            <i className="profileIcon">
                <FaBell />
            </i>

            <div className="profileImage">
                <img src={perfilphoto} alt=""/>
            </div>

            <p classNamw="profileName">Restaurante</p>
            
            <i className="menuChevron" id='menuChevron'>
                <FaChevronDown />
            </i>
        </div>
    </div>
  )
}

export default TopContainer