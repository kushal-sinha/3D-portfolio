import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../style'
import { navLinks } from "../constants";
import { logos, menu, close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false); // Set to boolean false

  return (
    <nav
      className={`${styles.paddingX} py-5 top-0 z-20`}
    >
      <div className='flex justify-between'>
        <div>
          <Link
            to='/'
            className='flex items-center justify-between gap-4'
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logos} alt='logo' className='object-contain' width={100} />
            <p className='text-white text-[18px] font-bold cursor-pointer flex '>
              Kushal Sinha &nbsp;
              <span className='sm:block hidden flex-col'>| Portfolio</span>
            </p>
          </Link>
        </div>

        <div>
          <ul className='list-none hidden sm:flex flex-row items-center gap-8'>
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white transition-colors duration-300 ease-in-out text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
          <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img
              src={toggle ? close : menu}
              alt='menu'
              className='w-[28px] h-[28px] object-contain cursor-pointer'
              onClick={() => setToggle(!toggle)}
            />
            <div className={`${!toggle ? "hidden" : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
              <ul className='list-none flex justify-end items-start flex-col gap-4'>
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
