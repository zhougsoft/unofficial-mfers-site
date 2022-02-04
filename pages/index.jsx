import Image from 'next/image'
import styles from '../styles/modules/Home.module.scss'
import Layout from '../components/Layout'
import ExtLink from '../components/ExtLink'

const Home = () => {
	return (
		<Layout pageTitle="unofficial mfers">
			<div className={styles.titleSection}>
				<h1>unofficial mfers</h1>
				<p>
					the <b>official</b> website of the <b>unofficial mfers</b>
				</p>
			</div>
			<div className={styles.linkGroup}>
				<ExtLink href="#">discord</ExtLink>
				<ExtLink href="#">twitter</ExtLink>
				<ExtLink href="#">mfers contract</ExtLink>
			</div>
		</Layout>
	)
}

export default Home
