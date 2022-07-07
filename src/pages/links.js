import React from 'react'
import {
	ETHERSCAN_LINK,
	TWITTER_LINK,
	DISCORD_LINK,
	OPENSEA_LINK,
	LOOKSRARE_LINK,
} from '../constants'
import Layout from '../components/Layout'
import PageContainer from '../components/PageContainer'
import ExtLink from '../components/ExtLink'

const LinksPage = () => {
	return (
		<Layout pageTitle="links | unofficial mfers">
			<PageContainer>
				<h1>links</h1>

				<ul>
					<li>
						<ExtLink href={ETHERSCAN_LINK}>verified contract</ExtLink>
					</li>
					<li>
						<ExtLink href={TWITTER_LINK}>twitter</ExtLink>
					</li>
					<li>
						<ExtLink href={DISCORD_LINK}>discord</ExtLink>
					</li>
					<li>
						<ExtLink href={OPENSEA_LINK}>opensea</ExtLink>
					</li>
					<li>
						<ExtLink href={LOOKSRARE_LINK}>looksrare</ExtLink>
					</li>
				</ul>
			</PageContainer>
		</Layout>
	)
}

export default LinksPage
