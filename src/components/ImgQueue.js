import React from 'react'
import { Row, Container, Card, Nav, Col } from 'react-bootstrap'

const ImgQueue = ({ images, flipImage, handleDeleteImg }) => {
	const renderImgs = () => {
		return images.map((imgObj, idx) => {
			return (
				<Col key={`${imgObj.dataURL}${idx}`}>
					<Card>
						<Card.Img src={imgObj.dataURL} />
						<Card.Body>
							<Card.Text>{idx}</Card.Text>
							<Card.Text onClick={e => flipImage(imgObj)}>flip image</Card.Text>
							<Card.Text onClick={e => handleDeleteImg(idx)}>
								delete image
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			)
		})
	}

	return (
		<Card.Body style={{ 'overflow-y': 'auto', height: '35vw' }}>
			<Card.Title>Images</Card.Title>
			<Row xs={1} md={2} className="g-4">
				{renderImgs()}
			</Row>
		</Card.Body>
	)
}

export default ImgQueue
