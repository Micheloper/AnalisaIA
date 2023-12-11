import React from 'react'
import "./input.css"

function Input({tittle}) {
  return (
    <input type="text" placeholder={tittle} />
  )
}

export default Input