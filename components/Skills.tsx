import {
	RiReactjsFill,
	RiNextjsFill,
	RiHtml5Fill,
	RiCss3Fill,
	RiTailwindCssFill,
	RiNodejsFill,
} from 'react-icons/ri'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'

type Skill = {
	icon: React.ReactNode
	name: string
}

const skills: Skill[] = [
	{ icon: <RiReactjsFill />, name: 'React.js' },
	{ icon: <RiNextjsFill />, name: 'Next.js' },
	{ icon: <RiHtml5Fill />, name: 'HTML 5' },
	{ icon: <RiCss3Fill />, name: 'CSS 3' },
	{ icon: <RiTailwindCssFill />, name: 'Tailwindcss' },
	{ icon: <RiNodejsFill />, name: 'Node.js' },
]

const Skills = () => {
	return (
		<div>
			<h2 className='h2 mb-8'>Moje Umiejętności</h2>
			<div className='flex flex-wrap gap-6 max-w-sm xl:max-w-none'>
				{skills.map((item, index) => {
					return (
						<TooltipProvider key={index}>
							<Tooltip>
								<TooltipTrigger className='w-16 h-16 rounded-full flex items-center justify-center bg-slate-50 group'>
									<div className='text-3xl group-hover:text-gray-700 transition-all duration-300'>
										{item.icon}
									</div>
								</TooltipTrigger>
								<TooltipContent>
									<p className='text-lg '>{item.name}</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					)
				})}
			</div>
		</div>
	)
}

export default Skills
