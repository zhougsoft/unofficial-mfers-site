import React from 'react'
import { TWITTER_LINK, OPENSEA_LINK } from '../constants'
import Layout from '../components/Layout'
import ExtLink from '../components/ExtLink'

const LinksPage = () => {
	return (
		<Layout pageTitle="links | unofficial mfers">
			<h1>links</h1>

			<ul>
				<li>
					<ExtLink href={TWITTER_LINK}>twitter</ExtLink>
				</li>
				<li>
					<ExtLink href={OPENSEA_LINK}>opensea</ExtLink>
				</li>
			</ul>
		</Layout>
	)
}

export default LinksPage
