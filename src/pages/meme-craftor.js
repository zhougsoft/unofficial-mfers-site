import React from 'react'
import Layout from '../components/Layout'
import PageContainer from '../components/PageContainer'
import { createCanvas } from 'canvas'
const mycanvas = createCanvas(200, 200)

const MemeCraftorPage = () => {
    return (
        <Layout pageTitle="meme-craftor | unofficial mfers">
            <PageContainer>
                {/* {mycanvas} */}
                <div>something</div>
            </PageContainer>
        </Layout>
    )
}

export default MemeCraftorPage