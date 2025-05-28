import React from 'react'
import NavLinks from './NavLinks'
import Logo from './Logo'

const MainNav = () => {
	return (
		<nav className='w-full py-12 px-8'>
			<div className='flex flex-col h-full items-baseline'>
				<Logo />
				<NavLinks containerStyles='flex flex-col gap-6 mt-20' linkStyle='' />
			</div>
		</nav>
	)
}

export default MainNav
