// Sections
import GitRecentProjects from '../../components/sections/projects/recent'
import FeaturedProjects from '../../components/sections/projects/featured'

import Color  from '../../components/utils/page.colors.util'

import settings from '../../content/_settings.json'
import colors from '../../content/projects/_colors.json'

//
export default function Projects({ user }) {
	return (
		<>
		<Color colors={colors} />
		<FeaturedProjects />
		<GitRecentProjects user={user} />
		</>
	)
}

// This gets called on every request
export async function getServerSideProps({ res }) {

	res.setHeader(
		'Cache-Control',
		'public, s-maxage=600, stale-while-revalidate=59'
	)

	const [ gitUserRes] = await Promise.all( [
		fetch(`https://api.github.com/users/${settings.username.github}`),
		// fetch(`https://api.github.com/users/${settings.username.github}/repos`),
	] )
	
	let [ user] = await Promise.all( [
		gitUserRes.json(),
		// gitReposRes.json(), 
	] )

	if (user.login) {
		user = [user].map( 
			({ login, name, avatar_url, html_url }) => ({ login, name, avatar_url, html_url })
		)
	}
	
	return { props: { user } }
}