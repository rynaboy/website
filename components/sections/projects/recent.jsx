// Section structure
import Section 		from '../../structure/section';
import Container 	from '../../structure/container';

import Image from 'next/image'

import Icon from '../../utils/icon.util'

import css from '../../../styles/sections/projects/recent.module.scss'

export default function GitProjects({ user }) {
	return (
		<Section classProp={css.section}>	
			<Container classProp={css.container} spacing={'verticalXXXLrg'}>
				<h3>Recent Projects</h3>
				<section className={css.profile}>
					<Image className={css.profilePhoto} src={`${user[0].avatar_url}`} alt="Github Profile Photo" height={60} width={60}/>
					<span class={css.details}>
						<p>{user[0].name}</p>
						<a href={user[0].html_url} rel="noreferrer" target="_blank">{user[0].html_url} <Icon icon={[ 'far', 'arrow-up-right-from-square' ]} /></a>
					</span>
				</section>
				<div className={css.projects}>
					
				</div>
				{/*
				<pre>{ JSON.stringify(user, undefined, 2) }</pre>
				<pre>{ JSON.stringify(repos, undefined, 2) }</pre>
				*/}
			</Container>
		</Section>
	)
}