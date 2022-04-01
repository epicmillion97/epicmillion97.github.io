import React from 'react'

const Nav = () => {
  return (
    <nav className="navlinknav">
        <a className="navlinks" href='#aboutMe'><span className="navspan">home</span></a>
        <a className="navlinks" href='#Projects'><span className="navspan">projects</span></a>
        <a className="navlinks"><span className="navspan">github</span></a>
    </nav>
  )
}

export default Nav