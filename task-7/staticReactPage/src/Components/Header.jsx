import React from 'react'
import Reactlogo from '../assets/react.svg'

function Header() {
  return (
    <div>
      <nav>
        <img src={Reactlogo} className="nav--icon" />
        <h3 className="nav--logo_text">ReactFacts</h3>
        <h4 className="nav--title">React Course - Project 1</h4>
      </nav>
    </div>
  )
}

export default Header