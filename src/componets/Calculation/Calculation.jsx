import React from 'react';
import s from "./style.module.css"

const Calculation = ({goods}) => {
    return (       
         <div className={s.calculation} >
            <h2>Total amount</h2>
            <p>Total products: {goods.length}</p>
            <p>Total cost: {goods.reduce((prev, item) => prev+item.price, 0)} $</p>
            <p>Price with discount: {goods.reduce((prev, item) => prev+item.priceDisc, 0).toFixed(2)} $</p>
        </div>      
       
    );
};

export default Calculation;