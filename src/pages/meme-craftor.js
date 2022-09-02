import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Layout from '../components/Layout'
import PageContainer from '../components/PageContainer'
import Canvas from '../components/Canvas'
import FileUpload from '../components/file_upload'
import CardNav from '../components/CardNav'

const MemeCraftorPage = () => {
	const [images, setImage] = useState([])

	const handleSetImage = imgObj => {
		setImage(prevImageObjs => [...prevImageObjs, imgObj])
	}

	return (
		<Layout pageTitle="meme-craftor | unofficial mfers">
			<PageContainer>
				<Container>
					<Row>
						<Col>
							<Canvas images={images}></Canvas>
							<FileUpload
								images={images}
								handleSetImage={handleSetImage}
							></FileUpload>
						</Col>
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
