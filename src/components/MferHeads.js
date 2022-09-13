import React, { useState, useEffect } from 'react'
import { Row, Container, Card, Nav, Col } from 'react-bootstrap'
import { createImgObject, fetchMferHead, endOfSartoshiDataUrl } from '../utils/utils'

const MferHeads = ({ handleSetImage, images }) => {
	const [mferHeads, setMferHeads] = useState([])
	const [fetchingHeads, setFetchingHeads] = useState(true)
    const [mferHeadNumber, setMferHeadNumber] = useState(0)
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

    const handleMferHeadNumber = (e) => {
        setMferHeadNumber(e.target.value)
    }

    const handleFetchMferHead = async () => {
        setFetchingHeads(true)
        setMferHeads([])
        const response = await fetchMferHead(mferHeadNumber)
        if (response[0] !== -1) {
            setMferHeads(response)
        }
        setFetchingHeads(false)
    }

	return (
		<Card.Body>
			<Card.Title>Choose mfer heads</Card.Title>
			<input onChange={e => handleMferHeadNumber(e)}></input>
			<button onClick={handleFetchMferHead}>fetch</button>
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
