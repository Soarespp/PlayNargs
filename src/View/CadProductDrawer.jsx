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
import { insertProduct, changeProductState } from '../store/actions/produtos';

const drawerWidth = 440;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        background: 'linear-gradient(45deg, #030303 50%, #FF8E53 90%)'
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    },
    title: {
        flexGrow: 1,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        padding: 15,
        background: 'linear-gradient(45deg, #add8e6 30%, #fafdfe 80%)',
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
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
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    },
}));

const getIdMax = (lstProd) => {
    console.log("getmax")
    const intertLstProd = lstProd.slice();
    intertLstProd.sort((a, b) => { return (b.idx - a.idx) });
    return intertLstProd[0].idx;
}

const CadProductDrawer = (props) => {
    const { produtos, stateCadProduct, stateProd, newProduct } = props;

    const classes = useStyles();
    const theme = useTheme();

    const [open, setOpen] = useState(false);
    var [produto, setProduto] = useState(stateProd);
    const [stateControle, setStateControle] = useState("B");


    const { changeStateProduct } = props;

    function MudarStateProduct(st, prod) {
        setProduto(prod);
        changeStateProduct(st, prod);
    }

    function incluirProduto(Arr, produtoEdt) {
        var id = getIdMax(produtos);
        id++;
        const lstProd = Arr.slice();
        const prd2 = produtoEdt;
        prd2.idx = id;
        lstProd.push(prd2);
        props.addProduct(lstProd);
    }

    function updateProduct(Arr, produtoEdt) {
        var lstProd = Arr.slice();

        lstProd.forEach((item, idx) => {
            if (item.idx === produtoEdt.idx) {
                lstProd[idx] = produtoEdt
            }
        });
        props.addProduct(lstProd);
    }

    function SalvarProduto(Arr, produtoEdt) {
        if (produtoEdt.name === newProduct.name) {
            cancelarEditProd();
        } else if (stateControle === "I") {
            incluirProduto(Arr, produtoEdt);
        }
        else if (stateControle === "U") {
            updateProduct(Arr, produtoEdt);
        }
        setStateControle("B");
        MudarStateProduct(false, newProduct);
    }

    function excluirProduto(Arr, produtoEdt) {
        var lstProd = Arr.slice();
        lstProd.forEach((item, idx) => {
            if (item.idx === produtoEdt.idx) {
                lstProd.splice(idx, 1);
            }
        });
        props.addProduct(lstProd);
        MudarStateProduct(false, newProduct);
    }

    const handleChange = (idName) => action => {
        const prod = {
            ...produto,
            [idName]: action.target.value
        };
        setProduto(prod);
    };


    const novoProduto = () => {
        MudarStateProduct(true, newProduct);
        setStateControle("I");
    }

    const cancelarEditProd = () => {
        setStateControle("B");
        MudarStateProduct(false, newProduct);
    }

    useEffect(() => {
        if ((stateProd !== undefined) && (stateProd.idx !== -1)) {
            if (stateProd.idx !== produto.idx) {
                MudarStateProduct(true, stateProd);
                setStateControle("U");
            }
        }
        setOpen(stateCadProduct);
    }
    );

    return (
        <div>
            <div className="bottop">
                <IconButton
                    color="inherit"
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
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={() => changeStateProduct(false)}>
                            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
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
                    </div>
                    <Divider />
                    <div className="controle">
                        <button onClick={() => SalvarProduto(produtos, produto)}>Salvar</button>
                        <button onClick={cancelarEditProd}>Cancelar</button>
                        <button onClick={() => excluirProduto(produtos, produto)}>Excluir</button>
                    </div>
                    <Divider />
                </Drawer>
            </div>
        </div >
    );
}


function mapStateToProps(state) {
    return {
        produtos: state.dados.produtos,
        stateCadProduct: state.dados.cadProduct,
        stateProd: state.dados.produto,
        newProduct: state.dados.newProduct
    };
}
function mapDispatchToProp(dispatch) {
    return {
        addProduct(newFilter) {
            //action creator -> action
            const action = insertProduct(newFilter)
            dispatch(action)
        },
        changeStateProduct(stateProd) {
            //action creator -> action
            const action = changeProductState(stateProd)
            dispatch(action)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProp
)(CadProductDrawer);