import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import RoomIcon from '@material-ui/icons/Room';


const ListDrawer = (props) => {
    const { dados } = props;
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <RoomIcon aria-describedby={id} variant="contained" color="secundary" onClick={handleClick} />
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Typography >
                    <div className="listDrawe-item">
                        {dados.map((item) => (
                            <p>{item}</p>
                        ))}
                    </div>
                </Typography>
            </Popover>
        </div>
    );
}

export default ListDrawer;