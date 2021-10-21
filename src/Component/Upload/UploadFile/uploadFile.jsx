import './uploadFile.css'
import React, { useState } from 'react'

import LoadFile from '../loadFile/LoadFile'
import api from '../../../services/Api'


const UploadFile = (props) => {
    const { setDados } = props

    // const [loaded, setLoaded] = useState(false)
    // const [file, setfile] = useState([])
    // const [flCarregado, setflCarregado] = useState();

    const handleUpload = (files) => {
        const uploadedFiles = files.map(file => ({
            file,
            id: 9999,
            name: file.name,
            // readableSize: filesize(file.size),
            preview: URL.createObjectURL(file),
            progress: 0,
            uploaded: false,
            error: false,
            url: null
        }));
        // setfile(uploadedFiles[0])
        setDados(uploadedFiles[0])
        // setLoaded(true)
    };

    // const processUpload = (uploadedFile) => {
    //     const data = new FormData();

    //     data.append("file", uploadedFile.file, uploadedFile.name);

    //     api
    //         .post("img", data)
    //         .then(response => {
    //             setflCarregado({
    //                 id: response.data._id,
    //                 url: response.data.url
    //             })
    //         })
    //         .catch(() => {

    //         });
    //     setLoaded(false)
    // };

    // const clearLoaded = () => {
    //     setflCarregado({})
    // }

    return (
        <div className="uploadfile">
            <div>
                <LoadFile onUpload={handleUpload} />
            </div>
            {/* <div>
                {loaded ? <p> Load OK</p> : <p> Load False</p>} */}
            {/* <button onClick={() => processUpload(file)}>Upload</button> */}
            {/* <button onClick={() => setflCarregado(file)}>limpar</button> */}
            {/* </div> */}
        </div>
    )
}
export default (UploadFile)