import * as React from 'react'
import { Helmet } from 'react-helmet'

import '../styles/main.scss'

const Layout = ({ pageTitle, children }) => {
	return (
		<div className="container">
			<Helmet>
				<meta name="description" content="unofficial mfers website" />
				<meta name="icon" href="/favicon.ico" />
				<title>{pageTitle}</title>
			</Helmet>
			<img
				id="easter-egg-mfer"
				src="https://lh3.googleusercontent.com/yPnxS4yRsN7krSuKAqy0HtdyHSxA5VdKPUuLAKQQidoeEulYSGA1wq0rYfDLgM96PogiF0AjhbIAi27_NNNTm9eN2fjMcESxwbg0Zw=w600"
			/>
			<main className="content">{children}</main>

			{/* if we ever need a footer... */}

			{/* <footer className='footer'>
				<small>sup mfers</small>
			</footer> */}
		</div>
	)
}

export default Layout
