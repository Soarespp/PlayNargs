import './likeDislike.css';
import React, { useState, useEffect } from 'react';
import LikeEdit from './Like/LikeIcon';

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionsProduto from '../../../store/actions/produtos';

function controlarEnabled(type, event) {
    console.log('controlarEnabled 123', type, event)
    if ((type === event) || (type === 'N'))
        return true
    else
        return false
}

function clickLikeDis(prd, user, event) {
    console.log('clickLikeDis', event)
    var prdEdt = prd
    if (event === 'L')
        prdEdt.like++
    else
        prdEdt.dislike++

    prdEdt.userVoto = [...prd.userVoto, { user: user.name, type: event }]

    return prdEdt
};


function retirarLikeDis(prd, user, type) {
    console.log('RetirarLikeDis')
    var prdEdt = prd

    if (type === 'L') {
        if (prdEdt.like > 0) prdEdt.like--
    }
    else
        if (prdEdt.dislike > 0) prdEdt.dislike--

    prdEdt.userVoto.forEach((dadosVoto, idI) => {
        if (dadosVoto.user === user.name) {
            prdEdt.userVoto.splice(idI, 1)
        }
    })
    return prdEdt
}

const LikDislike = (props) => {
    const { updateProduct, produto, auth } = props
    const [tplike, setTplike] = useState('N')

    function getTypeLike() {
        console.log('getTypeLike', produto.userVoto)
        const teste = produto.userVoto.find(item => item.user === auth.user.name)


        if (teste !== undefined) {
            setTplike(teste.type)
        } else
            setTplike('N')

    }

    function getEnabled(type) {
        return (tplike === type) || (tplike === 'N')
    }

    function controlarClick2(prd, user, type, event) {
        if (type === 'N')
            return clickLikeDis(prd, user, event)
        else
            return retirarLikeDis(prd, user, type)
    }

    useEffect(() => {
        getTypeLike(produto)
    })


    return (
        <div className="LikeDislike">
            <div className="Like"  ><LikeEdit onClick={() => { if (controlarEnabled(tplike, 'L')) { updateProduct(controlarClick2(produto, auth.user, tplike, 'L')) } }} enabled={getEnabled('L')} type="L" /></div>
            <div className="Dislike"  ><LikeEdit onClick={() => { if (controlarEnabled(tplike, 'D')) { updateProduct(controlarClick2(produto, auth.user, tplike, 'D')) } }} enabled={getEnabled('D')} type="D" /></div>
        </div >
    )
}

function mapStateToProps(state) {
    return {
        produtos: state.dados.produtos,
        auth: state.auth,
    };
}

const mapDispatchToProp = (dispatch) => bindActionCreators(actionsProduto, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProp
)(LikDislike);