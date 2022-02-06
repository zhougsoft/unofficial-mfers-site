import * as React from 'react'
import styles from '../styles/modules/Home.module.scss'
import Layout from '../components/Layout'
import ExtLink from '../components/ExtLink'
import sartoshiImg from '../assets/images/sartoshi.png'

const IndexPage = () => {
	return (
		<Layout pageTitle="unofficial mfers">
			<div className={styles.titleSection}>
				<h1>unofficial mfers!!!</h1>
				<p>
					<b>official</b> website of the <b>unofficial mfers</b>
				</p>
			</div>
			<div className={styles.linkGroup}>
				{/* <DiscordIcon className={styles.iconLink} />
				<EtherscanIcon className={styles.iconLink} />
				<TwitterIcon className={styles.iconLink} /> */}
			</div>
			<span className={styles.mferPic}>
				<img
					src={sartoshiImg}
					alt="sartoshi smiling and vibing with headphones in their chair, facing to the right"
				/>
			</span>
		</Layout>
	)
}

export default IndexPage
