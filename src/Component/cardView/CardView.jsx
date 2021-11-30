import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionsProduto from '../../store/actions/produtos';

import { ItemLista } from './style';
import ImgView from '../ImgView/ImgView';

import { IconButton } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import InfoIcon from '@mui/icons-material/Info';

import { getNota, getNotaUser } from '../../arquivos/functions';

const CardView = (props) => {
    const { produto, pos, updateProduct, auth, changeIdProduct } = props;
    const [notaInterna, setnotaInterna] = useState(0)
    const [notaInternaUser, setNotaInternaUser] = useState(0);

    const handleChangeNota = (idName) => action => {
        if (idName === 'notaInput') {
            setnotaInterna(Number(action.target.value));
        }
        setNotaInternaUser(Number(action.target.value));
    };

    function aplicarNota(pdrt, nt) {
        const pt = pdrt
        addVoto(pt, nt)
        return pt
    }

    const addVoto = (pdt, nt) => {
        const locPdt = pdt.userVoto.find(item => item.user === auth.user.name)
        if (pdt.userVoto.length === 0) {
            pdt.userVoto = [...pdt.userVoto, { user: auth.user.name, nota: nt }]
        } else {
            if (locPdt !== undefined) {
                pdt.userVoto.forEach((notaLoc, idx) => {
                    if (notaLoc.user === auth.user.name) {
                        pdt.userVoto[idx].nota = nt;
                    }
                })
            } else
                pdt.userVoto = [...pdt.userVoto, { user: auth.user.name, nota: nt }]


        }
    }

    useEffect(() => {
        if (produto.userVoto) {
            setNotaInternaUser(getNotaUser(produto.userVoto, auth.user.name))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [produto.userVoto])

    return (
        <div className='CardView'>
            <ItemLista style={{}} pos={pos}>
                <div style={{ display: 'flex' }} >
                    <div style={{ width: '65%', height: '300px' }} onClick={() => { changeIdProduct(produto.idx) }}>
                        <ImgView produto={produto} vazio={true} />
                    </div>
                    <div style={{ display: 'block', margin: '10px', textAlign: 'left', width: '35%' }}>
                        <div style={{ display: 'flex', width: '100%' }}>
                            <div style={{ width: '80%' }}>
                                <div onClick={() => { changeIdProduct(produto.idx) }}>
                                    <p style={{ margin: '10px' }}>{`Nome:  ${produto.name}`}</p>
                                    <p style={{ margin: '10px' }}>{`Marca:  ${produto.brand}`}</p>
                                    <p style={{ margin: '10px' }}>{`Loja:  ${produto.place}`}</p>
                                    <p style={{ margin: '10px' }}>{`Descrição:  ${produto.description}`}</p>
                                </div>
                                <p style={{ margin: '10px' }}>
                                    Avaliação:
                                    <input type='number' min='0' max='10' step="0.5" id="notaInput" style={{ paddingLeft: '5px', margin: '5px' }} value={notaInternaUser}
                                        readOnly={auth.loginAnonimo}
                                        onChange={handleChangeNota("notaInput")}
                                    />
                                    {!auth.loginAnonimo ?
                                        <IconButton onClick={() => { updateProduct(aplicarNota(produto, getNota(notaInterna))) }}><CheckIcon /></IconButton>
                                        : null}
                                </p>
                            </div>
                            <Link to={`/cadproduto/${produto.idx}`}><IconButton ><InfoIcon /></IconButton></Link>
                            <span style={{
                                display: 'flex', width: '20%', fontSize: '40px', alignItems: 'center', justifyContent: 'center',
                                borderWidth: '3px', borderStyle: 'dashed', borderColor: 'black'

                            }}
                                onClick={() => { changeIdProduct(produto.idx) }}
                            >
                                {(produto.nota) ? produto.nota : '-'}
                            </span>
                        </div>
                        <div>
                            <span >
                                <p style={{ margin: '10px' }}>Descrição:</p>
                                <textarea className="memo"
                                    value={produto.description}
                                    style={{ margin: '10px', width: '90%', maxWidth: '95%', minWidth: '25%' }}
                                    readOnly={true}
                                />
                            </span>
                        </div>
                    </div>
                </div >
            </ItemLista >
        </div>
    )
}

function mapStateToProps(state) {
    return {
        produtos: state.dados.produtos,
        cadProduct: state.dados.cadProduct,
        idProduto: state.dados.idProduto,
        auth: state.auth,
    };
}

const mapDispatchToProp = (dispatch) => bindActionCreators(actionsProduto, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProp
)(CardView);