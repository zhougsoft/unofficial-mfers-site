import * as React from 'react'
import Layout from '../components/Layout'
import sartoshiImg from '../assets/images/sartoshi.png'

const IndexPage = () => {
	return (
		<Layout pageTitle="unofficial mfers">
			<div className="titleSection">
				<h1>unofficial mfers!!!</h1>
				<p>
					<b>official</b> website of the <b>unofficial mfers</b>
				</p>
			</div>
			<div className="linkGroup">
				{/* <DiscordIcon className={styles.iconLink} />
				<EtherscanIcon className={styles.iconLink} />
				<TwitterIcon className={styles.iconLink} /> */}
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
