import React from 'react'
import {
	TREASURY_SIGNERS,
	SNAPSHOT_LINK,
	DISCORD_LINK,
	TREASURY_LINK,
	PROP_SUBMISSION_LINK,
} from '../constants'
import Layout from '../components/Layout'
import PageContainer from '../components/PageContainer'
import ExtLink from '../components/ExtLink'

const GovernancePage = () => {
	return (
		<Layout pageTitle="governance | unofficial mfers">
			<PageContainer>
				<div className="gov-wrapper">
					<h1 className="gov-heading">governance</h1>

					<p>
						This page contains the most current information related to the
						governance and internal workings of the unofficial mfers community.
						<br />
						<br />
						The unofficial mfers governance mechanism is a constantly evolving
						and self-improving social machine - think{' '}
						<ExtLink href="https://en.wikipedia.org/wiki/Ant#Learning">
							ants
						</ExtLink>
						! <strong>This is not our final form...</strong>
						<br />
						<br />
						We're a bottom-up effort, so please share any feedback points or
						ideas with the community! Welcome to the movement, mfer.
					</p>

					{/* --- TREASURY --- */}
					<h2 className="gov-subheading">treasury</h2>
					<p>
						The{' '}
						<ExtLink href={TREASURY_LINK}>
							unofficial mfers community treasury
						</ExtLink>{' '}
						is a Gnosis-safe multi-sig secured by the following signers:
					</p>

					<ul>
						{TREASURY_SIGNERS.map(signer => (
							<li key={`signer-${signer.name}`}>
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

					<ExtLink href={TREASURY_LINK}>
						unofficialmfers.eth
						<br />
						0x21130e908bba2d41b63fbca7caa131285b8724f8
					</ExtLink>

					<br />
					<br />

					<p>
						Three use-specific subdomains exist under unofficialmfers.eth. Each
						sub-domain is also connected to a Gnosis safe multi-sig with three
						signers each.
					</p>

					<ul>
						<li>
							<ExtLink href="https://etherscan.io/address/0xaefb75fca15bdf0292c34ef42a4378fbb226f0ee">
								discord.unofficialmfers.eth
								<br />
								0xaefb75fca15bdf0292c34ef42a4378fbb226f0ee
							</ExtLink>
							<br />
							<br />
						</li>
						<li>
							<ExtLink href="https://etherscan.io/address/0x059f171fe3e64c0724b012a4511c93e968a06342">
								charity.unofficialmfers.eth
								<br />
								0x059f171fe3e64c0724b012a4511c93e968a06342
							</ExtLink>
							<br />
							<br />
						</li>
						<li>
							<ExtLink href="https://etherscan.io/address/0x104924f017e70166c2deccbf948a39d3f6c6e94f">
								nftnyc.unofficialmfers.eth
								<br />
								0x104924f017e70166c2deccbf948a39d3f6c6e94f
							</ExtLink>
						</li>
					</ul>

					{/* --- PROPOSAL PROCESS --- */}
					<h2 className="gov-subheading">proposal process</h2>
					<p>
						When taking actions such as transacting with the community multi-sig
						or altering core governance processes, a proposal is required to
						outline the action to take and the plan on how to execute it.
						<br />
						<br />
						<strong>
							There are currently five steps in the unofficial mfers proposal
							pipeline:
						</strong>
					</p>
					<br />
					<ol className="prop-process-list">
						<li>
							<h3>proposal submission</h3>
							<p>
								A proposal is submitted to the treasury via the{' '}
								<ExtLink href={PROP_SUBMISSION_LINK}>intake form here</ExtLink>{' '}
								and considered on a basis it is not damaging and the action
								makes sense for the unofficial mfers to take at the time.
							</p>
						</li>
						<li>
							<h3>discussion</h3>
							<p>
								If accepted, the proposal is presented to the community for
								discussion in the{' '}
								<ExtLink href={DISCORD_LINK}>unofficial mfers discord</ExtLink>{' '}
								via a dedicated proposal thread.
							</p>
						</li>
						<li>
							<h3>soft pass vote</h3>
							<p>
								The project lead for the proposal decides when to begin the soft
								pass vote in the unofficial mfers discord. The soft pass will
								run for a period of 48 hours.
								<br />
								<br />
								<strong>
									A successful soft pass requires a minimum of 125 <em>Yes</em>{' '}
									votes with a 75% threshold of participating voters choosing{' '}
									<em>Yes</em>
								</strong>{' '}
								(soft pass votes are anonymous).
							</p>
						</li>
						<li>
							<h3>snapshot vote</h3>
							<p>
								After achieving a successful soft-pass the proposal will be
								posted to <ExtLink href={SNAPSHOT_LINK}>Snapshot</ExtLink> for a
								token-weighted vote <strong>(1 mfer = 1 vote).</strong>
								<br />
								<br />
								The Snapshot vote will run for a period of{' '}
								<strong>72 hours.</strong> If the Snapshot vote reaches a
								majority vote within the voting timeframe, the action outlined
								in the proposal is executed.
							</p>
						</li>
						<li>
							<h3>funding</h3>
							<p>
								If the action involves any transactions using the community
								treasury, or its sub-treasuries, the signers securing those
								multi-sigs shall execute those transactions for funding.
							</p>
						</li>
					</ol>

					{/* --- SNAPSHOT --- */}
					<h2 className="gov-subheading">snapshot</h2>
					<p>
						The{' '}
						<ExtLink href={SNAPSHOT_LINK}>
							unofficial mfers SnapShot space
						</ExtLink>{' '}
						is where we vote on important community proposals! It's located at:
						<br />
						<ExtLink href={SNAPSHOT_LINK}>{SNAPSHOT_LINK}</ExtLink>
					</p>
				</div>
			</PageContainer>
		</Layout>
	)
}

export default GovernancePage
