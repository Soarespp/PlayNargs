import './CardImg.css';
import React from 'react';

export default props => {
    const { nota, nome, marca, loja, img } = props

    function alteraImg() {
        // document.body.style.backgroundColor = "#f3f3f3";
        document.body.style.backgroundImage = { img };
    }

    return (

        < div className="Card">
            <div className="Image" style={{ background: `url(${img})` }}>
                <div className="Box">
                    <p className="title">{nota} - {nome}</p>
                    <p className="description">{marca} - {loja}</p>
                    <div className="Controle">
                        <button>Like</button> - <button>DisLike</button>
                    </div>
                </div>
            </div>
        </div >
    )
}