import React, { useState, useEffect } from 'react'
import { Row, Container, Card, Nav, Col } from 'react-bootstrap'
import { fetchMferHead } from '../utils/utils'

const CardNav = ({ heads, handleSetImage }) => {
	const [mferHeads, setMferHeads] = useState([])

	useEffect(() => {
		const fetchHeads = async () => {
			const dataURL = await fetchMferHead()
			setMferHeads([dataURL, dataURL, dataURL, dataURL])
		}

		fetchHeads()
	}, [])

	const renderMferHeads = () => {
		return mferHeads.map(dataURL => {
			return (
				<Col onClick={() => handleSetImage(dataURL)}>
					<Card>
						<Card.Img src={dataURL} />
						<Card.Body>
							<Card.Text>This mfer is the is cool as shit</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			)
		})
	}

	return (
		<Container>
			<Card>
				<Card.Header>
					<Nav variant="tabs" defaultActiveKey="#first">
						<Nav.Item>
							<Nav.Link href="#first">Mfer Heads</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href="#link">Add Ons</Nav.Link>
						</Nav.Item>
					</Nav>
				</Card.Header>
				<Card.Body>
					<Card.Title>Choose mfer heads</Card.Title>
					<Row xs={1} md={2} className="g-4">
						{renderMferHeads()}
					</Row>
				</Card.Body>
			</Card>
		</Container>
	)
}

export default CardNav;