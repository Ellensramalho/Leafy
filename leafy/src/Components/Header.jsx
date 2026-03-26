import React from 'react'
import Logo from "../assets/Logo.png"
import User from "../assets/User.svg"
import Carrinho from "../assets/Carrinho.svg"

const Header = () => {
  return (
    <div className='flex items-center justify-between p-1 shadow-md bg-[#F3EFEA] h-20'>
       <img className="ml-10 h-30 w-30 mt-5" src={Logo} alt="Leafy" />
      <nav>
        <ul className="flex gap-10 text-lg font-bold text-gray-700 ml-200 mt-3">
          <li><a className="text-[#5C4B3B]" href="">Home</a></li>
          <li><a className="text-[#5C4B3B]" href="">Produtos</a></li>
          <li><a className="text-[#5C4B3B]" href="">Sobre</a></li>
          <li><a className="text-[#5C4B3B]" href="">Contatos</a></li>
        </ul>
        </nav>
        <div className="flex gap-6 mr-20 mt-3">
          <button className="cursor-pointer">
            <img src={Carrinho}/>
            </button>
          <button className="cursor-pointer">
            <img src ={User}/></button>
        </div>
    </div>
  )
}

export default Header
