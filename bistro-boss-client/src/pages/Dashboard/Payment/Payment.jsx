import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Payment = () => {
    return (
        <div>
           <SectionTitle heading='payment' subHeading='Please Pay Bill'></SectionTitle> 
           <div>
            <h2 className='text-4xl'>Chose your payment system</h2>
           </div>
        </div>
    );
};

export default Payment;