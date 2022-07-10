import React from 'react'
import Layout from '../components/Layout'
import PageContainer from '../components/PageContainer'

const GovernancePage = () => {
	return (
		<Layout pageTitle="governance | unofficial mfers">
			<PageContainer>
				<h1>governance</h1>

				<p>
					the following is the most current information related to governance
					and internal workings of the unofficial mfers community.
				</p>

				<h2>community treasury</h2>
				<p>
					the unofficial mfers community treasury is a Gnosis safe multi-sig
					secured by the following signers:
				</p>
				<ul>
					<li>imp0ster</li>
					<li>zhoug</li>
					<li>masterchan</li>
					<li>metabananas</li>
					<li>lexito</li>
					<li>mleejr</li>
					<li>kml</li>
				</ul>

				<p>the treasury address is located on the Ethereum mainnet at:</p>
				<code>unofficialmfers.eth</code>
				<p>which resolves to address:</p>
				<code>0x21130e908bba2d41b63fbca7caa131285b8724f8</code>

				<p>
					Three use-specific sub-treasuries exist as subdomains on{' '}
					<code>unofficialmfers.eth</code>. Each sub-treasury is also a Gnosis
					safe with three signers each.
				</p>
				<ul>
					<li>
						<code>discord.unofficialmfers.eth</code>
						<br />
						<code>0xaefb75fca15bdf0292c34ef42a4378fbb226f0ee</code>
					</li>
					<li>
						<code>charity.unofficialmfers.eth</code>
						<br />
						<code>0x059f171fe3e64c0724b012a4511c93e968a06342</code>
					</li>
					<li>
						<code>nftnyc.unofficialmfers.eth</code>
						<br />
						<code>0x104924f017e70166c2deccbf948a39d3f6c6e94f</code>
					</li>
				</ul>

				<h2>proposal process</h2>
				<p>
					when taking actions such as transacting with the community multi-sig
					or altering core governance processes, a proposal is required
					outlining the action to take. Below are the <em>current formal</em>{' '}
					steps of the unofficial mfers proposal pipeline.
				</p>
				<p>
					NOTE: the unofficial mfers governance mechanism is a constantly
					evolving machine, this is not the final phase. Please share any
					feedback points with the community! The is a bottom-up effort, mfer
					:handshake:
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
							proposal is submitted to the signers and considered on a basis it
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
							the official mfers Discord for a "soft pass", minimum 48 hours,
							majority vote amongst mfer holders.
						</p>
						<p>
							This "soft pass" notifies the community of a potential upcoming
							governance action and allows for feedback. The "soft pass"
							proposal may be amended and re-submitted if it does not pass in
							the vote.
						</p>
					</li>
					<li>
						<p>
							Should the soft pass reach majority vote upon completion of the
							voting timeframe, the proposal (in it's soft-passed form) can then
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
							treasury, or it's sub-treasuries, the signers securing those
							multi-sigs shall execute those transactions.
						</p>
					</li>
				</ol>

				<h2>snapshot</h2>
				<p>
					the unofficial mfers SnapShot space is where we vote on important
					community proposals! It's located here:
				</p>
				<code>https://snapshot.org/#/unofficialmfers.eth</code>
			</PageContainer>
		</Layout>
	)
}

export default GovernancePage
