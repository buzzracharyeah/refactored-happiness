import React from 'react'

const HeroSection = () => {
  return (
    <div className='relative flex min-h-screen items-end justify-center' id='hero'>
        <img src="https://plus.unsplash.com/premium_photo-1685136482295-4e6209bfdd02?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='hero-image' className='absolute inset-0 z-10 h-full w-full object-cover'></img>
        <div className='absolute inset-0 z-10 bggradient-to-b from-transparent from-60% to-black lg:from-30%'></div>

        <div className='z-20 mx-4 max-w-3xl  pb-20'>
            <h1 className='text-5xl font-semibold uppercase tracking-wide md:text-7xl'>
                profile name
            </h1>
            <p className='pt-2 font-semibold'>Lorem, ipsum.</p>
        </div>
    </div>
  )
}

export default HeroSection