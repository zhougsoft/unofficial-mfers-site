import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/main.scss'
import {
	DISCORD_LINK,
	OPENSEA_LINK,
	LOOKSRARE_LINK,
	ETHERSCAN_LINK,
	TWITTER_LINK,
} from '../constants'
const MainNav = () => {
	return (
		<>
			<Navbar expand="sm" className="nav-bar-background-color new-nav">
				<Container>
					<Navbar.Brand>
						<img src="/head-base-smokeless.png" width="45" height="45" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link
								href="https://twitter.com/chickenswhocode"
								target="_blank"
								className="main-nav-text-color"
							>
								mfer hub
							</Nav.Link>
							<Nav.Link
								href="https://discord.gg/sbBvgAQz8r"
								target="_blank"
								className="main-nav-text-color"
							>
								mfer governance
							</Nav.Link>
						</Nav>
						<Nav id="basic-navbar-nav">
							<Nav.Link href="#connect-wallet" className="text-color">
								<img src="/discord_icon.png" />
							</Nav.Link>
							<Nav.Link href="#connect-wallet" className="text-color">
								<img src="/twitter_icon.png" />
							</Nav.Link>
							<Nav.Link href="#connect-wallet" className="text-color">
								<img src="/twitter_icon.png" />
							</Nav.Link>
							<Nav.Link href="#connect-wallet" className="text-color">
								<img src="/twitter_icon.png" />
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	)
}

export default MainNav
