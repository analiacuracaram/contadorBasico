import React from "react"
import "./styles.css"

const NavBar = ({brand, icon}) => {
  console.log(brand)
  console.log(icon)
  return (
    <ul>
    <li>
      <a href="#contacto">Contacto</a>
    </li>
    <li>
      <a href="#ofertas">Ofertas</a>
    </li>
    <li>
      <a href="#productos">Productos</a>
    </li>

    <li>
      <a href="#home">Home</a>
    </li>
  </ul>
  )
}

export default NavBar