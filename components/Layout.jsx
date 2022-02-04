import Head from 'next/head'
import styles from '../styles/Layout.module.css'

const Layout = ({ pageTitle, children }) => {
	return (
		<div className={styles.container}>
			<Head>
				<title>{pageTitle}</title>
				<meta name="description" content="unofficial mfers website" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.content}>{children}</main>

			<footer className={styles.footer}>
				<div>unofficial mfers</div>
			</footer>
		</div>
	)
}

export default Layout
