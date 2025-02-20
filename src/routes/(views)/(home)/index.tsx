import CupOfTeaLogo from './(_components)/cup-of-tea-logo.tsx'
import PrimaryButton from '../../../components/primary-button.tsx'

import { JSX } from 'preact/jsx-runtime'
import { defineRoute, RouteContext } from '$fresh/server.ts'

export default defineRoute((_request: Request, _ctx: RouteContext<void, unknown>): JSX.Element => {
	return (
		<section className='about-page'>
			<CupOfTeaLogo />
			<div className='content'>
				<h5 className='title'>
					Interplanetary Markdown
				</h5>
				<p className='description'>
					A censorship-resistant Markdown publishing platform, enabling seamless content distribution. Powered by the Interplanetary File System (IPFS),
					ensuring blogs, articles, and other written content remain accessible and verifiable across the distributed web.
				</p>
				<div className='cta'>
					<div className='maintainer'>
						Maintained by <a className='anchor-text' href='https://nvll.me'>rvnrstnsyh</a>
					</div>
					<div className='button-wrapper'>
						<a href='/rvnrstnsyh'>
							<PrimaryButton>Demo</PrimaryButton>
						</a>
						<a href='/'>
							<PrimaryButton>Get Started</PrimaryButton>
						</a>
					</div>
				</div>
			</div>
		</section>
	)
})
