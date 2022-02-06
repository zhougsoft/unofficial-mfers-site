import { Html, Head, Main, NextScript } from 'next/document'

const GOOGLE_FONTS =
	'https://fonts.googleapis.com/css?family=Lobster|Comic+Neue&display=swap'

const Document = () => {
	return (
		<Html>
			<Head>
				<link href={GOOGLE_FONTS} rel="stylesheet" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}

export default Document
