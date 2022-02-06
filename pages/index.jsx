import Image from 'next/image'
import styles from '../styles/modules/Home.module.scss'
import Layout from '../components/Layout'
import ExtLink from '../components/ExtLink'

import iconDiscord from '../public/images/svg/discord-black.svg'
import iconTwitter from '../public/images/svg/twitter-black.svg'
import mferPic from '../public/images/mfer-full.png'

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
				<ExtLink href="https://discord.com/invite/tjp9YrwZ">
					<Image src={iconDiscord} width="50px" height="50px" />
				</ExtLink>
				<ExtLink href="https://twitter.com/unofficialmfers">
					<Image src={iconTwitter} width="50px" height="50px" />
				</ExtLink>
			</div>
			<span className={styles.mferPic}>
				<Image src={mferPic} placeholder="blur" />
			</span>
		</Layout>
	)
}

export default Home
