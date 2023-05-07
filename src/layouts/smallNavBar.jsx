import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../imgs/logo.png";

export function SmallNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>
      <header className=' w-full bg-primary flex p-6 relative'>
        <div className=' w-2/3 flex items-center'>
          <div className='w-2/3'>
            <Link to='/' className=' text-lg text-white '>
              ProPond Golf Ball Retrieval
            </Link>
          </div>
          <div className='w-1/3'>
            <img src={logo} alt='logo' />
          </div>
        </div>

        <nav className='w-1/3 justify-end items-center flex'>
          <div className='md:hidden flex flex-col'>
            <button className='text-white block' onClick={toggleMenu}>
              <FaBars className='mr-5 w-12 h-7' />
            </button>
            <ul
              className={`${
                isOpen ? "block" : "hidden"
              } md:block md:items-center absolute w-full top-full z-10 left-3/4`}
            >
              <li className=' p-1 text-lg'>
                <Link to='/'>Home</Link>
              </li>
              <li className=' p-1 text-lg'>
                <Link to='/about'>About Us</Link>
              </li>
              <li className=' p-1 text-lg'>
                <Link to='/services'>Services</Link>
              </li>
              <li className=' p-1 text-lg'>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
