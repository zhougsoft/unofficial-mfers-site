import React, { useState, useEffect } from 'react'
import { Row, Container, Card, Nav, Col } from 'react-bootstrap'
import { createImgObject, fetchMferHead } from '../utils/utils'

const CardNav = ({ handleSetImage, images }) => {
	const [mferHeads, setMferHeads] = useState([])

	useEffect(() => {
		const fetchHeads = async () => {
            const dataURL = await fetchMferHead()
            const dataUrls = [dataURL, dataURL];
            const imgObjs = [];
            for(let i = 0; i < dataUrls.length; i++) {
                const dataURL = dataUrls[i]
                const imgObj = await createImgObject(images,dataURL, true);
                imgObjs.push(imgObj);
            }
			setMferHeads(imgObjs)
		}

		fetchHeads()
	}, [])

	const renderMferHeads = () => {
        return mferHeads.map((imgObj, idx) => {
            console.log(imgObj)
            return (
                <Col key={`${imgObj.dataURL}${idx}`} onClick={() => handleSetImage(imgObj)}>
                    <Card>
                        <Card.Img src={imgObj.dataURL} />
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