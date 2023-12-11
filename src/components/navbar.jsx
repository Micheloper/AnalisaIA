import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="list">
          <ul>
            <li><img src="./src/assets/logo.png" alt="Logo do site" /></li>
            <li>Como usar?</li>
            <li id='contato'>Contato</li>
          </ul>
        </div>
      </div>
    </>

  )
  
}

export default Navbar