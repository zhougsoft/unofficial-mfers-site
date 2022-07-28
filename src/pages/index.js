import * as React from 'react'
import Layout from '../components/Layout'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
const IndexPage = () => {

	function shuffleArray(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1))
			;[array[i], array[j]] = [array[j], array[i]]
		}
	}

	function makeTopCarousel() {
		const topMfers = [
			'https://img.seadn.io/files/05c6f01d0b7a2f21562b49c7c5a15864.png?fit=max&w=600',
			'https://img.seadn.io/files/0cb0d3b66671ec7746598355e37c3c94.png?fit=max&w=600',
			'https://img.seadn.io/files/4adf4c0cbae05e1eb3fdf794de25e44f.png?fit=max&w=600',
			'https://img.seadn.io/files/45d6cc732e1599e893b977c7930528c0.png?fit=max&w=600',
			'https://img.seadn.io/files/24fb453157fcb891479ea5d6e4b14cdf.png?fit=max&w=600',
			'https://img.seadn.io/files/4e37dab00a44074834100dd701598779.png?fit=max&w=600',
			'https://img.seadn.io/files/e0b61d73fb2dd99b5f9e5aa640831363.png?fit=max&w=600',
			'https://img.seadn.io/files/d1955ffc9364f41bcdb49528837a9304.png?fit=max&w=600',
			'https://img.seadn.io/files/ce0b6a4ae0cde5f5b107bcf6b79ad56b.png?fit=max&w=600',
			'https://img.seadn.io/files/58a2b99f9946b8a157f61247da0ed924.png?fit=max&w=600',
			'https://img.seadn.io/files/c296bcf3450d22437fc20a414203a937.png?fit=max&w=600',
			'https://img.seadn.io/files/65f7b0803d9fe83d5797ae68184a01bd.png?fit=max&w=600',
			'https://img.seadn.io/files/4cf3a48e647edc37155adf5c92f45426.png?fit=max&w=600',
			'https://img.seadn.io/files/42e5020d79d77e82709642bb2ab17b4f.png?fit=max&w=600',
			'https://img.seadn.io/files/05c6f01d0b7a2f21562b49c7c5a15864.png?fit=max&w=600',
			'https://img.seadn.io/files/0cb0d3b66671ec7746598355e37c3c94.png?fit=max&w=600',
			'https://img.seadn.io/files/4adf4c0cbae05e1eb3fdf794de25e44f.png?fit=max&w=600',
			'https://img.seadn.io/files/45d6cc732e1599e893b977c7930528c0.png?fit=max&w=600',
			'https://img.seadn.io/files/24fb453157fcb891479ea5d6e4b14cdf.png?fit=max&w=600',
			'https://img.seadn.io/files/4e37dab00a44074834100dd701598779.png?fit=max&w=600',
			'https://img.seadn.io/files/e0b61d73fb2dd99b5f9e5aa640831363.png?fit=max&w=600',
			'https://img.seadn.io/files/d1955ffc9364f41bcdb49528837a9304.png?fit=max&w=600',
			'https://img.seadn.io/files/ce0b6a4ae0cde5f5b107bcf6b79ad56b.png?fit=max&w=600',
			'https://img.seadn.io/files/58a2b99f9946b8a157f61247da0ed924.png?fit=max&w=600',
			'https://img.seadn.io/files/c296bcf3450d22437fc20a414203a937.png?fit=max&w=600',
			'https://img.seadn.io/files/65f7b0803d9fe83d5797ae68184a01bd.png?fit=max&w=600',
			'https://img.seadn.io/files/4cf3a48e647edc37155adf5c92f45426.png?fit=max&w=600',
			'https://img.seadn.io/files/42e5020d79d77e82709642bb2ab17b4f.png?fit=max&w=600',
		]
		return topMfers.map((url) => {
			return (
				<div class="slide">
					<img
						src={url}
						alt=""
					/>
				</div>
			)
		})
	}

	function makeBottomCarousel() {
		const bottomMfers = [
			'https://img.seadn.io/files/dca0a271d0d4412e5d64df46c44ac466.png?fit=max&w=600',
			'https://img.seadn.io/files/520df3d67bcb1822f73406e00b1f97ce.png?fit=max&w=600',
			'https://img.seadn.io/files/7c361e111c1612e03035d4ff2934d11d.png?fit=max&w=600',
			'https://img.seadn.io/files/8f9f63f70ebbccae70fd670fdf8dfc40.png?fit=max&w=600',
			'https://img.seadn.io/files/ca623467039d4ad8aa37ceffaf541d91.png?fit=max&w=600',
			'https://img.seadn.io/files/24a8ab55ea10d1547d4e0da9fb1c8611.png?fit=max&w=600',
			'https://img.seadn.io/files/210bcba4fd15310078665420fb208927.png?fit=max&w=600',
			'https://img.seadn.io/files/a8682285ae9e5764417f92586a3c0b09.png?fit=max&w=600',
			'https://img.seadn.io/files/9010bb959603bb868728b65ef82294f7.png?fit=max&w=600',
			'https://img.seadn.io/files/cbcc8b2a7f77343fd9cf1f91567dbdd7.png?fit=max&w=600',
			'https://img.seadn.io/files/b6200a0336c2f844d47372705c4c6ebb.png?fit=max&w=600',
			"https://img.seadn.io/files/24f5c025e1d67b70486c89a832d01933.png?fit=max&w=600",
			"https://img.seadn.io/files/60da81ce90b3cf336a6d5ca6983951be.png?fit=max&w=600",
			"https://img.seadn.io/files/3e074c88546877014f335fcd3720f5eb.png?fit=max&w=600",
			'https://img.seadn.io/files/dca0a271d0d4412e5d64df46c44ac466.png?fit=max&w=600',
			'https://img.seadn.io/files/520df3d67bcb1822f73406e00b1f97ce.png?fit=max&w=600',
			'https://img.seadn.io/files/7c361e111c1612e03035d4ff2934d11d.png?fit=max&w=600',
			'https://img.seadn.io/files/8f9f63f70ebbccae70fd670fdf8dfc40.png?fit=max&w=600',
			'https://img.seadn.io/files/ca623467039d4ad8aa37ceffaf541d91.png?fit=max&w=600',
			'https://img.seadn.io/files/24a8ab55ea10d1547d4e0da9fb1c8611.png?fit=max&w=600',
			'https://img.seadn.io/files/210bcba4fd15310078665420fb208927.png?fit=max&w=600',
			'https://img.seadn.io/files/a8682285ae9e5764417f92586a3c0b09.png?fit=max&w=600',
			'https://img.seadn.io/files/9010bb959603bb868728b65ef82294f7.png?fit=max&w=600',
			'https://img.seadn.io/files/cbcc8b2a7f77343fd9cf1f91567dbdd7.png?fit=max&w=600',
			'https://img.seadn.io/files/b6200a0336c2f844d47372705c4c6ebb.png?fit=max&w=600',
			"https://img.seadn.io/files/24f5c025e1d67b70486c89a832d01933.png?fit=max&w=600",
			"https://img.seadn.io/files/60da81ce90b3cf336a6d5ca6983951be.png?fit=max&w=600",
			"https://img.seadn.io/files/3e074c88546877014f335fcd3720f5eb.png?fit=max&w=600"
		]	
		return bottomMfers.map((url) => {
			return (
				<div class="slide">
					<img
						src={url}
						alt=""
					/>
				</div>
			)
		})
	}

	return (
		<Layout pageTitle="unofficial mfers">
			<section className="home-content">
				<div className="home-title">
					<h1>
						gm mfers <img src="/Sun.svg" />
					</h1>
					<p>
						you can state a roadmap that says where you will go, but you can
						also plant seeds and see where they grow
					</p>
				</div>
				<Card className="d-flex what-are-mfers">
					{' '}
					<Card.Body>
						<Card.Link
							className="card-props"
							href="https://mirror.xyz/sartoshi.eth/QukjtL1076-1SEoNJuqyc-x4Ut2v8_TocKkszo-S_nU"
							target="_blank"
						>
							What are mfers? <img src="/external-link.svg" width="16" />
						</Card.Link>
					</Card.Body>
				</Card>
			</section>
			<section className="slider-section">
				<div class="slider">
					<div class="slide-track">
						{makeTopCarousel()}
					</div>
				</div>
				<div class="slider">
					<div class="slide-track-right">
						{makeBottomCarousel()}
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default IndexPage
