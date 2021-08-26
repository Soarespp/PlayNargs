import './UserLogin.css';
import React, { useState } from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Portal from '@material-ui/core/Portal';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { connect } from "react-redux";

//navBar
import { logout } from '../../store/actions/authActions';

const UserLogin = (props) => {
    const [open, setOpen] = useState(false);
    const { user } = props;
    const handleClickAway = () => {
        setOpen(false);
    };

    return (
        <div className="UserLogin"
            onMouseOver={() => setOpen(true)}
        >
            <div>
                <ClickAwayListener onClickAway={handleClickAway}>
                    <div>
                        <AccountCircleIcon color="inherit"
                        />
                        {open ? (
                            <Portal>
                                <div className="dropdown">
                                    <ul className="dropdown-menu">
                                        <li onMouseLeave={() => handleClickAway()} >
                                            <div className="container-userlogin-title">
                                                <a onClick={() => handleClickAway()}
                                                    aria-expanded={open ? 'true' : 'false'}
                                                    className="dropdown-toggle"
                                                    data-toggle="dropdown">
                                                    <span>{user.name}</span>
                                                </a>
                                                <img className="profile" src={user.img} alt="Profile" />
                                            </div>
                                            <ul className="dropdown-menu">
                                                <li className="user-header">
                                                    <p><small>{user.email}</small></p>
                                                </li>
                                                <li className="user-footer">
                                                    <div className="pull-right">
                                                        <a href="/#" onClick={props.logout}
                                                            className="btn btn-default btn-flat">Sair</a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </Portal>
                        ) : null}
                    </div>
                </ClickAwayListener>
            </div>
        </div >
    )

}

function mapStateToProps(state) {
    return {
        user: state.auth.user,
    };
}

function mapDispatchToProp(dispatch) {
    return {
        logout() {
            //action creator -> action
            const action = logout()
            dispatch(action)
        }
    }
}



export default connect(
    mapStateToProps,
    mapDispatchToProp
)(UserLogin);