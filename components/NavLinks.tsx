import Link from 'next/link'
import React from 'react'

type LinksArr = {
	name: string
	path: string
}

const links: LinksArr[] = [
	{ name: 'home', path: '/' },
	{ name: 'about', path: '/about' },
	{ name: 'services', path: '/services' },
	{ name: 'contact', path: '/contact' },
]

const NavLinks = ({ containerStyles }: { containerStyles: string }) => {
	return (
		<ul className={containerStyles}>
			{links.map((link, index) => {
				return (
					<Link key={index} href={link.path}>
						{link.name}
					</Link>
				)
			})}
		</ul>
	)
}

export default NavLinks
