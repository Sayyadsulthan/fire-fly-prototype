import React from 'react';
import Frame from '../assets/images/Frame.png';

const Navbar = ({ isActive }) => {
    return (
        <div className='navbar ' style={{ filter: isActive ? 'bulr(5px)' : 'none' }}>
            <div className='nav-logo'>
                <img src={Frame} alt='logo' srcset='' />
            </div>
        </div>
    );
};

export default Navbar;
