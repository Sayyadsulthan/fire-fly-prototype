import React from 'react';
import ProductImg from '../assets/images/ProductImg.png';

const ProductItem = ({ product, handleVisibleCard }) => {
    return (
        <div className='product-item'>
            <img src={product.img} alt='productItem' srcset='' />
            <div className='product-bottom'>
                <p>{product.name}</p>
                <button onClick={() => handleVisibleCard()}>Quick View</button>
            </div>
        </div>
    );
};

export default ProductItem;
