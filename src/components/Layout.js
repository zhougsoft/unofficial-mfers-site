import * as React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import '../styles/main.scss'

const MainNav = () => {
	return (
		<nav className="main-nav">
			<h1>unofficial mfers</h1>
			<ul>
				<Link to="/">
					<li>home</li>
				</Link>
				<Link to="/about">
					<li>about</li>
				</Link>
				<Link to="/governance">
					<li>governance</li>
				</Link>
				<Link to="/links">
					<li>links</li>
				</Link>
			</ul>
		</nav>
	)
}

const Layout = ({ pageTitle, children }) => {
	return (
		<>
			<Helmet>
				<meta name="description" content="unofficial mfers website" />
				<meta name="icon" href="/favicon.ico" />
				<title>{pageTitle}</title>
			</Helmet>
			<MainNav />
			<div className="container">
				<main className="content">{children}</main>
			</div>
		</>
	)
}

export default Layout
