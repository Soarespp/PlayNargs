import React from 'react';
import { ViewProduct } from './style'

const ImgView = (props) => {
    const { produto, vazio = false } = props;
    return (
        <div style={{ gridRow: 'row', height: '100%' }}>
            {
                (produto) && (produto.urlImg) && (produto.urlImg.url.length > 0)
                    ?
                    <ViewProduct src={produto.urlImg.url} align='rigth' style={{}} /> :
                    (vazio) ? <span style={{ width: '200px', height: '200px', backgroundColor: 'fuchsia' }}> </span> :
                        <ViewProduct src='https://upload-playnargs.s3.amazonaws.com/10c412f76a91a1140ac10e45789ca63a-sem-imagem.jpg' align='rigth' />
            }
        </div >
    );
}


export default ImgView;