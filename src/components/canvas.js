import React, { useRef, useEffect } from 'react'

const Canvas = ({images}) => {
	const canvasRef = useRef(null)

	const draw = async (ctx, canvas) => {
		for(let i = 0; i < images.length; i++) {
			const img = images[i];
            const imgWidth = img.width
			const imgHeight = img.height
			const ratio = imgWidth / imgHeight

			if (i === 0) {
				canvas.width = parseInt(img.width)
				canvas.height = parseInt(img.height)
			} else {
				const baseImageHeight = images[0].height

				const newImageHeight = Math.floor(baseImageHeight * 0.2)
				const newImageWidth = Math.floor(newImageHeight * ratio)

				img.width = newImageWidth
				img.height = newImageHeight
			}
			
			ctx.drawImage(img.img, img.dx, img.dy, img.width, img.height)
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
