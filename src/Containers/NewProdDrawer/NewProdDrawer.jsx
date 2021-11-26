import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionsProduto from '../../store/actions/produtos';

import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

import UploadFile from '../../Component/Upload/UploadFile/uploadFile';

import { Preview } from './style';

const getIdMax = (lstProd, type) => {
    const intertLstProd = lstProd.slice();
    intertLstProd.sort((a, b) => { return (b.idx - a.idx) });
    return intertLstProd[0].idx;
}

const NewProdDrawer = (props) => {
    const { produtos, changeIdProduct, idProduto, newProduct, auth } = props;
    const [open, setOpen] = useState(false);
    var [produto, setProduto] = useState(newProduct);
    const [stateControle, setStateControle] = useState("B");
    const [file, setFile] = useState({});
    const [idFile, setIdFile] = useState('');

    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const alterarFileLocal = (file) => {
        console.log('file', file)
        setFile(file)
        setIdFile(file.id)
        console.log('idFile', idFile)
    }

    function incluirProduto(produtoEdt) {
        var id = getIdMax(produtos, produtoEdt.type);
        id++;
        const prd2 = produtoEdt;
        prd2.idx = id;
        prd2.userVoto = []
        if (auth.user.email !== null) {
            prd2.userCad = auth.user.email;
        }
        props.insertProduct(prd2, file);
    }

    function updateProduct(produtoEdt) {
        props.updateProduct(produtoEdt, file, idFile);
    }

    function SalvarProduto(produtoEdt) {
        if (stateControle === 'I') {
            incluirProduto(produtoEdt);
        } else
            updateProduct(produtoEdt);
        cancelarEditProd();
    }

    function excluirProduto(produtoEdt) {
        props.deleteProduct(produtoEdt);
        cancelarEditProd();
    }

    const handleChange = (idName) => action => {
        const prod = {
            ...produto,
            [idName]: action.target.value
        };
        setProduto(prod);
    };


    const novoProduto = () => {
        setStateControle('I');
    }

    const cancelarEditProd = () => {
        changeIdProduct(-1);
        setProduto(newProduct);
        setStateControle("B");
        setIdFile('');
        setFile({});
    }

    useEffect(() => {
        const getDadosProduto = (idInt) => {
            var prodInt = produtos.find(prod => prod.idx === idInt)
            return prodInt
        }

        if ((idProduto === -1) && (stateControle === 'I')) {
            setOpen(true)
        } else if (idProduto !== -1) {
            if (idProduto !== produto.idx) {
                setProduto(getDadosProduto(idProduto))
            }
            setOpen(true)
        }
        else
            setOpen(false)

        if ((produto.urlImg) && (produto.urlImg.id.length !== 0) && (idFile.length === 0)) {
            setIdFile(produto.urlImg.id)
        }

    }, [setOpen, produtos, idProduto, produto.idx, stateControle]);

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className="cadastroProd">
                <p>Id: {produto.idx} </p>
                <p>Nome: </p>
                <input
                    className="input"
                    value={produto.name}
                    onChange={handleChange("name")}
                />
                <p>Marca: </p>
                <input className="input"
                    value={produto.brand}
                    onChange={handleChange("brand")}
                />
                <p>Loja: </p>
                <input className="input" value={produto.place}
                    onChange={handleChange("place")}
                />
                <p>Informações: </p>
                <textarea className="memo"
                    value={produto.description}
                    onChange={handleChange("description")}
                />
                <div >
                    {((produto.urlImg) && (produto.urlImg.id.length !== 0) && (idFile.length !== 0))
                        ? <div style={{ "text-align": "rigth" }}>
                            <Preview src={produto.urlImg.url} />
                            <button onClick={() => setIdFile('')}>X</button>
                        </div>
                        : <UploadFile setDados={alterarFileLocal} />}
                    {/* <UploadFile setDados={setFile} /> */}
                </div>
                <div onChange={handleChange("type")}>
                    <input type="radio" value="juice" name="gender" checked={produto.type === 'juice'} /> Juice
                    <input type="radio" value="nargs" name="gender" checked={produto.type === 'nargs'} /> Nargs
                </div>
                <div className="controle">
                    <button
                        onClick={() => SalvarProduto(produto)}
                    >Salvar</button>
                    <button
                        onClick={() => cancelarEditProd()}
                    >Cancelar</button>
                    {((props.auth.user !== null) && (produto.userCad === props.auth.user.email)) ?
                        (
                            <button
                                onClick={() => excluirProduto(produto)}
                            >Excluir</button>
                        )
                        : null}
                </div>
            </div>
        </Box>
    );

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <IconButton onClick={novoProduto}>
                        <MenuIcon />
                    </IconButton>
                    <SwipeableDrawer
                        anchor={anchor}
                        // open={state[anchor]}
                        open={open}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
}

function mapStateToProps(state) {
    return {
        produtos: state.dados.produtos,
        stateCadProduct: state.dados.cadProduct,
        idProduto: state.dados.idProduto,
        newProduct: state.dados.newProduct,
        auth: state.auth
    };
}

const mapDispatchToProp = (dispatch) => bindActionCreators(actionsProduto, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProp
)(NewProdDrawer);