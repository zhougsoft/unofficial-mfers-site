import * as React from 'react'
import { Helmet } from 'react-helmet'

import '../styles/main.scss'

const Layout = ({ pageTitle, children }) => {
	return (
		<div className="container">
			<Helmet>
				<title>{pageTitle}</title>
				<meta name="description" content="unofficial mfers website" />
			</Helmet>

			<main className="content">{children}</main>

			{/* if we ever need a footer... */}

			{/* <footer className='footer'>
				<small>sup mfers</small>
			</footer> */}
		</div>
	)
}

export default Layout
