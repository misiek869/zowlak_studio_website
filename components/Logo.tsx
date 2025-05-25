import Link from 'next/link'
import React from 'react'

const Logo = () => {
	return (
		<Link href={'#'} className='text-[28px] font-normal'>
			Zwolak <span className='font-bold'>Studio</span>
		</Link>
	)
}

export default Logo
