import * as React from 'react'
import Layout from '../components/Layout'
import ExtLink from '../components/ExtLink'

import sartoshiImg from '../assets/images/sartoshi.png'
import svgDiscordLogo from '../assets/svg/discord-logo.svg'
import svgEtherscanLogo from '../assets/svg/etherscan-logo.svg'
import svgTwitterLogo from '../assets/svg/twitter-logo.svg'

const DISCORD_LINK = 'https://discord.com/invite/tjp9YrwZ'
const ETHERSCAN_LINK =
	'https://etherscan.io/address/0x79FCDEF22feeD20eDDacbB2587640e45491b757f'
const TWITTER_LINK = 'https://twitter.com/unofficialmfers'

const IndexPage = () => {
	return (
		<Layout pageTitle="unofficial mfers">
			<div className="titleSection">
				<h1>unofficial mfers</h1>
				<p>
					the <b>official</b> website of the <b>unofficial mfers</b>
				</p>
			</div>
			<div className="linkGroup">
				<ExtLink href={DISCORD_LINK}>
					<img src={svgDiscordLogo} alt="Discord logo icon" />
				</ExtLink>
				<ExtLink href={ETHERSCAN_LINK}>
					<img src={svgEtherscanLogo} alt="Etherscan logo icon" />
				</ExtLink>
				<ExtLink href={TWITTER_LINK}>
					<img src={svgTwitterLogo} alt="Twitter logo icon" />
				</ExtLink>
			</div>
			<img
				src={sartoshiImg}
				alt="sartoshi smiling and vibing with headphones in their chair, facing to the right"
				className="mferPic"
			/>
		</Layout>
	)
}

export default IndexPage
