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
