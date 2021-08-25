import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
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
        <div>
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
                            <Link to='/Home'>
                                <Button>Home</Button>
                            </Link>
                        </div>
                    </ListItem>
                    <ListItem>
                        <div>
                            <Link to='/produtos/juice'>
                                <Button>Juice</Button>
                            </Link>
                        </div>
                    </ListItem>
                    <ListItem>
                        <div>
                            <Link to='/produtos/nargs'>
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
        <div>
            <React.Fragment key='left'>
                <Button onClick={toggleDrawer('left', true)}>{'left'}</Button>
                <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
                    {list('left')}
                </Drawer>
            </React.Fragment>
        </div>
    );
}