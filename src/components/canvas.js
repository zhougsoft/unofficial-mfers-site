import React, { useRef, useEffect } from 'react'

const Canvas = ({images}) => {
	const canvasRef = useRef(null)

	const draw = async (ctx, canvas) => {
		for(let i = 0; i < images.length; i++) {
			const img = new Image()
			img.src = images[images.length -1]

			await new Promise(resolve => {
				img.onload = () => {
					canvas.width = parseInt(img.width)
					canvas.height = parseInt(img.height)
					ctx.drawImage(img, 0, 0)
				}
			})
		}
	}
	useEffect(() => {
		const canvas = canvasRef.current
		const context = canvas.getContext('2d')
		//Our first draw
		draw(context, canvas)
	}, [])

	if (images.length !== 0) {
		const canvas = canvasRef.current
		const context = canvas.getContext('2d')
		draw(context, canvas)
	}
	return <canvas ref={canvasRef} id="canvas"/>
}

export default Canvas
