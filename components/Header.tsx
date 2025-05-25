import React from 'react'
import Logo from './Logo'

const Header = () => {
	return (
		<div className='2xl:hidden absolute z-40 left-0 top-0 right-0'>
			<div className='container mx-auto '>
				<div className=''>
					<Logo />
				</div>
			</div>
		</div>
	)
}

export default Header
