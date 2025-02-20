import BackButton from '../(_components)/back-button.tsx'
import PublishedAt from '../(_components)/published-at.tsx'
import CupOfTeaLogo from '../(_components)/cup-of-tea-logo.tsx'

import { JSX } from 'preact/jsx-runtime'
import { findPosts } from '../../../../helpers/lib/posts.ts'
import { defineRoute, RouteContext } from '$fresh/server.ts'

export default defineRoute(async (_request: Request, _ctx: RouteContext<void, unknown>): Promise<JSX.Element> => {
	const posts: Post[] = await findPosts()

	return (
		<section className='profile-page'>
			<BackButton title='About' href='/' />
			<CupOfTeaLogo />
			<div className='details'>
				<h5>
					<a className='anchor-text' href='https://nvll.me'>rvnrstnsyh</a> as Administrator
				</h5>
				<p className='statboard'>
					Member since February 14, 2025<br />
					1 Spilled &bull; 0 Echo
				</p>
			</div>
			{posts.length >= 1 && posts.map((post: Post): JSX.Element => (
				<div className='post-card' key={post.slug}>
					<a className='title' href={`/rvnrstnsyh/${post.slug}`}>
						<h4>{post.title}</h4>
					</a>
					<PublishedAt date={post.published_at} />
					<div className='snippet'>{post.snippet}</div>
				</div>
			))}
		</section>
	)
})
