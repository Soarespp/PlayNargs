import React from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const LikeEdit = (props) => {
    const { onClick, enabled, type } = props;

    return (
        <div className="LikeDislike">
            {(type === 'L') ?
                <div>{(enabled) ?
                    <ThumbUpIcon onClick={onClick} /> :
                    <ThumbUpIcon color="disabled" onClick={onClick} />}
                </div> :
                <div>{(enabled) ?
                    <ThumbDownIcon onClick={onClick} /> :
                    <ThumbDownIcon color="disabled" onClick={onClick} />}
                </div>}

        </div >
    )
}

export default (LikeEdit);