import {  useEffect, useState } from 'react'
import {  NavLink } from 'react-router-dom'
import { FiHome, FiSearch, FiBell } from 'react-icons/fi';

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'business');


  const [isChecked, setIsChecked] = useState(() => theme === 'corporate');


  const handleToggle = e => {
    const selectedTheme = e.target.checked ? 'corporate' : 'business';
    setTheme(selectedTheme);
    setIsChecked(e.target.checked);
    localStorage.setItem('theme', selectedTheme);
  }

  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [theme])

  return (
    <div className='sticky z-50 top-0 bg-gradient-to-b lg:bg-gradient-to-l from-gray-900 via-gray-600 to-base-300 '>
      <div className="navbar container mx-auto ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><NavLink to={'/'} className={({ isActive}) =>
    isActive ? "border-b-2 border-b-rose-300  p-2 text-rose-300 font-semibold text-center delay-75 transition-all" : " p-2 text-violet-400 font-semibold"
  }>Home</NavLink></li>
      <li><NavLink to={'/all'} className={({ isActive}) =>
    isActive ? "border-b-2 border-b-rose-300  p-2 text-rose-300 font-semibold text-center delay-75 transition-all" : " p-2 text-violet-400 font-semibold"
  }>All Items</NavLink></li>
      

<label className='cursor-pointer grid place-items-center lg:hidden '>
          <input
            type='checkbox'
            onChange={handleToggle}
            checked={isChecked}
            className='toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-12'
          />
          <svg
            className='col-start-7 row-start-1 stroke-base-100 fill-base-100'
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <circle cx='12' cy='12' r='5' />
            <path d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4' />
          </svg>
          <svg
            className='col-start-6 row-start-1 stroke-base-100 fill-base-100'
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
          </svg>
        </label>
      </ul>
    </div>
    <div className='flex items-center gap-2'>
                <img className='size-12 rounded-full border-2 border-violet-300' src='/logo.jpg' alt="" />
                <h1 className='font-meri font-bold '>JOBNEST</h1>
            </div>
  </div>
  <div className="navbar-center hidden lg:flex space-x-2">
  <nav className="max-w-fit mx-auto" id="nav">
      <span className='border-r border-gray-700'>
      <NavLink to={'/'} className={({isActive})=>isActive? "nav-item active": "nav-item"}>
        <span className="icon">
          <FiHome />
        </span>
        <a >Home</a>
      </NavLink>
      </span>
      <span className='border-r border-gray-700'>
      <NavLink to={'/all'} className={({isActive})=>isActive? "nav-item active": "nav-item"}>
        <span className="icon">
        <FiSearch />
        </span>
        <a >All Jobs</a>
      </NavLink>
      </span>
      <span className="nav-item">
        <span className="icon">
          <span className="subicon">13</span>
          <FiBell />
        </span>
        <a href="#">Applied Jobs</a>
      </span>

    </nav>
      


  </div>
  
    
        <div className="navbar-end gap-2">
        <label className='cursor-pointer md:grid place-items-center hidden lg:grid '>
          <input
            type='checkbox'
            onChange={handleToggle}
            checked={isChecked}
            className='toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2'
          />
          <svg
            className='col-start-2 row-start-1 stroke-base-100 fill-base-100'
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <circle cx='12' cy='12' r='5' />
            <path d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4' />
          </svg>
          <svg
            className='col-start-1 row-start-1 stroke-base-100 fill-base-100'
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
          </svg>
        </label>
    <a className="btn  btn-info">Login</a>
    <a className="btn btn-outline  btn-accent">Register</a>
  </div>
  </div>
  
</div>


     
  )
}

export default Navbar