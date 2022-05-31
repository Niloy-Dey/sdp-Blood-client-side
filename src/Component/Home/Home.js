import React from 'react';
import background from '../../asset/bg-1.webp'
import Contract from '../Contract/Contract';
const Home = () => {
    return (
        <div>
            <img className='h-[100vh] w-[100vw] ' src={background} alt="" />
            <Contract></Contract>
        </div>
    );
};

export default Home;