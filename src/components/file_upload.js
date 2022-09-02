import React from "react";
import {useForm} from "react-hook-form";

const FileUpload = ({handleSetImage}) => {
    const {register, handleSubmit } = useForm();

    
    const onSubmit = async data => {
        let resultDataUrl = await new Promise(resolve => {
            let fileReader = new FileReader()
            fileReader.onload = e => resolve(fileReader.result)
            fileReader.readAsDataURL(data.picture['0'])
        })
        handleSetImage(resultDataUrl);
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