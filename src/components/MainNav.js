import React from 'react'
import { Link } from 'gatsby'
import Container from '../components/Container'

const MainNav = () => {
	return (
		<nav className="main-nav">
			<Container>
				<div className="nav-content">
					<div className="nav-brand">
						<Link to="/">unofficial mfers</Link>
					</div>
					<ul>
						<li>
							<Link to="/">home</Link>
						</li>
						<li>
							<Link to="/governance">governance</Link>
						</li>
						<li>
							<Link to="/links">links</Link>
						</li>
						<li>
							<Link to="/links">meme craftor (coming soon)</Link>
						</li>
					</ul>
				</div>
			</Container>
		</nav>
	)
}

export default MainNav
