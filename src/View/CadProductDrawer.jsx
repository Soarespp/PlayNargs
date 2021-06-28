import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';


import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { connect } from "react-redux";
import { insertProduct } from '../store/actions/produtos';



const Produto = {
    id: 0,
    name: "Teste Novo Prod",
    brand: 'Nova Marca',
    like: 0,
    dislike: 0,
    place: 'Fabrica',
    description: 'melhor produto do mundo'
};

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

function getIdMax(lstProd) {
    lstProd.sort((a, b) => { return (b.id - a.id) });
    return lstProd[0].id++;
}



const CadProductDrawer = (props) => {
    const classes = useStyles();
    const theme = useTheme();

    const [open, setOpen] = useState(false);
    var [produto, setProduto] = useState(Produto);

    const { produtos } = props;



    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    function SalvarProduto(Arr, produto) {
        const lstProd = Arr.slice();
        setProduto = { ...produto.id = getIdMax(Arr) };
        lstProd.push(produto);
        props.addProduct(lstProd);
        handleDrawerClose();
    }

    const handleChange = (idName) => action => {
        const prod = {
            ...produto,
            [idName]: action.target.value
        };
        setProduto(prod);
    };


    const novoProduto = () => {
        setProduto(Produto);
        handleDrawerOpen();
    }

    return (
        <div>
            <div>
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
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <div className="cadastroProd">
                        <p>Id: {produto.id} </p>
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
                        <button onClick={handleDrawerClose}>Cancelar</button>
                    </div>
                    <Divider />
                </Drawer>
            </div>
        </div >
    );
}


function mapStateToProps(state) {
    return {
        produtos: state.dados.produtos
    };
}
function mapDispatchToProp(dispatch) {
    return {
        addProduct(newFilter) {
            //action creator -> action
            const action = insertProduct(newFilter)
            dispatch(action)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProp
)(CadProductDrawer);