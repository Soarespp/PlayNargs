import React from 'react'

import Dropzone from 'react-dropzone'

const Curso = (props) => {
    const { onUpload } = props

    return (
        <div className="uploadfile">
            <Dropzone
                accept="image/*"
                onDropAccepted={onUpload}
                maxFiles="1"
            >
                {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                    <div {...getRootProps()}
                        isDragActive={isDragActive}
                        isDragReject={isDragReject}
                    >
                        <input {...getInputProps()} />
                        Selecione sua Imagem
                    </div>
                )}
            </Dropzone>
        </div>
    )
}
export default (Curso)