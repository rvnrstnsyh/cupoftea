import CupOfTeaLogo from './(_components)/cup-of-tea-logo.tsx'

import { JSX } from 'preact/jsx-runtime'
import { defineRoute, RouteContext } from '$fresh/server.ts'

export default defineRoute((_request: Request, _ctx: RouteContext<void, unknown>): JSX.Element => {
	return (
		<section className='post-lists'>
			<CupOfTeaLogo />
			<div className='profile'>
				<h5>
					Interplanetary Markdown
				</h5>
				<p className='details text-justify'>
					Maintained by&nbsp;<a className='anchor-text' href='https://nvll.me'>rvnrstnsyh</a>, this decentralized Markdown publishing platform where you can
					publish without censorship. Powered by IPFS, your blogs, articles, and writings remain accessible and verifiable across the distributed web. Try
					the&nbsp;<a className='anchor-text' href='/rvnrstnsyh'>demo</a> and <a className='anchor-text' href='/'>get started</a>.
				</p>
			</div>
		</section>
	)
})
