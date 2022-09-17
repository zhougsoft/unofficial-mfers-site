import React, { useState, useEffect } from 'react'
import { Row, Card, Nav, Col } from 'react-bootstrap'
import { createImgObject, fetchMferHead } from '../utils/utils'
import { useForm } from 'react-hook-form'

const MferHeads = ({ handleSetImage, images }) => {
	const [mferHeads, setMferHeads] = useState([])
	const [fetchingHeads, setFetchingHeads] = useState(true)
	const [mferHeadNumber, setMferHeadNumber] = useState(0)
	const [mferToFetch, setMferToFetch] = useState(0)
	const { handleSubmit } = useForm()

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

	const handleMferHeadNumber = e => {
		setMferHeadNumber(e.target.value)
	}

	const handleFetchMferHead = async () => {
		setFetchingHeads(true)
		setMferHeads([])
		const response = await fetchMferHead(mferHeadNumber, mferToFetch)
		if (response[0] !== -1) {
			setMferHeads(response)
		}
		setFetchingHeads(false)
	}

	const handleMferFetchChange = mferToFetch => {
		setMferToFetch(mferToFetch)
	}

	return (
		<Card.Body style={{ 'overflow-y': 'auto', height: '35vw' }}>
			<Card.Title>Choose mfer(click to place on canvas)</Card.Title>
			<form onSubmit={handleSubmit(handleFetchMferHead)}>
				<input onChange={e => handleMferHeadNumber(e)}></input>
				<input
					type="radio"
					value="0"
					name="gender"
					defaultChecked={mferToFetch === 0}
					onClick={() => {
						handleMferFetchChange(0)
					}}
				/>{' '}
				Head
				<input
					type="radio"
					value="1"
					name="gender"
					defaultChecked={mferToFetch === 1}
					onClick={() => {
						handleMferFetchChange(1)
					}}
				/>{' '}
				Body
				<input
					type="radio"
					value="2"
					name="gender"
					defaultChecked={mferToFetch === 2}
					onClick={() => {
						handleMferFetchChange(2)
					}}
				/>{' '}
				transparent png
				<button>fetch</button>
			</form>
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
