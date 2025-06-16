import React from 'react'
import { Link} from 'react-router-dom'
import logo from "../../images/logo1.gif";
const Navbar = () => {
  return (

    <div className="navbar flex items-center justify-between h-[100px] px-[100px] bg-[#0c0c0c] overflow-hidden">
      <div className="logo">
        <img className='w-[180px]' src={logo} alt="" />
      </div>

      <div className="links flex items-center gap-[20px]">
        <Link className='navLink active'>Home</Link>
        <Link className='navLink'>About</Link>
        <Link className='navLink'>Blogs</Link>
        <Link className='navLink'>Services</Link>
        <Link className='navLink'>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar