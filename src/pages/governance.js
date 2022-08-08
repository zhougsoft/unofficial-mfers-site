import React from 'react'
import { TREASURY_SIGNERS, SNAPSHOT_LINK } from '../constants'
import Layout from '../components/Layout'
import PageContainer from '../components/PageContainer'
import ExtLink from '../components/ExtLink'

// TODO: port all JSX inline styling on this page to the src/styles/main.scss file, along with some tighter typography layout & sizing
const HEADING_SIZE = '4rem'
const SUBHEADING_SIZE = '2.5rem'
const SUMMARY_SIZE = '1.5rem'

const GovernancePage = () => {
	return (
		<Layout pageTitle="governance | unofficial mfers">
			<PageContainer>
				<div style={{ fontSize: SUMMARY_SIZE }}>
					<h1 style={{ fontSize: HEADING_SIZE }}>governance</h1>

						<p>
							This page contains the most current information related to the
							governance and internal workings of the unofficial mfers community.
						</p>

						<p>
							The unofficial mfers governance mechanism is a constantly evolving
							and self-improving social machine - think{' '}
							<ExtLink href="https://en.wikipedia.org/wiki/Ant#Learning">
								ants
							</ExtLink>
							! <strong>This is not our final form...</strong>
						</p>

						<p>
							We're a bottom-up effort, so please share any feedback points or
							ideas with the community! Welcome to the movement, mfer.
						</p>

						<small>
							<em>
								*** everything you see on this page should considered a
								"work-in-progress", thank you for being patient while the
								community contributors do their work! ***
							</em>
						</small>

					<h2 style={{ fontSize: SUBHEADING_SIZE }}>community treasury</h2>
					<p>
						The unofficial mfers community treasury is a Gnosis-safe multi-sig
						secured by the following signers:
					</p>

					<ul>
						{TREASURY_SIGNERS.map(signer => (
							<li>
								<ExtLink href={signer.twitter}>{signer.name}</ExtLink>
							</li>
						))}
					</ul>
					<br />

					<p>
						<strong>
							The treasury address is located on the Ethereum mainnet at:
						</strong>
					</p>
					<ul>
						<a href="0x21130e908bba2d41b63fbca7caa131285b8724f8">
							unofficialmfers.eth
							<br></br>
							0x21130e908bba2d41b63fbca7caa131285b8724f8
						</a>
					</ul>

					<p>
						Three use-specific subdomains exist under unofficialmfers.eth. Each
						sub-domain is also connected to a Gnosis safe multi-sig with three
						signers each.
					</p>

					{/* TODO: replace lazy <br/>s with proper margin/padding if/when styles on this page are moved to the stylesheets */}
					<ul>
						<li>
							<a href="https://etherscan.io/address/0xaefb75fca15bdf0292c34ef42a4378fbb226f0ee">
								discord.unofficialmfers.eth
								<br />
								0xaefb75fca15bdf0292c34ef42a4378fbb226f0ee
							</a>
							<br />
							<br />
						</li>
						<li>
							<a href="https://etherscan.io/address/0x059f171fe3e64c0724b012a4511c93e968a06342">
								charity.unofficialmfers.eth
								<br />
								0x059f171fe3e64c0724b012a4511c93e968a06342
							</a>
							<br />
							<br />
						</li>
						<li>
							<a href="https://etherscan.io/address/0x104924f017e70166c2deccbf948a39d3f6c6e94f">
								nftnyc.unofficialmfers.eth
								<br />
								0x104924f017e70166c2deccbf948a39d3f6c6e94f
							</a>
							<br />
							<br />
						</li>
					</ul>

					<h2 style={{ fontSize: SUBHEADING_SIZE }}>proposal process</h2>
					<p>
						When taking actions such as transacting with the community multi-sig
						or altering core governance processes, a proposal is required to
						outline the action to take and the plan on how to execute it.
					</p>

					<p>
						<strong>
							Here are the <em>current formal steps</em> of the unofficial mfers
							proposal pipeline:
						</strong>
					</p>

					<ol>
						<li>
							<p>
								An initiative is surfaced and discussed within the mfers community
								across social platforms.
							</p>
						</li>
						<li>
							<p>
								A proposal is drafted by the initiative organizers with details
								about their plan of execution and requirements they need. This
								proposal is submitted to the signers via the intake form <a href="https://www.submitmfer.xyz" target="_blank">here</a> and considered on a basis it
								is not damaging and the action makes sense for the unofficial
								mfers to take at the time.
							</p>
							<p>
								This selection process is a current veto power held by the
								signers, as the signers select which proposals move forward in the
								pipeline.
							</p>
						</li>
						<li>
							<p>
								If selected, the proposal will be presented to the community in
								the unofficial mfers Discord for a "soft pass" with a minimum
								voting time of 48 hours and a majority vote amongst mfer holders.
							</p>
							<p>
								This "soft pass" notifies the community of a potential upcoming
								governance action and allows for feedback. The "soft pass"
								proposal may be amended and re-submitted if it does not pass in
								the vote or if mfers would like amendments.
							</p>
						</li>
						<li>
							<p>
								Should the soft pass reach majority vote upon completion of the
								voting timeframe, the proposal (in its soft-passed form) can then
								be posted to SnapShot for a token-weighted vote (1 mfer = 1 vote)
								for a voting period open for a minimum of 72 hours.
							</p>
						</li>
						<li>
							<p>
								If the SnapShot vote reaches a majority vote within the voting
								timeframe, the action outlined in the proposal is executed.
							</p>
							<p>
								If the action involves any transactions using the community
								treasury, or its sub-treasuries, the signers securing those
								multi-sigs shall execute those transactions.
							</p>
						</li>
					</ol>

					<h2 style={{ fontSize: SUBHEADING_SIZE }}>snapshot</h2>
					<p>
						The{' '}
						<ExtLink href={SNAPSHOT_LINK}>
							unofficial mfers SnapShot space
						</ExtLink>{' '}
						is where we vote on important community proposals! It's located at:
						<a href={SNAPSHOT_LINK} target="_blank">{SNAPSHOT_LINK}</a>
					</p>
					
				</div>
			</PageContainer>
		</Layout>
	)
}

export default GovernancePage
