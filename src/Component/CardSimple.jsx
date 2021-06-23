import './CardSimple.css';
import React from 'react';
import { DislikeOutlined, LikeOutlined } from '@ant-design/icons';

function getPosition(props) {
    if (props.position === 0) return "First"
    if (props.position === 1) return "Second"
    if (props.position === 2) return "Third"
    return ""
}


export default props => {
    // const { nota, name, marca, loja, clickLike, clickDisLike, like, dislike } = props;
    const { produto, nota, clickLike, clickDisLike } = props;

    return (
        <div className="Card">
            <div className={`CardSimple ${getPosition(props)}`}>
                <div className="Container">
                    <div className="Data">
                        <div className="Title">
                            <h1 >{produto.name}</h1>
                            <h1> - </h1>
                            <h1 >Nota: {nota} </h1>
                        </div>
                        <div className="Descripte">
                            <p >Marca: {produto.marca} - Loja: {produto.loja}</p>
                            <p >{<LikeOutlined />} {produto.like} - {<DislikeOutlined />} {produto.dislike}</p>
                        </div>
                    </div>
                    <div className="Controler">
                        <div className="Like"><LikeOutlined onClick={clickLike} /></div>
                        <div className="Dislike"><DislikeOutlined onClick={clickDisLike} /></div>
                    </div>
                </div>
            </div >
        </div >
    )
}