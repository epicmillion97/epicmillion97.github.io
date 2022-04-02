import React from 'react'
import {FaGithub} from 'react-icons/fa'
const Footer = () => {
  return (
    <div id="Footer">
        <p className="footerP"> <span className="copyright">Copyright &copy; 2022 </span></p>
        <p className="footerP"> Created by <a href= "https://www.github.com/epicmillion97" style={{textDecoration: 'none'}}><span className="epicSpan">Epic</span>  </a> <a href= "https://www.github.com/epicmillion97" className="footerGithub"> <FaGithub /></a> </p>
    </div>
  )
}

export default Footer