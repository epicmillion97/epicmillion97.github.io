import React from 'react'
import Nav from './Nav'

const Header = () => {
  return (
    <header>
        <div className="innerContainer">
            <img className="epicLogo"src="https://see.fontimg.com/api/renderfont4/w1OB8/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/RXBpYw/millenia-personal-use.png" alt="Cursive fonts"></img>
            <Nav/>
        </div>
    </header>
  )
}

export default Header