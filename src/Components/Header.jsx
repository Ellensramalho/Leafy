import React from 'react'
import Logo from "../assets/Logo.png"
const Header = () => {
  return (
    <div>
       <img className="h-30 w-30" src={Logo} alt="Leafy" />
      <nav>
        <ul className="">
          <li><a href="">Home</a></li>
          <li><a href="">Produtos</a></li>
          <li><a href="">Sobre</a></li>
          <li><a href="">Contatos</a></li>
        </ul>
        <div>
          <button>Carrinho</button>
          <button>Logar</button>
        </div>
      
      </nav>
    </div>
  )
}

export default Header
