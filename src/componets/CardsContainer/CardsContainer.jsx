import React, { useEffect, useState } from 'react';
import Calculation from '../Calculation/Calculation';
import Cards from '../Cards/Cards';
import s from "./style.module.css"

const CardsContainer = () => {
    const [goods, setGoods] = useState([])
    useEffect(() => {
      (async() => {
        const resp = await fetch('https://dummyjson.com/products');
        const data = await resp.json();
        const newData = data.products;
        const products = newData.map(({
            id,
            title,
            description,
            price,
            discountPercentage,
            thumbnail,
            images})=>({
                id,
                title,
                description,
                price,
                discountPercentage,               
                thumbnail,
                images,             
                priceDisc: price-price*discountPercentage/100
                })) 
                setGoods(products)     
      })();  
    },[])

    /* useEffect(()=>{},[]) */
    const deleteProduct = (delId) => {setGoods(goods.filter(item => item.id !== delId))}    
    return (
     <div > 
       <a href="">Code</a>    
        <div className={s.cards} >
            {goods.map((product)=>(<Cards key = {product.id} {...product} deleteProduct= {deleteProduct} />))}
        </div> 
        <div>
            <Calculation goods = {goods}/>
        </div>       
     </div>
    );
};

export default CardsContainer;