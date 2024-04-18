import React from 'react'
import {
	TREASURY_SIGNERS,
	TREASURY_SIGNER_ALUMNI,
	SNAPSHOT_LINK,
	TREASURY_LINK,
} from '../constants'
import Layout from '../components/Layout'
import PageContainer from '../components/PageContainer'
import ExtLink from '../components/ExtLink'

const TreasuryPage = () => {
	return (
		<Layout pageTitle="treasury | unofficial mfers">
			<PageContainer>
				<div className="treasury-wrapper">
					<h1 className="treasury-heading">community treasury</h1>
					<p>
						mfers area a constantly evolving and self-improving social machine -
						think{' '}
						<ExtLink href="https://en.wikipedia.org/wiki/Ant#Learning">
							ants!
						</ExtLink>
					</p>

					<p>
						mfering is a group effort, so please share any feedback points or
						ideas with the community. welcome to the movement, mfer.
					</p>
					<hr />
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
					<small>
						<p>
							<strong>Treasury Signer Alumni:</strong>
						</p>
						<ul>
							{TREASURY_SIGNER_ALUMNI.map(signer => (
								<li key={`signer-${signer.name}`}>
									<ExtLink href={signer.twitter}>{signer.name}</ExtLink>
								</li>
							))}
						</ul>
					</small>
					<br />
					<br />
					<h2 className="treasury-subheading">snapshot</h2>
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

export default TreasuryPage
