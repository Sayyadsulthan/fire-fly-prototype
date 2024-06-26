import React from 'react';
import Frame6 from '../assets/images/Frame 16.png';
import ProductImg from '../assets/images/ProductImg.png';

const Header = ({ isActive, handleVisibleCard }) => {
    return (
        <div
            className='header '
            style={{
                backgroundImage: `url(../assets/images/Frame 16.png)`,
                filter: isActive && 'blur(5px)',
            }}
        >
            {/* <img src={Frame6} alt="" srcset="" /> */}
            <div></div>
            <div className='header-col'>
                <div className='header-text'>
                    <p>The choice is yours.</p>
                    <p> Because they don’t have one.</p>
                </div>
                <button onClick={() => handleVisibleCard()}>Quick View</button>
            </div>
        </div>
    );
};

export default Header;
