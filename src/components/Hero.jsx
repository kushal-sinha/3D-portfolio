import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { ComputersCanvas } from './canvas'
//this basica;;y creates a circle line no-11
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max- w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='h-5 w-5 rounded-full bg-[#915eff]' />
        </div>
      </div>
    </section>
  )
}

export default Hero