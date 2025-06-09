import React from 'react'
import NavLinks from './NavLinks'
import Logo from './Logo'
import Socials from './Socials'

const MainNav = () => {
	return (
		<nav className='w-full py-12 px-8 relative'>
			<div className='flex flex-col h-full items-baseline'>
				<Logo />
				<NavLinks containerStyles='flex flex-col gap-6 mt-20' linkStyle='' />
			</div>
			{/* Div z socialami na dole, wyśrodkowany poziomo */}
			<div className='absolute bottom-8 left-1/2 transform -translate-x-1/2'>
				<Socials
					containerStyles='flex gap-8'
					iconStyles='w-[48px] h-[48px] text-[26px] hover:text-slate-50 hover:bg-gray-900 transition-all duration-300 flex items-center justify-center rounded-full cursor-pointer bg-slate-50 text-gray-900'
				/>
			</div>
		</nav>
	)
}

export default MainNav
