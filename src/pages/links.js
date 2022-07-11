import React from 'react'
import {
	ETHERSCAN_LINK,
	SNAPSHOT_LINK,
	DISCORD_LINK,
	TWITTER_LINK,
	OPENSEA_LINK,
	LOOKSRARE_LINK,
} from '../constants'
import Layout from '../components/Layout'
import PageContainer from '../components/PageContainer'
import ExtLink from '../components/ExtLink'

// TODO: port all JSX inline styling on this page to the src/styles/main.scss file, along with some tighter typography layout & sizing
const HEADING_SIZE = '4rem'
const LIST_SIZE = '1.5rem'

const LinksPage = () => {
	return (
		<Layout pageTitle="links | unofficial mfers">
			<PageContainer>
				<h1 style={{ fontSize: HEADING_SIZE }}>officially unofficial links</h1>

				<ul style={{ fontSize: LIST_SIZE }}>
					<li>
						<ExtLink href={ETHERSCAN_LINK}>verified contract</ExtLink>
					</li>
					<li>
						<ExtLink href={SNAPSHOT_LINK}>snapshot space</ExtLink>
					</li>
					<li>
						<ExtLink href={DISCORD_LINK}>discord</ExtLink>
					</li>
					<li>
						<ExtLink href={TWITTER_LINK}>twitter</ExtLink>
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
