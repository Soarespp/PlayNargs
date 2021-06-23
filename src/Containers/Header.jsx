import './Header.css';
import React, { Component } from 'react';
import { Input } from 'antd';
import { render } from '@testing-library/react';

class Header extends Component {
    render() {
        return (
            < div className="Header">
                <div className="Container-Logo">
                    {/* <h1 className="Logo" onClick={() => { href = "/" }}>Play Nargs</h1> */}
                    <a className="Logo" href="/" >Play Nargs</a>
                </div>
                <div className="Container-Schearch">
                    <Input className="Schearch" style={{ width: '20%' }} placeholder="Pesquisa Loja"></Input>
                </div>
            </div >
        )
    }
}

export default Header;