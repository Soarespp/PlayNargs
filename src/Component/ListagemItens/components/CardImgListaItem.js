import React from 'react';
import { ViewProduct } from '../../styleGeral'
// https://upload-playnargs.s3.amazonaws.com/10c412f76a91a1140ac10e45789ca63a-sem-imagem.jpg
const CardImgListaItem = (props) => {
    const { produto } = props;
    return (
        <div style={{ 'height': '100%', 'width': '100%', 'grid-row': 'row' }}>
            {(produto.urlImg) && (produto.urlImg.url.length > 0) ?
                <ViewProduct src={produto.urlImg.url} align='rigth' /> :
                <ViewProduct src='' align='rigth' />
            }
        </div>
    );
}


export default CardImgListaItem;