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
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div className=''>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi I'm <span className='text-[#915eff]'>Kushal</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white`}>I specialize in developing and maintaining <br className='sm:block hidden' /> high-quality web and mobile applications using cutting-edge technologies like ReactJs, React Native, and Next.js.</p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  )
}

export default Hero