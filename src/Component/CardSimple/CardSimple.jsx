import './CardSimple.css';
import React from 'react';
import { DislikeOutlined, LikeOutlined } from '@ant-design/icons';
import InfoIcon from '@material-ui/icons/Info';

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionsProduto from '../../store/actions/produtos';
import { Link } from "react-router-dom";

import LikeDislike from './Component/likeDislike';
import { ViewProduct } from '../styleGeral'


function getPosition(props) {
    if (props.position === 0) return "First"
    if (props.position === 1) return "Second"
    if (props.position === 2) return "Third"
    return ""
}


const CardSimple = (props) => {
    const { produto, nota, auth, changeIdProduct } = props;

    return (
        <div className="CardSimple">
            <div className={`CardSimple ${getPosition(props)}`}>
                <div className="cardsimples-container-dados">
                    <div className="CardSimple-Container-data"
                        onClick={() => { changeIdProduct(produto.idx) }}>
                        <div className="CardSimple-data-Title">
                            <div className="CardSimple-data-Title-item">
                                <h1 className='CardSimple-h1-cortado'>{produto.name}</h1>
                            </div>
                            <div className='CardSimple-data-Title-item'>
                                <p className='CardSimple-h1-cortado'>{`Loja: ${produto.brand}  Loja: ${produto.place} `}</p>
                            </div>
                        </div>
                        <div style={{ height: '150px' }}>
                            {(produto.urlImg) ?
                                <ViewProduct src={produto.urlImg.url} />
                                : null}
                        </div>
                        <div className='CardSimple-data-Title-nota'>
                            <h1 className='CardSimple-h1-cortado-nota'>{`Nota ${nota}`}</h1>
                        </div>
                    </div>
                    <div className='Card-simples-info-cad'>
                        <Link to={`/cadproduto/${produto.idx}`}><InfoIcon color='action' /></Link>
                        <div className="CardSimple-Container-Descripte-line">
                            <p1> {<LikeOutlined />} {produto.like}   {<DislikeOutlined />} {produto.dislike}</p1>
                        </div>
                    </div>
                </div>
                <div className='Container-Controler'>
                    {!auth.loginAnonimo ?
                        (
                            <div className="Container-Controler-login">
                                <LikeDislike produto={produto} />
                            </div>
                        ) : null}
                </div>
            </div >
        </div >
    )
}

function mapStateToProps(state) {
    return {
        produtos: state.dados.produtos,
        cadProduct: state.dados.cadProduct,
        auth: state.auth,
    };
}

const mapDispatchToProp = (dispatch) => bindActionCreators(actionsProduto, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProp
)(CardSimple);