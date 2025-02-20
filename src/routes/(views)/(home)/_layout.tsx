import Navigation from '../../../components/navigation.tsx'

import { JSX } from 'preact/jsx-runtime'
import { defineLayout, RouteContext } from '$fresh/server.ts'

export default defineLayout((_request: Request, ctx: RouteContext<void, unknown>): JSX.Element => {
	return (
		<main className='home-layout'>
			<div className='overlay' />
			<section className='home'>
				<div className='children'>
					<ctx.Component />
				</div>
				<Navigation bottom currentYear={new Date().getFullYear()} />
			</section>
		</main>
	)
})
