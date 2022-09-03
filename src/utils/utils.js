import { Buffer } from 'buffer'

Buffer.from('anything', 'base64')
window.Buffer = window.Buffer || require('buffer').Buffer

export const fetchMferHead = async id => {
	const response = await fetch(`https://heads.mfers.dev/1.png`)
	const arrayBuffer = await response.arrayBuffer()
	const buffer = Buffer.from(arrayBuffer)
	return `data:png;base64,${buffer.toString('base64')}`
}

export const convertToBufferBase64 = async buffer => {
    const bufferBase64 = buffer.split('data:png;base64,')[1]

    return bufferBase64;
}

export const createImgObject = async (images, imgSource) => {
    const imgObj = { dx: 0, dy: 0, width: 0, height: 0, img: '' }
    imgObj.dataURL = imgSource;
    const img = new Image();
    img.src = imgSource;
    await new Promise(resolve => {
        img.onload = () => {
            imgObj.width = img.width
            imgObj.height = img.height
            resolve()
        }
    })
    imgObj.img = img
    return imgObj;
}
