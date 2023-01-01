import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'gatsby'

import {
	DISCORD_LINK,
	OPENSEA_LINK,
	LOOKSRARE_LINK,
	TWITTER_LINK,
} from '../constants'

import svgDiscord from '../assets/svg/discord-logo.svg'
import svgTwitter from '../assets/svg/twitter-logo.svg'
import svgOpensea from '../assets/svg/opensea-logo.svg'
import svgLooksrare from '../assets/svg/looksrare-logo.svg'

const MainNav = () => {
	return (
		<Navbar
			id="nav"
			expand="sm"
			className="nav-bar-background-color box-shadow"
		>
			<Container>
				<Navbar.Brand>
					<Nav.Link href="/" className="main-nav-text-color">
						<img src="/head-base-smokeless.png" alt="mfer head non-smoking" />
					</Nav.Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Link to="/" className="internal-nav-link">
							home
						</Link>
						<Link to="/governance" className="internal-nav-link">
							governance
						</Link>
						<Link to="/timeline" className="internal-nav-link">
							timeline
						</Link>
					</Nav>
					<Nav className="icon-nav-bar">
						<Nav.Link
							href={DISCORD_LINK}
							className="text-color spacing"
							target="_blank"
						>
							<img src={svgDiscord} alt="discord icon" />
						</Nav.Link>
						<Nav.Link
							href={TWITTER_LINK}
							className="text-color spacing"
							target="_blank"
						>
							<img src={svgTwitter} alt="twitter icon" />
						</Nav.Link>
						<Nav.Link
							href={OPENSEA_LINK}
							className="text-color spacing"
							target="_blank"
						>
							<img src={svgOpensea} alt="opensea icon" />
						</Nav.Link>
						<Nav.Link
							href={LOOKSRARE_LINK}
							className="text-color spacing"
							target="_blank"
						>
							<img src={svgLooksrare} alt="looksrare icon" />
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default MainNav
