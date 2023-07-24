import React from 'react'
import "../styles/header.scss"

const Header = () => {
  return (
    <nav>
        <NavContent/>
    </nav>
  )
}

const NavContent = ()=>(
    <>
    <h2>Himanshu </h2>
    <div>
        <a href="#home"> Home</a>
        <a href="#work"> Work</a>
        <a href="#timeline"> Timeline</a>
        <a href="#services"> Services</a>
        <a href="#testimonal"> Testimonals</a>
        <a href="#contact"> Contact</a>
    </div>
    <a href="mailto:himanshuray188@gmail.com" > 
        <button> Mail </button>
    </a>
    </>
)

export default Header