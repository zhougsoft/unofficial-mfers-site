import React, {useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Layout from '../components/Layout'
import PageContainer from '../components/PageContainer'
import Canvas from "../components/canvas"
import FileUpload from '../components/file_upload'
import CardNav from '../components/CardNav'

const MemeCraftorPage = () => {
    const [images, setImage] = useState([])

    const handleSetImage = (arrBuffer) => {
        setImage((prevImages) => [
            ...prevImages,
            arrBuffer
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
                                <CardNav></CardNav>
                            </Col>
						</Row>
					</Container>
				</PageContainer>
			</Layout>
		)
}

export default MemeCraftorPage