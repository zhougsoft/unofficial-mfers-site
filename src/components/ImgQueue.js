import React from 'react'
import { Row, Container, Card, Nav, Col } from 'react-bootstrap'

const ImgQueue = ({ images, flipImage }) => {

	const renderImgs = () => {
		return images.map((imgObj, idx) => {
			return (
				<Col key={`${imgObj.dataURL}${idx}`}>
					<Card>
						<Card.Img src={imgObj.dataURL} />
						<Card.Body>
							<Card.Text>{idx}</Card.Text>
							<Card.Text onClick={(e) => flipImage(imgObj)}>flip image</Card.Text>
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
						{renderImgs()}
					</Row>
				</Card.Body>
			</Card>
		</Container>
	)
}

export default ImgQueue
