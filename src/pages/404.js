import React from 'react'
import Layout from '../components/Layout'
import PageContainer from '../components/PageContainer'

const NotFoundPage = () => {
	return (
		<Layout pageTitle="404 not found | unofficial mfers">
			<PageContainer>
				<h1>404</h1>
				<h3>page not found</h3>
			</PageContainer>
		</Layout>
	)
}

export default NotFoundPage
