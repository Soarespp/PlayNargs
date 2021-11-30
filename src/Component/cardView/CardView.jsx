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

const CardView = (props) => {
    const { produto, pos, updateProduct, auth, changeIdProduct } = props;
    const [notaInterna, setnotaInterna] = useState(0)

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
                        pdt.userVoto[idx].nota = nt
                    }
                })
            } else
                pdt.userVoto = [...pdt.userVoto, { user: auth.user.name, nota: nt }]


        }
    }

    useEffect(() => {
        if ((notaInterna !== produto.nota) && ((notaInterna === undefined) || (notaInterna === 0))) {
            setnotaInterna(() => {
                const locPdt = produto.userVoto.find(item => item.user === auth.user.name)

                if (locPdt !== undefined) {
                    return locPdt.nota
                } else
                    return 0
            }
            )
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
                                <p style={{ margin: '10px' }}>{`Nome:  ${produto.name}`}</p>

                                <p style={{ margin: '10px' }}>{`Marca:  ${produto.brand}`}</p>
                                <p style={{ margin: '10px' }}>{`Loja:  ${produto.place}`}</p>
                                <p style={{ margin: '10px' }}>{`Descrição:  ${produto.description}`}</p>
                                <p style={{ margin: '10px' }}>
                                    Avaliação:
                                    <input type='number' min='0' max='10' step="0.5" id="notaInput" style={{ paddingLeft: '5px', margin: '5px' }} value={notaInterna}
                                        readOnly={auth.loginAnonimo}
                                        onChange={() => { setnotaInterna(EventTarget.value) }} />
                                    {!auth.loginAnonimo ?
                                        <IconButton onClick={() => { updateProduct(aplicarNota(produto, Number(document.getElementById("notaInput").value))) }}><CheckIcon /></IconButton>
                                        : null}
                                </p>
                            </div>
                            <Link to={`/cadproduto/${produto.idx}`}><IconButton ><InfoIcon /></IconButton></Link>
                            <span style={{
                                display: 'flex', width: '20%', fontSize: '40px', alignItems: 'center', justifyContent: 'center',
                                borderWidth: '3px', borderStyle: 'dashed', borderColor: 'black'
                            }}>
                                {(produto.nota) ? produto.nota : '-'}
                            </span>
                        </div>
                        <div>
                            <span >
                                <p style={{ margin: '10px' }}>Descrição:</p>
                                <textarea className="memo"
                                    value={produto.description}
                                    style={{ margin: '10px', width: '90%' }}
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