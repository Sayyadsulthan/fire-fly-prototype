import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ProductItem from './components/ProductItem';
import ProductViewCard from './components/ProductViewCard';
import './styles.css';

import HR_Line from './assets/images/HR_Line.png';
import FireWorks from './assets/images/FireWorks.png';
import ProductImg from './assets/images/ProductImg.png';

const products = [
    { name: 'Raju Rassibomb', img: ProductImg },
    { name: 'Raju Rassibomb', img: ProductImg },
];

export default function App() {
    const [isActive, setIsActive] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const handleClose = () => {
        setIsActive(false);
        setIsVisible(false);
        console.log('clicked');
    };
    const handleVisibleCard = () => {
        setIsVisible(true);
        setIsActive(true);
    };
    return (
        <div className='App '>
            <Navbar isActive={isActive} />
            <Header isActive={isActive} handleVisibleCard={handleVisibleCard} />
            <div className='wrapper  ' style={{ filter: isActive ? 'bulr(5px)' : 'none' }}>
                <div className='about' style={{ filter: isActive && 'blur(5px)' }}>
                    <div className='about-title'>
                        <img src={HR_Line} alt='hr-img' />
                        <p>About</p>
                        <img src={HR_Line} alt='hr-img' />
                    </div>
                    <div className='about-body'>
                        <img src={FireWorks} alt='fireWork' srcset='' />
                        <div className='about-content'>
                            <p>
                                Our products are crafted exclusively from the dreams and screams of
                                young kids who wanted to show their mastery in their chosen fields,
                                but were directed towards a factory for daily wages. Each cracker
                                bursts brighter than their lost smiles, and can be heard louder than
                                their cries for miles. Buy them, burst them, brag about them.
                            </p>
                            <p className='text-strong'>
                                The choice is yours. Because they don’t have one.
                            </p>
                        </div>
                        <img src={FireWorks} alt='fireWork' srcset='' />
                    </div>
                </div>
                {/* Our Product Section */}
                <div className='our-prod' style={{ filter: isActive && 'blur(5px)' }}>
                    <div className='our-prod-title'>
                        <img src={HR_Line} alt='hr-img' />
                        <p>About</p>
                        <img src={HR_Line} alt='hr-img' />
                    </div>

                    <div className='product-items' style={{ filter: isActive && 'blur(5px)' }}>
                        {products.map((product) => (
                            <ProductItem product={product} handleVisibleCard={handleVisibleCard} />
                        ))}
                    </div>
                </div>
            </div>
            {isVisible && <ProductViewCard handleClose={handleClose} />}
            <Footer />
        </div>
    );
}
