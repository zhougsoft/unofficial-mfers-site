import React from 'react'

// top over page padding to offset the nav bar height
const PADDING_TOP = '10rem'

const PageContainer = ({ children }) => {
	return (
		<div className="container" style={{ paddingTop: PADDING_TOP }}>
			{children}
		</div>
	)
}

export default PageContainer
