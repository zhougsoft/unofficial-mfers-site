import { Buffer } from 'buffer'
import gnSartoshi from '../assets/images/gn.jpeg'

export const fetchMferHead = async id => {
    try {
        const dataURLS = []
        if (id) {
            const response = await fetch(`https://heads.mfers.dev/${id}.png`)
            const arrayBuffer = await response.arrayBuffer()
            const buffer = Buffer.from(arrayBuffer)
            dataURLS.push(`data:png;base64,${buffer.toString('base64')}`)
        } else {
            for (let i = 1; i < 2; i++) {
                const response = await fetch(`https://heads.mfers.dev/${i}.png`)
                const arrayBuffer = await response.arrayBuffer()
                const buffer = Buffer.from(arrayBuffer)
                dataURLS.push(`data:png;base64,${buffer.toString('base64')}`)
                await new Promise((resolve) => {
                    setTimeout(() => {resolve()}, 1000)
                })
            }
        }
        return dataURLS
    } catch (e) {
        console.log(e);
        return [-1,"there was an error fetching head. please make sure input is a number"]
    }
}

export const convertToBufferBase64 = async buffer => {
    const bufferBase64 = buffer.split('data:png;base64,')[1]

    return bufferBase64;
}

export const createImgObject = async (images, imgSource, scaleDown) => {
    const imgObj = { x: 0, y: 0, width: 0, rotation:0, height: 0, img: '', mirrored:false }
    imgObj.dataURL = imgSource;
    const img = new Image();
    img.src = imgSource;
    await new Promise(resolve => {
        img.onload = () => {
            if(!scaleDown) {
                imgObj.width = img.width
                imgObj.height = img.height
            }

            imgObj.origWidth = img.width;
            imgObj.origHeight = img.height;
            resolve()
        }
    })
    imgObj.img = img
    return imgObj;
}