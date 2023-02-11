import React from 'react';
import s from "./style.module.css"

const Cards = ({id,title, description, price,thumbnail,priceDisc, deleteProduct}) => {
    return (
        <div className={s.card} >
            <div>
                <img src={thumbnail} alt={title} />                 
            </div>
            <div>
                <p>{title}</p>
                <p>{description}</p>
                <p>{price.toFixed(2)} $</p>
                <p>{priceDisc.toFixed(2)} $</p>                
            </div>
            <div>
                <button onClick={() => deleteProduct(id)}>Delete</button>
            </div>
        </div>
    );
};

export default Cards;