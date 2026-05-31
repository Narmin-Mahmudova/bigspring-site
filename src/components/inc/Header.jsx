import React from 'react'
import { Link } from 'react-router'
import logoImg from '../../assets/logo.png';

function Header() {
  return (
      <>
          <header>
            <div className='flex items-center justify-between p-4'>
                <img src={logoImg} alt="logo" />
                <div>
                    <ul className="items-stretch hidden space-x-3 lg:flex">
                            <li className="flex hover:text-[#00a3a4]">
                                <Link to={'/'} >Home</Link>
                            </li>
                            <li className="flex hover:text-[#00a3a4]">
                                <Link to={'/haqqimizda'}>Blog</Link>              
                            </li>
                            <li className="flex hover:text-[#00a3a4]">
                                <Link to={'/pricing'}>Pricing</Link>
                            </li>
                            <li className="flex hover:text-[#00a3a4]">
                                <Link to={'/elaqe'}>Contact</Link>
                            </li>
                            <li className="flex hover:text-[#00a3a4]">
                                <Link to={'/faq'}>FAQ</Link>
                            </li>
                        </ul>
                </div>
                <button className='rounded-xl p-4' style={{ backgroundColor: '#0AA8A7', color: 'white' }}>Get started</button>
            </div>
          </header>
      
      </>
  )
}

export default Header