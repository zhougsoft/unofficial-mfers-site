import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Layout from '../components/Layout'
import PageContainer from '../components/PageContainer'
import Canvas from '../components/Canvas'
import FileUpload from '../components/file_upload'
import CardNav from '../components/CardNav'
import ImgQueue from '../components/ImgQueue'

const MemeCraftorPage = () => {
	const [images, setImage] = useState([])
	const [flip, setFlipImage] = useState(true)

	const handleSetImage = imgObj => {
		setImage(prevImageObjs => [...prevImageObjs, imgObj])
	}

	const flipImage = imgObj => {
		debugger
		imgObj.mirrored = !imgObj.mirrored
		setFlipImage(!flip)
	}

	return (
		<Layout pageTitle="meme-craftor | unofficial mfers">
			<PageContainer>
				<Container>
					<Row>
						<Col className="">
							<Canvas images={images}></Canvas>
							<FileUpload
								images={images}
								handleSetImage={handleSetImage}
							></FileUpload>
						</Col>
					</Row>
					<Row>
						<Col>
							<ImgQueue images={images} flipImage={flipImage}></ImgQueue>
						</Col>
					</Row>
					<Row>
						<Col>
							<CardNav
								images={images}
								heads={[]}
								handleSetImage={handleSetImage}
							></CardNav>
						</Col>
					</Row>
				</Container>
			</PageContainer>
		</Layout>
	)
}

export default MemeCraftorPage
