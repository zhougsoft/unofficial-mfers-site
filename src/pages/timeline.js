import React from "react"
import { Chrono } from "react-chrono";
import Layout from '../components/Layout'
import PageContainer from '../components/PageContainer'
import { Container, Row, Col } from 'react-bootstrap'
import { TIMELINE_EVENTS } from "../constants";

import svgDiscord from '../assets/svg/discord-logo.svg'
import svgTwitter from '../assets/svg/twitter-logo.svg'
import svgOpensea from '../assets/svg/opensea-logo.svg'

  const Timeline = () => {

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
								<Chrono items={TIMELINE_EVENTS} mode="VERTICAL_ALTERNATING" enableOutline>
									<div className="chrono-icons">
										<img src={svgDiscord} alt="image1" />
										<img src={svgTwitter} alt="image2" />
										<img src={svgOpensea} alt="image2" />
										<img src={svgDiscord} alt="image1" />
										<img src={svgOpensea} alt="image2" />
										<img src={svgTwitter} alt="image2" />
										<img src={svgOpensea} alt="image2" />
										<img src={svgTwitter} alt="image2" />
										<img src={svgOpensea} alt="image2" />
										<img src={svgTwitter} alt="image2" />
										<img src={svgOpensea} alt="image2" />
										<img src={svgOpensea} alt="image2" />
										<img src={svgOpensea} alt="image2" />
										<img src={svgOpensea} alt="image2" />
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