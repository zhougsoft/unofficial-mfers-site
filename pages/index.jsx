import Image from 'next/image'
import styles from '../styles/modules/Home.module.scss'
import Layout from '../components/Layout'
import ExtLink from '../components/ExtLink'
import { DiscordIcon, EtherscanIcon, TwitterIcon } from '../components/Icons'
import mferPic from '../public/images/mfer-full.png'

const DISCORD_LINK = 'https://discord.com/invite/tjp9YrwZ'
const ETHERSCAN_LINK = ''
const TWITTER_LINK = 'https://twitter.com/unofficialmfers'

const Home = () => {
	return (
		<Layout pageTitle="unofficial mfers">
			<div className={styles.titleSection}>
				<h1>unofficial mfers</h1>
				<p>
					<b>official</b> website of the <b>unofficial mfers</b>
				</p>
			</div>
			<div className={styles.linkGroup}>
				<DiscordIcon className={styles.iconLink} />
				<EtherscanIcon className={styles.iconLink} />
				<TwitterIcon className={styles.iconLink} />
			</div>
			<span className={styles.mferPic}>
				<Image
					src={mferPic}
					alt="sartoshi smiling and vibing with headphones in their chair, facing to the right"
					placeholder="blur"
				/>
			</span>
		</Layout>
	)
}

export default Home
