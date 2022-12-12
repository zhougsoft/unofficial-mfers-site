import React from "react"
import { Chrono } from "react-chrono";
import Layout from '../components/Layout'
import PageContainer from '../components/PageContainer'
import { Container, Row, Col } from 'react-bootstrap'
import svgDiscord from '../assets/svg/discord-logo.svg'
import svgTwitter from '../assets/svg/twitter-logo.svg'
import svgOpensea from '../assets/svg/opensea-logo.svg'

  const Timeline = () => {
    const items = [
			{
				title: '<Date>',
				cardTitle: '<card title>',
				url: '<url>',
				cardSubtitle:
					'<card subtitle>',
				cardDetailedText:
					'<card detailed text>',
				media: {
					type: 'IMAGE',
					source: {
						url: '<some url>',
					},
				},
			},
			{
				title: '<Date>',
				cardTitle: 'Dunkirk',
				url: 'https://www.history.com',
				cardSubtitle:
					'Men of the British Expeditionary Force (BEF) wade out to..',
				cardDetailedText:
					'Men of the British Expeditionary Force (BEF) wade out to..',
				media: {
					type: 'IMAGE',
					source: {
						url: 'https://someurl/image.jpg',
					},
				},
			},
		]

    return (
			<Layout pageTitle="governance | unofficial mfers">
				<PageContainer>
					<Container
						style={{ paddingLeft: '0px', paddingRight: '0px', paddin: '0px' }}
					>
						<Row>
							<Col>
								<div>
									made by:
									<a href="https://twitter.com/anonChickenLegs">
										{' '}
										anonChickenLegs
									</a>
									<img src={svgTwitter}></img>
								</div>
							</Col>
						</Row>
						<Row>
							<Col
								className="d-flex justify-content-center"
								style={{ height: '75vh' }}
							>
								<Chrono items={items} mode="VERTICAL_ALTERNATING" enableOutline>
									<div className="chrono-icons">
										<img src={svgDiscord} alt="image1" />
										<img src={svgTwitter} alt="image2" />
									</div>
								</Chrono>
							</Col>
						</Row>
					</Container>
				</PageContainer>
			</Layout>
		)
  }

  export default Timeline