import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { styles } from '../style'
import { navLinks } from "../constants";
import { logos, menu, close } from '../assets'
const Navbar = () => {
  const [active, setActive] = useState("");
  return (
    <nav
      className={`${styles.paddingX
        } justify-between   py-5 top-0 z-20`}
    >
      <div className=' flex  justify-between'>
        <div>
          <Link
            to='/'
            className='flex items-center justify-between gap-4'
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logos} alt='logo' className='  object-contain' width={100} />
            <p className='text-white text-[18px] font-bold cursor-pointer '>
              Kushal Sinha &nbsp;
              <span className='sm:block hidden flex-col'> | Portfolio</span>
            </p>
          </Link>
        </div>

        <div>
          <ul className='list-none hidden sm:flex flex-row items-center gap-10'>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>



  )
}

export default Navbar