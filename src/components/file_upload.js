import React from "react";
import {useForm} from "react-hook-form";
import { createImgObject } from "../utils/utils";

const FileUpload = ({handleSetImage, images}) => {
    const {register, handleSubmit } = useForm();

    
    const onSubmit = async data => {
        let imgObj;

        let resultDataUrl = await new Promise(resolve => {
            let fileReader = new FileReader()
            fileReader.onload = async e => {
                imgObj = await createImgObject(images,fileReader.result);
                resolve(fileReader.result)
            }
            fileReader.readAsDataURL(data.picture['0'])
        })
        handleSetImage(imgObj);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("picture")} type="file" name="picture"/>
                <button> Submit </button>
            </form>
        </>
    )
}

export default FileUpload;