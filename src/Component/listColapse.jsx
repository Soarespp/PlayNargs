import './listColapse.css';
import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";

import { DataGrid, gridColumnsTotalWidthSelector } from '@material-ui/data-grid';
import { getGenericIdMax } from './functions/functionGenerics';

import { changePlacesProduct } from '../store/actions/produtos';


const ListColapse = (props) => {
    const { titulo, stateProd, changePlaces, dadosGeral } = props

    const columns: GridColDef[] = [
        {
            field: 'name',
            headerName: titulo,
            width: 150,
            editable: false,
        },
    ];


    const [Places, setPlaces] = useState([]);

    const altPlaces = (arrDados) => {
        var arr = arrDados.slice();
        setPlaces(arr)
    }

    const incPlace = (Place) => {
        const item = { id: getGenericIdMax(Places, 'id'), name: Place }

        var arr = Places.slice();
        arr.push(item)
        setPlaces(arr)
        changePlaces(arr)

        console.log('incPlace aafter', dadosGeral)
    }

    useEffect(() => {

        if ((stateProd !== undefined) && (stateProd.idx !== -1) && (Places.length === 0)) {
            console.log('useEffect if ', stateProd.places)
            console.log('useEffect Places', Places)
            altPlaces(stateProd.places)
        }

        if ((stateProd === undefined) && (Places.length !== 0)) {
            setPlaces([])
        }
    })

    return (
        < div className="ListColapse">
            <div className="Titulo">
                <p>{titulo}</p>
            </div>
            <div>
                <div style={{ height: 200, width: '100%' }}>
                    <DataGrid
                        rows={Places}
                        columns={columns}
                        pageSize={3}
                        rowHeight={25}
                        disableSelectionOnClick
                    />
                </div>
                <div>
                    <input></input>
                    <button onClick={() => incPlace('teste pedro')}>Incluir</button>
                </div>
            </div>
        </div >
    )
}

function mapStateToProps(state) {
    return {
        stateCadProduct: state.dados.cadProduct,
        stateProd: state.dados.produto,
        dadosGeral: state.dados,
    };
}

function mapDispatchToProp(dispatch) {
    return {
        changePlaces(places) {
            //action creator -> action
            const action = changePlacesProduct(places)
            dispatch(action)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProp
)(ListColapse);