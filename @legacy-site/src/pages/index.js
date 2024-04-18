import * as React from 'react'
import { Card } from 'react-bootstrap'
import Layout from '../components/Layout'

import {
	WHAT_ARE_MFERS_LINK,
	CAROUSEL_IMGS_TOP,
	CAROUSEL_IMGS_BOTTOM,
	MFERPEDIA,
} from '../constants'
import svgSun from '../assets/svg/sun.svg'
import svgExternalLink from '../assets/svg/external-link.svg'

const makeCarousel = files =>
	files.map(filename => (
		<div className="slide" key={`slide-${Math.random()}`}>
			<img src={`/carousel/${filename}`} alt="carousel display mfer" />
		</div>
	))

const IndexPage = () => {
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
					<br></br>
					<Card className="d-flex box-shadow">
						<Card.Body>
							<Card.Link
								className="article-link-card"
								href={MFERPEDIA}
								target="_blank"
								rel="noopener"
							>
								mferpedia <img src={svgExternalLink} alt="external link icon" />
							</Card.Link>
						</Card.Body>
					</Card>
				</section>
				{/* <footer className="slider-section">
					<div className="slider">
						<div className="slide-track-left">
							{makeCarousel(CAROUSEL_IMGS_TOP)}
						</div>
					</div>
					<div className="slider">
						<div className="slide-track-right">
							{makeCarousel(CAROUSEL_IMGS_BOTTOM)}
						</div>
					</div>
				</footer> */}
			</div>
		</Layout>
	)
}

export default IndexPage
