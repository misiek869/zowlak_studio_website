'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type LinksArr = {
	name: string
	path: string
}

const links: LinksArr[] = [
	{ name: 'główna', path: '/' },
	{ name: 'o mnie', path: '/about' },
	{ name: 'usługi', path: '/services' },
	{ name: 'moje projekty', path: '/work' },
	{ name: 'kontakt', path: '/contact' },
]

const NavLinks = ({
	containerStyles,
	linkStyle = 'text-slate-50 text-left',
}: {
	containerStyles: string
	linkStyle: string
}) => {
	const pathname = usePathname()

	return (
		<ul className={containerStyles}>
			{links.map((link, index) => {
				const isActiveRoute = pathname === link.path

				const charLength = link.name.length

				const lineWidth = charLength > 5 ? 'after:w-[120%]' : 'after:w-[90%]'

				return (
					<Link
						className={`relative text-lg uppercase ${linkStyle} ${
							isActiveRoute &&
							`after:content-[''] after:block after:absolute after:left-0 after:bottom-[-1] ${lineWidth} after:h-[4px] after:bg-slate-50 after:z-0`
						}`}
						key={index}
						href={link.path}>
						<span className='relative z-10'>{link.name}</span>
					</Link>
				)
			})}
		</ul>
	)
}

export default NavLinks
