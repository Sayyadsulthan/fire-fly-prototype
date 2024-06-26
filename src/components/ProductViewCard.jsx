import React, { useState } from 'react';
import ProductImg from '../assets/images/ProductImg.png';
import SubImg from '../assets/images/ProductSubImg.png';
import CloseImg from '../assets/images/CloseImg.png';
import Vector from '../assets/images/Vector 5.png';
import StarImg from '../assets/images/StarImg.png';

const images = [ProductImg, SubImg, SubImg, SubImg];

const ProductViewCard = ({ handleClose }) => {
    const [mainImg, setMainImg] = useState(ProductImg);
    return (
        <div id='product-view-card' className='product-view-card'>
            {/* row wise for desktop */}
            <div className='view-card-imgs'>
                {/*  column wise*/}
                <div className='main-img'>
                    <img src={mainImg} alt='' srcset='' />
                </div>
                <div className='sub-card-imgs'>
                    {images.map((img) => (
                        <img src={img} alt='' srcset='' />
                    ))}
                </div>
            </div>
            <div className='view-card-content'>
                <div className='card-title'>
                    <p>Raju Rassibomb</p>
                    {/*The Close Button */}
                    <img
                        id='close-img'
                        src={CloseImg}
                        alt=''
                        srcset=''
                        onClick={() => handleClose()}
                    />
                </div>
                <div className='card-body'>
                    <div className='card-price'>
                        <p>MRP:- </p>
                        <p className='text-strong'>Raju’s Dreams/-</p>
                    </div>
                    <div className='card-data'>
                        <img className='hr-dash-img' id='close-img' src={Vector} alt='' srcset='' />
                        <p className='card-sub-title'>Product Description:</p>
                        <p>
                            This product packs an extra punch, thanks to the literal blood, sweat
                            and tears of a young boy.{' '}
                        </p>
                    </div>
                    <div className='card-data'>
                        <img className='hr-dash-img' id='close-img' src={Vector} alt='' srcset='' />
                        <p className='card-sub-title'>Product Contents:</p>
                        <ul type='none' className='content-order'>
                            <li>
                                <img id='close-img' src={StarImg} alt='' srcset='' />{' '}
                                <p>10 hand-hurting pieces of rassi bombs</p>
                            </li>
                            <li>
                                {' '}
                                <img id='close-img' src={StarImg} alt='' srcset='' />
                                <p>Jilled with great pain</p>
                            </li>
                            <li>
                                {' '}
                                <img id='close-img' src={StarImg} alt='' srcset='' />
                                <p>Raju’s hopes</p>
                            </li>
                        </ul>
                    </div>
                    <div className='card-data'>
                        <img className='hr-dash-img' id='close-img' src={Vector} alt='' srcset='' />
                        <p className='card-sub-title'>Shipping Time: </p>
                        <p>Before Raju understands that his dreams do not matter.</p>
                    </div>
                </div>
                <div className='card-btn'>
                    {' '}
                    <button>Choose Now </button>{' '}
                </div>
            </div>
        </div>
    );
};

export default ProductViewCard;
