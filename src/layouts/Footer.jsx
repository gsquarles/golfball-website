import { Link } from "react-router-dom";
import logo from "../imgs/logo.png";

export function Footer() {
  return (
    <footer className='w-full bg-primary p-4 text-white md:flex  md:space-x-10 md:items-center md:justify-center'>
      <div>
        <div className='flex items-center space-x-5 md:mr-28'>
          <h1 className='text-2xl'>Tee to Green Retrieval</h1>
          <img src={logo} alt='logo' className=' w-1/5 md:w-40' />
        </div>
      </div>
      <div>
        <h1 className='mt-3 text-2xl'>Links Of Interest:</h1>
        <ul>
          <li>
            <Link to='/' className=' underline'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/services' className=' underline'>
              Services
            </Link>
          </li>
          <li>
            <Link to='/contact' className=' underline'>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h1 className='mt-3 text-2xl'>Contact:</h1>
        <p>ourEmail@gmail.com</p>
        <a href='tel:1234567'>(333)-444-5555</a>
        <br />
        <br />
        <div className=' text-xs'>
          &copy; 2023 Tee to Green Retrieval. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
