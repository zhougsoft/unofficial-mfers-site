import React, { useState, useEffect } from 'react'
import { Row, Container, Card, Nav, Col } from 'react-bootstrap'
import { createImgObject, fetchMferHead } from '../utils/utils'

const MferHeads = ({ handleSetImage, images }) => {
	const [mferHeads, setMferHeads] = useState([])
	const [fetchingHeads, setFetchingHeads] = useState(true)
	useEffect(() => {
		const fetchHeads = async () => {
			const dataURLs = await fetchMferHead()
			setFetchingHeads(false)
			setMferHeads(dataURLs)
		}

		fetchHeads()
	}, [])

	const makeImgObjectAndHandleSetImage = async dataURL => {
		const imgObj = await createImgObject(images, dataURL, true)
		handleSetImage(imgObj)
	}

	const renderMferHeads = () => {
		return mferHeads.map((dataURL, idx) => {
			return (
				<Col
					key={`${dataURL}${idx}`}
					onClick={() => makeImgObjectAndHandleSetImage(dataURL)}
				>
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
		<Card.Body>
			<Card.Title>Choose mfer heads</Card.Title>
			<Row xs={1} md={2} className="g-4">
				{fetchingHeads ? (
					<img src="https://c.tenor.com/FBeNVFjn-EkAAAAC/ben-redblock-loading.gif" />
				) : (
					''
				)}
				{renderMferHeads()}
			</Row>
		</Card.Body>
	)
}

export default MferHeads
