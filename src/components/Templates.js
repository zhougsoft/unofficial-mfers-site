import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import gnSartoshi from '../assets/images/gn.jpeg'
import { createImgObject } from '../utils/utils'

const Templates = ({ handleSetImage, images }) => {
	const makeImgObjectAndHandleSetImage = async dataURL => {
		const imgObj = await createImgObject(images, dataURL, true)
		handleSetImage(imgObj)
	}

	return (
		<Card.Body style={{ 'overflowY': 'auto', height: '35vw' }}>
			<Card.Title>Templates (click to place on canvas)</Card.Title>
			<Row xs={1} md={2} className="g-4">
				<Col
					key={`${gnSartoshi}`}
					onClick={() => makeImgObjectAndHandleSetImage(gnSartoshi)}
				>
					<Card>
						<Card.Img src={gnSartoshi} />
					</Card>
				</Col>
			</Row>
		</Card.Body>
	)
}

export default Templates
