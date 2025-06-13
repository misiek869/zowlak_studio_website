import React from 'react'

const TopGradient = () => {
	return (
		<div className='hidden md:block absolute w-[480px] h-[480px] rounded-full bg-gray-900 -top-[40%] -right-[4%] z-30 blur-[300px]' />
	)
}

const BottomGradient = () => {
	return (
		<div className='hidden md:block absolute w-[480px] h-[480px] rounded-full bg-gray-900 -bottom-[30%] -left-[4%] z-30 blur-[300px]' />
	)
}

export { TopGradient, BottomGradient }
