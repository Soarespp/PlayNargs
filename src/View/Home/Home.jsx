import React from 'react';
import './Home.css';
import { connect } from "react-redux";
import ListagemItens from '../../Component/ListagemItens/ListagemItens';
import { bindActionCreators } from 'redux';
import * as actionsProduto from '../../store/actions/produtos';
import Header from '../../Containers/Header/Header';

const Home = (props) => {
    const { produtos } = props;
    return (
        <div className="Home">
            <Header search={false} />

            <div className="Home-container-dados">
                <div className="Home-container-dados-grid">
                    <div className="Home-countainer-lista">
                        <h1 className='Home-text-header'>Juices</h1>
                        <ListagemItens produtos={produtos} type='juice' />
                    </div>
                    <div className="Home-countainer-lista">
                        <h1 className='Home-text-header'>Nargs</h1>
                        <ListagemItens produtos={produtos} type='nargs' />
                    </div>
                </div>
            </div>
        </div >
    );
}

function mapStateToProps(state) {
    return {
        produtos: state.dados.produtos,
        filter: state.filter,
        auth: state.auth,
    };
}

const mapDispatchToProp = (dispatch) => bindActionCreators(actionsProduto, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProp
)(Home);