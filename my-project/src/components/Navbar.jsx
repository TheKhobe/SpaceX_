import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import close from '../assets/images/icon-close.svg'
import hamburger from '../assets/images/icon-hamburger.svg'
import logo from '../assets/images/spacex.svg'
function Navbar() {
  const [click, setClick] = useState(true);
  const handleClick =() => setClick(!click);
  return (
    <div className='bg-black flex flex-row md:justify-between justify-center space-x-20 px-12 items-center p-6'>
    <div className='flex justify-center'>
    <Link to='/' className='text-white'> <img src={logo} alt='logo'  className='w-40 flex ml-36 md:ml-0 relative'/>
    </Link>
</div>
<div className='flex md:flex-row flex-col md:space-x-8 md:block hidden'>
  <Link to='#' className='text-white hover:border-b border-white'>Falcon 9</Link>
  <Link to='#' className='text-white hover:border-b border-white'>Falcon Heavy</Link>
  <Link to='#' className='text-white hover:border-b border-white'>Dragon</Link>
  <Link to='#' className='text-white hover:border-b border-white'>Starship</Link>
  <Link to='#' className='text-white hover:border-b border-white'>Human SpaceFlight</Link>
  <Link to='#' className='text-white hover:border-b border-white'>Rideshare</Link>
  <Link to='#' className='text-white hover:border-b border-white'>Starshield</Link>
  <Link to='#' className='text-white hover:border-b border-white'>Starlink</Link>
</div>
<div className='flex flex-row space-x-8 items-center'>
  <Link to='#' className='text-white hover:border-b border-white hidden md:block'>Shop</Link>
<div className='menu-icon' onClick={handleClick}>
{ click ?
<img src={hamburger} alt='hamburger-menu' /> : <img src={close} alt='closebtn' />

}
    </div>
    </div>
    <div className={click ? 'fixed right-[-100%]': 'fixed right-0 top-0 md:w-[20%] w-[70%] border-l border-l-gray-900 h-full  bg-[#000300] p-2'}>
    <div className='flex flex-row items-center space-x-24 justify-center'>
    <img src={logo} alt='logo'  className='w-40 flex md:hidden block'/>
  <div className='menu-icon pt-4' onClick={handleClick}>
{ click ?
<img src={hamburger} alt='hamburger-menu' /> : <img src={close} alt='closebtn' />

}
    </div>
    </div>
    <ul className='flex-col flex pt-8 uppercase md:space-y-12 space-y-4 border-b'>
    <div className='flex md:flex-row flex-col md:space-x-4 space-y-4 md:hidden block'>
  <Link to='#' className='text-white border-b'>Falcon 9</Link>
  <Link to='#' className='text-white border-b'>Falcon Heavy</Link>
  <Link to='#' className='text-white border-b'>Dragon</Link>
  <Link to='#' className='text-white border-b'>Starship</Link>
  <Link to='#' className='text-white border-b'>Human SpaceFlight</Link>
  <Link to='#' className='text-white border-b'>Rideshare</Link>
  <Link to='#' className='text-white border-b'>Starshield</Link>
  <Link to='#' className='text-white border-b'>Starlink</Link>
</div>
  <Link to='#' className='text-white border-b'>Mission</Link>
  <Link to='#' className='text-white border-b'>Launches</Link>
  <Link to='#' className='text-white border-b'>Career</Link>
  <Link to='#' className='text-white border-b'>Update</Link>
  <Link to='#' className='text-white'>Shop</Link>
    </ul>
    </div>
    </div>
      )
}

export default Navbar