import { div } from 'framer-motion/client'

type Journey = {
	years: string
	role: string
	institution: string
}

const journey: Journey[] = [
	{
		years: '2022 - Present',
		role: 'Developer',
		institution: 'Company',
	},
	{
		years: '2022 - Present',
		role: 'Developer',
		institution: 'Company',
	},
	{
		years: '2022 - Present',
		role: 'Developer',
		institution: 'Company',
	},
]

const Journey = () => {
	return (
		<div className='flex flex-col '>
			<h2 className='h2 mb-8'>
				Education & <span>Experience</span>
			</h2>
			{journey.map((item, index) => {
				return (
					<div className='flex items-center gap-12 w-full' key={index}>
						<div className='flex flex-col w-max justify-center items-center'>
							<div className='w-3 h-3 bg-gray-900 rounded-full'></div>
							<div className='w-[1px] h-[180px] bg-gray-900/10 rounded-full'></div>
						</div>
						<div className='max-w-[500px]'>
							<p>{item.years}</p>
							<h4>{item.role}</h4>
							<h4>{item.institution}</h4>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default Journey
