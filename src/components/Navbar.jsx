import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../style'
import { navLinks } from '../constants'
import { logos, menu, close } from '../assets'
const Navbar = () => {
  const [active, setActive] = useState("");
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full justify-between items-center max-w-7xl mx-auto'>
        <Link
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("")    // keep track of where we are currently in psge
            window.scrollTo(0, 0)         // scroll to top of page
          }}
        >
          <img src={logos} alt="logo" className=' object-fit' width={200} height={200} />
        </Link>
      </div>

    </nav>
  )
}

export default Navbar