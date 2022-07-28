import * as React from 'react'
import { Helmet } from 'react-helmet'
import MainNav from './MainNav'
import '../styles/main.scss'


const Layout = ({ pageTitle, children }) => {
	return (
		<div className="layout-wrapper">
			<Helmet>
				<meta name="description" content="unofficial mfers website" />
				<meta name="icon" href="/favicon.ico" />
				<title>{pageTitle}</title>
			</Helmet>
			<MainNav />
			<main >{children}</main>
		</div>
	)
}

export default Layout
