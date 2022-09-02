import React, {useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Layout from '../components/Layout'
import PageContainer from '../components/PageContainer'
import Canvas from "../components/Canvas"
import FileUpload from '../components/file_upload'
import CardNav from '../components/CardNav'

const MemeCraftorPage = () => {
    const [images, setImage] = useState([])

    const handleSetImage = (dataURL) => {
        setImage((prevImages) => [
            ...prevImages,
            dataURL
        ])
    }

    return (
			<Layout pageTitle="meme-craftor | unofficial mfers">
				<PageContainer>
					<Container>
						<Row>
							<Col>
								<Canvas images={images}></Canvas>
								<FileUpload handleSetImage={handleSetImage}></FileUpload>
							</Col>
                            <Col>
                                <CardNav heads={[]} handleSetImage={handleSetImage}></CardNav>
                            </Col>
						</Row>
					</Container>
				</PageContainer>
			</Layout>
		)
}

export default MemeCraftorPage