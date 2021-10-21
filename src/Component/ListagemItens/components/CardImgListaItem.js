import React from 'react';
import { ViewProduct, NotViewProduct } from '../style'

const CardImgListaItem = (props) => {
    const { produto } = props;
    return (
        <div style={{ 'height': '100%', 'width': '100%', 'grid-row': 'row' }}>
            {(produto.urlImg) && (produto.urlImg.url.length > 0) ?
                <ViewProduct src={produto.urlImg.url} align='rigth' /> :
                <NotViewProduct />
            }
        </div>
    );
}


export default CardImgListaItem;