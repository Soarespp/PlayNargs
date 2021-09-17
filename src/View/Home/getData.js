import React, { Component } from "react";
import api from "../../services/Api";

const API_URL =
    "http://localhost:8080/essencias";


const getDados = async () => {
    console.log('getDados')
    await fetch(API_URL)
        .then(response => {
            console.log(response)
            if (!response.ok) throw new Error()
            return response.json()
        }) // retorna uma promise
        .then(result => {
            console.log('result', result);
        })
        .catch(err => {
            // trata se alguma das promises falhar
            console.error('Failed retrieving information', err);
        });
}

const getDados2 = async () => {
    console.log('getDados2')
    await api
        .get('/essencia')
        .then(result => {
            console.log('result', result.data);
        })
        .catch(err => {
            // trata se alguma das promises falhar
            console.error('Failed retrieving information', err);
        });
}

class DadosData extends Component {
    componentDidMount() {
        console.log('componentDidMount')
        fetch(API_URL)
            .then(response => response.json()) // retorna uma promise
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                // trata se alguma das promises falhar
                console.error('Failed retrieving information', err);
            });

    }
    render() {
        return <div>
            <button onClick={() => getDados()}> cklick -</button >
            <button onClick={() => getDados2()}> cklick -</button >
        </div >;
    }
}



export default DadosData;