import React, { useRef, useEffect } from 'react'

const Canvas = ({images}) => {
	const canvasRef = useRef(null)

	const draw = async (ctx, canvas) => {
		for(let i = 0; i < images.length; i++) {
			const img = new Image()
			img.src = images[i]
			await new Promise(resolve => {
				img.onload = () => {
					const imgWidth = img.width;
					const imgHeight = img.height;
					const ratio = imgWidth/imgHeight;
					if (i === 0) {
						canvas.width = parseInt(img.width)
						canvas.height = parseInt(img.height)
						ctx.drawImage(img, 0, 0)
					} else {
						const newImageHeight = Math.floor(canvas.height * .20)
						const newImageWidth = Math.floor(newImageHeight * ratio);
						ctx.drawImage(img, 0, 0, newImageWidth, newImageHeight )
					}

					resolve()
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
