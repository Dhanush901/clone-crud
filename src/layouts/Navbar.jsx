import React from 'react'
import Menu from './Menu';
import { Outlet } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  return (
    <>
    <section id='navbarsec'>
      <article className='navbar'>
        <Logo />
      <Menu />
      </article>
      </section>
      <Outlet />
          
      </>
  )
}

export default Navbar