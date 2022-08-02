import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'gatsby'
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
						<Nav.Link href="/" className="main-nav-text-color">
							<img src="/head-base-smokeless.png" width="45" height="45" />
						</Nav.Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="/" className="main-nav-text-color">
								home
							</Nav.Link>
							<Nav.Link href="/governance" className="main-nav-text-color">
								mfer governance
							</Nav.Link>
							<Nav.Link href="/links" className="main-nav-text-color">
								links
							</Nav.Link>
						</Nav>
						<Nav className="icon-nav-bar" id="mx-3">
							<Nav.Link
								href="https://discord.gg/9vWnDfUnN6"
								className="text-color spacing"
								target="_blank"
							>
								<img src="/Discord.svg" />
							</Nav.Link>
							<Nav.Link
								href="https://twitter.com/unofficialmfers"
								className="text-color spacing"
								target="_blank"
							>
								<img src="/Twitter.svg" />
							</Nav.Link>
							<Nav.Link
								href="https://opensea.io/collection/mfers"
								className="text-color spacing"
								target="_blank"
							>
								<img src="/Opensea.svg" />
							</Nav.Link>
							<Nav.Link
								href="https://looksrare.org/collections/0x79FCDEF22feeD20eDDacbB2587640e45491b757f"
								className="text-color spacing"
								target="_blank"
							>
								<img src="/Looksrare.svg" />
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	)
}

export default MainNav
