import React from 'react'

// padding to offset the nav bar height & lack of footer
const PADDING_TOP = '5rem'
const PADDING_BOTTOM = '7.5rem'

const PageContainer = ({ children }) => {
	return (
		<div
			className="container"
			style={{ paddingTop: PADDING_TOP, paddingBottom: PADDING_BOTTOM }}
		>
			{children}
		</div>
	)
}

export default PageContainer
