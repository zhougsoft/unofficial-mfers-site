import Image from 'next/image'

import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

const linkBtn = { backgroundColor: 'red' }

const WIP = () => (
	<>
		<div>
			<h1 className={styles.title}>unofficial mfers</h1>
			<p className={styles.description}>
				welcome to the official website of the unofficial mfers
			</p>
		</div>

		<br />
		<br />
		<br />

		<div
			style={{
				width: '500px',
				display: 'flex',
				justifyContent: 'space-around',
			}}
		>
			<div style={linkBtn}>discord</div>
			<div style={linkBtn}>twitter</div>
			<div style={linkBtn}>mfers contract</div>
		</div>
	</>
)

const Home = () => {
	return (
		<Layout pageTitle="unofficial mfers">
			<h1 className={styles.title}>coming soon</h1>
			<p className={styles.description}>under construction, mfers...</p>
		</Layout>
	)
}

export default Home
