import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Layout from '../components/Layout'
import PageContainer from '../components/PageContainer'
import Canvas from '../components/Canvas'
import FileUpload from '../components/file_upload'
import CardNav from '../components/CardNav'
import ImgQueue from '../components/ImgQueue'

const MemeCraftorPage = () => {
	const [images, setImage] = useState([]);
	const [flip, setFlipImage] = useState(true);

	const handleSetImage = imgObj => {
		setImage(prevImageObjs => [...prevImageObjs, imgObj])
	}

	const flipImage = imgObj => {
		imgObj.mirrored = !imgObj.mirrored
		setFlipImage(!flip)
	}

	const handleDeleteImg = idx => {
		images.splice(idx, 1)

		setImage(images.map((img,i) => img))
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
						<Col>
							<CardNav
								images={images}
								handleSetImage={handleSetImage}
								handleDeleteImg={handleDeleteImg}
								flipImage={flipImage}
							></CardNav>
						</Col>
					</Row>
				</Container>
			</PageContainer>
		</Layout>
	)
}

export default MemeCraftorPage
