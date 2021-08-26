import './CardSimple.css';
import React from 'react';
import { DislikeOutlined, LikeOutlined } from '@ant-design/icons';
import InfoIcon from '@material-ui/icons/Info';

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionsProduto from '../../store/actions/produtos';
import { Link } from "react-router-dom";

function getPosition(props) {
    if (props.position === 0) return "First"
    if (props.position === 1) return "Second"
    if (props.position === 2) return "Third"
    return ""
}


const CardSimple = (props) => {
    const { produto, nota, clickLike, clickDisLike, auth, changeIdProduct } = props;

    return (
        <div className="Card">
            <div className={`CardSimple ${getPosition(props)}`}>
                <div className="Container-card">
                    <div className="Container-data"
                        onClick={() => { changeIdProduct(produto.idx) }}>
                        <div className="Data">
                            <div className="Title">
                                <div>
                                    <h1 >{`${produto.name} - Nota ${nota}`}</h1>
                                </div>
                                <div>
                                    <Link to={`/cadproduto/${produto.idx}`}><InfoIcon color='action' /></Link>
                                </div>
                            </div>
                            <div className="Descripte">
                                <p >Marca: {produto.brand} - Loja: {produto.place}</p>
                                <p >{<LikeOutlined />} {produto.like} - {<DislikeOutlined />} {produto.dislike}</p>
                            </div>
                        </div>
                    </div>
                    {!auth.loginAnonimo ?
                        (
                            <div className="Container-Controler">
                                <div className="Controler">
                                    <div className="Like"><LikeOutlined onClick={clickLike} /></div>
                                    <div className="Dislike"><DislikeOutlined onClick={clickDisLike} /></div>
                                </div>
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