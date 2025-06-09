import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import MainNav from '@/components/MainNav'
import PageTransition from '@/components/PageTransition'
import RectangleTransition from '@/components/RectangleTransition'
import Gradients from '@/components/Gradients'
import Header from '@/components/Header'

const montserrat = Montserrat({
	variable: '--font-montserrat',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Zwolak Studio',
	description: 'Architektura | Wnętrza',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${montserrat.variable}  antialiased overflow-hidden relative`}>
				<Gradients />
				<RectangleTransition />
				<PageTransition>
					<div className='flex'>
						<div className='hidden 2xl:flex w-[285px] h-screen bg-gray-800 text-slate-50'>
							<MainNav />
						</div>
						<div className='w-full max-w-[1130px] px-[15px] mx-auto'>
							<Header />
							<div>{children}</div>
						</div>
					</div>
				</PageTransition>
			</body>
		</html>
	)
}
