import React from 'react'
import NavLinks from './NavLinks'
import Logo from './Logo'
import Socials from './Socials'

const MainNav = () => {
	return (
		<nav className='w-full py-12 px-8 '>
			<div className='flex flex-col h-full items-baseline'>
				<Logo />
				<NavLinks containerStyles='flex flex-col gap-6 mt-20' linkStyle='' />
			</div>
			<div className='hidden'>
				<Socials
					containerStyles='flex gap-8'
					iconStyles='w-[48px] h-[48px] text-[26px] hover:text-slate-50 hover:bg-gray-900 transition-all duration-300 flex items-center justify-center rounded-full cursor-pointer bg-slate-50 text-gray-900'
				/>
			</div>
		</nav>
	)
}

export default MainNav
