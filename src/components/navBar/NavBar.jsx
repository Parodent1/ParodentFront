import React from 'react'
import './navBar.css'

function NavBar() {
  return (
    <div className='navbarBody'>
        <div className="navLBtn">
            <button className="navBtn">всі пацієнти</button>
            <button className="navBtn">персонал</button>
            <button className="navBtn">календар</button>            
        </div>
        <div className="navRBtn">
            <button className="navBtn greenBtn">створити запис</button>
            <button className="navBtn">імя прізвище</button>
            <div className="profileLogo"></div>
        </div>
    </div>
  )
}

export default NavBar