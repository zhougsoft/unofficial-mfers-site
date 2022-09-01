import React, {useState} from 'react'
import Layout from '../components/Layout'
import PageContainer from '../components/PageContainer'
import Canvas from "../components/canvas"
import FileUpload from '../components/file_upload'

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
                <Canvas images={images}></Canvas>
                <FileUpload handleSetImage={handleSetImage}></FileUpload>
            </PageContainer>
        </Layout>
    )
}

export default MemeCraftorPage