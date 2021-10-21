import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionsProduto from '../../store/actions/produtos';

import UploadFile from '../../Component/Upload/UploadFile/uploadFile';

import { Preview } from './style';


const drawerWidth = 800;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        background: 'linear-gradient(45deg, #030303 50%, #FF8E53 90%)',
        color: 'azure',
        alignItems: 'flex-start',
        textAlign: 'flex-start',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
    },
    appBarShift: {
        // width: `calc(100% - ${drawerWidth}px)`,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
        color: 'azure'
    },
    title: {
        flexGrow: 1,
        color: 'azure'
    },
    hide: {
        display: 'none',
        color: 'azure'
    },
    drawer: {
        width: `100%`, //drawerWidth,
        flexShrink: 0,
        color: 'azure'
    },
    drawerPaper: {
        width: `20%`, //drawerWidth,
        minWidth: `250px`,
        padding: 15,
        background: 'linear-gradient(to right, rgba(82, 182, 154, 0.452) , rgba(52, 160, 164, 0.99))',
        color: 'azure'
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'flex-start',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
        color: 'azure',
        textAlign: 'flex-start',
        // background: 'linear-gradient(45deg, #fdfdfd 30%, #cacaca 80%)',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
        color: 'azure',
        alignItems: 'flex-start',
        textAlign: 'flex-start',
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
        color: 'azure',
        alignItems: 'flex-start',
        textAlign: 'flex-start',
    },
}));

const getIdMax = (lstProd, type) => {
    const intertLstProd = lstProd.slice();
    intertLstProd.sort((a, b) => { return (b.idx - a.idx) });
    return intertLstProd[0].idx;
}



const CadProductDrawer = (props) => {
    const { produtos, changeIdProduct, idProduto, newProduct, auth } = props;

    const classes = useStyles();
    const theme = useTheme();

    const [open, setOpen] = useState(false);
    var [produto, setProduto] = useState(newProduct);
    const [stateControle, setStateControle] = useState("B");
    const [file, setFile] = useState({});
    const [idFile, setIdFile] = useState('');

    const alterarFileLocal = (file) => {
        setFile(file)
        setIdFile(file.id)
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

    return (
        <div>
            <div className="bottop">
                <IconButton
                    color="azure"
                    aria-label="open drawer"
                    edge="end"
                    onClick={novoProduto}
                    className={clsx(open && classes.hide)}
                >
                    <MenuIcon />
                </IconButton>
            </div>
            <div className={classes.root}>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="right"
                    color="secondary"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton
                            onClick={() => cancelarEditProd()}
                            color="inherit"
                        >
                            {theme.direction === 'rtl' ? <ChevronLeftIcon color="inherit" /> : <ChevronRightIcon color="inherit" />}
                        </IconButton>
                    </div>
                    <Divider />
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
                                    {/* <span> */}
                                    <Preview src={produto.urlImg.url} />
                                    {/* </span> */}
                                    {/* <div>Id local: {idFile}</div> */}
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
                </Drawer>
            </div >
        </div >
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
)(CadProductDrawer);