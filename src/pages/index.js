import * as React from 'react'
import Layout from '../components/Layout'
import ExtLink from '../components/ExtLink'

import {
	DISCORD_LINK,
	OPENSEA_LINK,
	LOOKSRARE_LINK,
	ETHERSCAN_LINK,
	TWITTER_LINK,
} from '../constants'

import sartoshiImg from '../assets/images/sartoshi.png'
import svgDiscordLogo from '../assets/svg/discord-logo.svg'
import svgOpenSeaLogo from '../assets/svg/os-logo.svg'
import svgLooksRareLogo from '../assets/svg/looksrare-logo.svg'
import svgEtherscanLogo from '../assets/svg/etherscan-logo.svg'
import svgTwitterLogo from '../assets/svg/twitter-logo.svg'

const IndexPage = () => {
	return (
		<Layout pageTitle="unofficial mfers">
			<section className="home-content">
				<div className="home-title">
					<h1>unofficial mfers</h1>
					<p>
						the <strong>officially unofficial</strong> website of the{' '}
						<strong>mfers</strong>
					</p>
				</div>
				<div className="home-links">
					<ExtLink href={DISCORD_LINK}>
						<img src={svgDiscordLogo} alt="Discord logo icon" />
					</ExtLink>
					<ExtLink href={OPENSEA_LINK}>
						<img src={svgOpenSeaLogo} alt="Opensea logo icon" />
					</ExtLink>
					<ExtLink href={LOOKSRARE_LINK}>
						<img src={svgLooksRareLogo} alt="LooksRare logo icon" />
					</ExtLink>
					<ExtLink href={ETHERSCAN_LINK}>
						<img src={svgEtherscanLogo} alt="Etherscan logo icon" />
					</ExtLink>
					<ExtLink href={TWITTER_LINK}>
						<img src={svgTwitterLogo} alt="Twitter logo icon" />
					</ExtLink>
				</div>
			</section>
			<img
				src={sartoshiImg}
				alt="sartoshi smiling and vibing with headphones in their chair, facing to the right"
				className="mfer-pic"
			/>
		</Layout>
	)
}

export default IndexPage
