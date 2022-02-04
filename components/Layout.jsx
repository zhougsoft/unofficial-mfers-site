import Head from 'next/head'
import styles from '../styles/modules/Layout.module.scss'

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
				<small>sup mfers</small>
			</footer>
		</div>
	)
}

export default Layout
