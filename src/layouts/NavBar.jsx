import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../imgs/logo.png";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>
      <header className='w-full bg-primary flex p-6 lg:p-3 relative'>
        <div className='w-2/3 flex items-center'>
          <div className='w-2/3'>
            <Link to='/' className='text-lg md:text-2xl lg:text-4xl text-white'>
              ProPond Golf Ball Retrieval
            </Link>
          </div>
          <div className='w-1/3 '>
            <img src={logo} alt='logo' className='md:w-1/2' />
          </div>
        </div>

        <nav className='w-1/3 justify-end items-center flex'>
          <div className='md:flex hidden'>
            <ul className='md:flex md:items-center'>
              <li className='p-1 md:p-2'>
                <Link to='/' className='text-lg md:text-xl text-white'>
                  Home
                </Link>
              </li>
              <li className='p-1 md:p-2 text-center'>
                <Link to='/about' className='text-lg md:text-xl text-white'>
                  About Us
                </Link>
              </li>
              <li className='p-1 md:p-2'>
                <Link to='/services' className='text-lg md:text-xl text-white'>
                  Services
                </Link>
              </li>
              <li className='p-1 md:p-2'>
                <Link to='/contact' className='text-lg md:text-xl text-white'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className='md:hidden flex flex-col'>
            <button className='text-white block' onClick={toggleMenu}>
              <FaBars className='mr-5 w-12 h-7' />
            </button>
            <ul
              className={`${
                isOpen ? "block" : "hidden"
              } md:hidden absolute w-full top-full z-10 left-3/4`}
            >
              <li className='p-1'>
                <Link to='/' className='text-lg text-white'>
                  Home
                </Link>
              </li>
              <li className='p-1'>
                <Link to='/about' className='text-lg text-white'>
                  About Us
                </Link>
              </li>
              <li className='p-1'>
                <Link to='/services' className='text-lg text-white'>
                  Services
                </Link>
              </li>
              <li className='p-1'>
                <Link to='/contact' className='text-lg text-white'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
