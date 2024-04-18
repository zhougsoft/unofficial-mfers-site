import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import PageContainer from '../components/PageContainer'

// TODO: port all JSX inline styling on this page to the src/styles/main.scss file, along with some tighter typography layout & sizing
const HEADING_SIZE = '5em'

const LinksPage = () => {
	return (
		<Layout pageTitle="links | unofficial mfers">
			<PageContainer>
				<h1
					style={{
						fontSize: HEADING_SIZE,
						fontWeight: 'bold',
						marginBottom: '2rem',
						letterSpacing: '-0.03em',
					}}
				>
					404
				</h1>
				<h3>page not found, mfer</h3>
				<Link to="/">back home</Link>
			</PageContainer>
		</Layout>
	)
}

export default LinksPage
