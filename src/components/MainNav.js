import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/main.scss'
import {
	DISCORD_LINK,
	OPENSEA_LINK,
	LOOKSRARE_LINK,
	TWITTER_LINK,
} from '../constants'
const MainNav = () => {
	return (
		<Navbar id="nav" expand="sm" className="nav-bar-background-color">
			<Container>
				<Navbar.Brand>
					<Nav.Link href="/" className="main-nav-text-color">
						<img src="/head-base-smokeless.png" width="45" height="45" />
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
						<Link to="/links" className="internal-nav-link">
							links
						</Link>
					</Nav>
					<Nav className="icon-nav-bar" id="mx-3">
						<Nav.Link
							href={DISCORD_LINK}
							className="text-color spacing"
							target="_blank"
						>
							<img src="/Discord.svg" />
						</Nav.Link>
						<Nav.Link
							href={TWITTER_LINK}
							className="text-color spacing"
							target="_blank"
						>
							<img src="/Twitter.svg" />
						</Nav.Link>
						<Nav.Link
							href={OPENSEA_LINK}
							className="text-color spacing"
							target="_blank"
						>
							<img src="/Opensea.svg" />
						</Nav.Link>
						<Nav.Link
							href={LOOKSRARE_LINK}
							className="text-color spacing"
							target="_blank"
						>
							<img src="/Looksrare.svg" />
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default MainNav
