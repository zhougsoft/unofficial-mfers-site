import * as React from 'react'
import { Card } from 'react-bootstrap'
import Layout from '../components/Layout'

import {
	WHAT_ARE_MFERS_LINK,
	CAROUSEL_IMGS_TOP,
	CAROUSEL_IMGS_BOTTOM,
} from '../constants'
import svgSun from '../assets/svg/sun.svg'
import svgExternalLink from '../assets/svg/external-link.svg'

const IndexPage = () => {
	const makeCarousel = urls =>
		urls.map(url => (
			<div className="slide">
				<img src={url} alt="carousel display mfer" />
			</div>
		))

	return (
		<Layout pageTitle="unofficial mfers">
			<div className="home-wrapper">
				<section className="home-section">
					<div className="home-info">
						<h1>
							gm mfers{' '}
							<img className="rotate" src={svgSun} alt="yellow shining sun" />
						</h1>
						<p>
							you can state a roadmap that says where you will go, but you can
							also plant seeds and see where they grow
						</p>
					</div>
					<Card className="d-flex box-shadow">
						<Card.Body>
							<Card.Link
								className="article-link-card"
								href={WHAT_ARE_MFERS_LINK}
								target="_blank"
								rel="noopener"
							>
								what are mfers?{' '}
								<img src={svgExternalLink} alt="external link icon" />
							</Card.Link>
						</Card.Body>
					</Card>
				</section>
				<footer className="slider-section">
					<div class="slider">
						<div class="slide-track-left">
							{makeCarousel(CAROUSEL_IMGS_TOP)}
						</div>
					</div>
					<div class="slider">
						<div class="slide-track-right">
							{makeCarousel(CAROUSEL_IMGS_BOTTOM)}
						</div>
					</div>
				</footer>
			</div>
		</Layout>
	)
}

export default IndexPage
