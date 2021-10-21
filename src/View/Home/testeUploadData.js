import React, { Component } from "react";

import api from "../../services/Api";

import Curso from "../../Component/Curso/curso";

class TesteUploadData extends Component {
    state = {
        uploadedFiles: [],
        loadOk: 'false'
    };

    async componentDidMount() {
        const response = await api.get("img");

        this.setState({
            uploadedFiles: response.data.map(file => ({
                id: file._id,
                name: file.name,
                // readableSize: filesize(file.size),
                preview: file.url,
                uploaded: true,
                url: file.url
            }))
        });
    }

    handleUpload = files => {
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

        this.setState({
            uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles)
        });

        uploadedFiles.forEach(this.processUpload);
    };

    updateFile = (id, data) => {
        this.setState({
            uploadedFiles: this.state.uploadedFiles.map(uploadedFile => {
                return id === uploadedFile.id
                    ? { ...uploadedFile, ...data }
                    : uploadedFile;
            })
        });
    };

    processUpload = uploadedFile => {
        const data = new FormData();

        data.append("file", uploadedFile.file, uploadedFile.name);

        api
            .post("img", data, {
                onUploadProgress: e => {
                    const progress = parseInt(Math.round((e.loaded * 100) / e.total));

                    this.updateFile(uploadedFile.id, {
                        progress
                    });
                }
            })
            .then(response => {
                this.updateFile(uploadedFile.id, {
                    uploaded: true,
                    id: response.data._id,
                    url: response.data.url
                });
            })
            .catch(() => {
                this.updateFile(uploadedFile.id, {
                    error: true
                });
            });
    };

    render() {
        return (
            <div>
                <div>teste data</div>
                <div>
                    <Curso onUpload={this.handleUpload} />
                    <button onClick={() => this.uploadedFiles.forEach(this.processUpload)}> Enviar servidor</button>
                </div>
            </div >
        );
    }
}

export default TesteUploadData;