import React from 'react';
import './Menu.css';
import clsx from 'clsx';
import { makeStyles } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Link } from "react-router-dom";


const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export default function Menu() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };


    const list = (anchor) => (
        <div className='Menu-drawer-pop'>
            <div
                className={clsx(classes.list, {
                    [classes.fullList]: anchor === 'top' || anchor === 'bottom',
                })}
                role="presentation"
                onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}
            >
                <List>
                    <ListItem>
                        <div>
                            <Link className="link" to='/Home'>
                                <Button>Home</Button>
                            </Link>
                        </div>
                    </ListItem>
                    <ListItem>
                        <div>
                            <Link className="link" to='/produtos/juice'>
                                <Button>Juice</Button>
                            </Link>
                        </div>
                    </ListItem>
                    <ListItem>
                        <div>
                            <Link className="link" to='/produtos/nargs'>
                                <Button>Nargs</Button>
                            </Link>
                        </div>
                    </ListItem>
                    <ListItem>
                        <Button href="/" >Logout</Button>
                    </ListItem>
                </List>
            </div>
        </div>

    );

    return (
        <div className="Menu">
            <React.Fragment key='right'>
                <Button className='Menu-button-icone' onClick={toggleDrawer('right', true)}>Menu</Button>
                <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)} className='Menu-drawer'>
                    {list('right')}
                </Drawer>
            </React.Fragment>
        </div>
    );
}